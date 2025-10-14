import { useState, useEffect, useCallback } from 'react';
import { getItems, searchItems } from '../api/api.js';
import { DEFAULT_NUMBER_OF_RESULTS } from '../api/apiUtils.js';
import { Item } from '../types.js';

export function useItems() {
  const [items, setItems] = useState<Item[]>([]);
  const [isWaiting, setIsWaiting] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [apiError, setApiError] = useState<Error | undefined>(undefined);

  const [query, setQuery] = useState('');
  const [searchPage, setSearchPage] = useState<number>(1);
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  // State to track if more items are available
  const [hasMore, setHasMore] = useState(true);

  // Load complete list of items (not search) on page or when exiting search mode
  useEffect(() => {
    if (isSearchMode) return; // Don't load regular items when in search mode

    const getItemsWrapper = async () => {
      setApiError(undefined);
      const result = await getItems(page, DEFAULT_NUMBER_OF_RESULTS, setApiError, setIsWaiting);
      if (result) {
        setItems((prev) => [...prev, ...result.items]);
        setHasMore(result.items.length === DEFAULT_NUMBER_OF_RESULTS);
      } else {
        setHasMore(false);
      }
    };
    getItemsWrapper();
  }, [page, isSearchMode]);

  // Search function
  const performSearch = useCallback(
    async (searchQuery: string, pageNum: number = 1) => {
      if (!searchQuery.trim()) {
        setIsSearchMode(false);
        setItems([]);
        setPage(1);
        setHasMore(true);
        return;
      }

      setApiError(undefined);
      setIsSearchMode(true);

      const result = await searchItems(
        searchQuery,
        pageNum,
        DEFAULT_NUMBER_OF_RESULTS,
        setApiError,
        setIsWaiting
      );
      if (result) {
        if (pageNum === 1) {
          setItems(result.items);
        } else {
          setItems((prev) => [...prev, ...result.items]);
        }
        setHasMore(result.items.length === DEFAULT_NUMBER_OF_RESULTS);
      } else {
        setHasMore(false);
      }
    },
    [setApiError, setIsWaiting]
  );

  // Handle search input changes with debouncing
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsTyping(false); // User stopped typing, debounce period starts
      if (query.trim().length > 0) {
        setSearchPage(1);
        performSearch(query, 1);
      } else if (hasSearched) {
        setIsSearchMode(false);
        setItems([]);
        setPage(1);
      }
    }, 600); // debounce in ms

    return () => clearTimeout(timeoutId);
  }, [query, performSearch, hasSearched]);

  const triggerNextPageFetch = () => {
    if (isSearchMode) {
      const nextSearchPage = searchPage + 1;
      setSearchPage(nextSearchPage);
      performSearch(query, nextSearchPage);
    } else {
      setPage((prev) => prev + 1);
    }
  };

  const clearQuery = () => {
    setQuery('');
    setIsSearchMode(false);
    setItems([]);
    setPage(1);
    setSearchPage(1);
    setHasSearched(false);
    setHasMore(true);
  };

  const setQueryValue = (newQuery: string) => {
    setQuery(newQuery);
    setIsTyping(true); // User is typing
    if (!hasSearched) setHasSearched(true);
  };

  return {
    // State
    items,
    isWaiting,
    apiError,
    query,
    isSearchMode,
    isTyping,
    hasMore,

    // Actions
    setQueryValue,
    clearQuery,
    triggerNextPageFetch,
  };
}
