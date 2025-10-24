import { useEffect, useRef, ReactNode } from 'react';
import { Alert, Box, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useItems } from '../hooks/useItems.js';
import { SearchBar } from '../components/SearchBar.js';
import { TagList } from '../components/TagList.js';
import { ItemCard } from '../components/ItemCard.js';

export function ItemList() {
  // Use the custom hooks
  const {
    items,
    isWaiting,
    apiError,
    query,
    isSearchMode,
    isTyping,
    hasMore,
    setQueryValue,
    clearQuery,
    triggerNextPageFetch,
  } = useItems();

  // sentinel ref for infinite scroll
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasMore || isWaiting) return;
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && hasMore && !isWaiting) {
            // temporarily unobserve to avoid rapid duplicate triggers
            observer.unobserve(entry.target);
            triggerNextPageFetch();
          }
        }
      },
      { root: null, rootMargin: '200px', threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasMore, isWaiting, triggerNextPageFetch]);

  // whether we should show the compact bottom loader (while fetching next page)
  const showBottomLoader = hasMore && isWaiting && items.length > 0;

  // precompute bottom area to avoid nested ternary in JSX (satisfies linter)
  let bottomArea: ReactNode = null;
  if (showBottomLoader) {
    bottomArea = (
      <Box sx={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }} aria-live="polite">
          <CircularProgress size={20} />
          <Typography variant="body2">Laster mer…</Typography>
        </Box>
      </Box>
    );
  } else if (hasMore) {
    bottomArea = (
      <Box sx={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
        <div ref={sentinelRef} aria-hidden style={{ width: '100%', height: 1 }} />
      </Box>
    );
  }

  return (
    <>
      <SearchBar
        query={query}
        onQueryChange={setQueryValue}
        onClear={clearQuery}
        label="Søk i alle elementer (tittel)"
      />

      <TagList
        onTagClick={setQueryValue}
        maxTags={10}
        title="10 mest brukte tags (klikk for å søke):"
      />

      {isWaiting && (
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
          <CircularProgress />
        </Box>
      )}

      {apiError && (
        <Alert sx={{ m: 2 }} severity="error">
          Innlasting av data gikk gæli!
        </Alert>
      )}

      {items.length === 0 && query.trim() && isSearchMode && !isWaiting && !isTyping && (
        <Typography variant="body1" sx={{ px: 2, py: 1 }}>
          Ingen treff for: <strong>{query}</strong>
        </Typography>
      )}

      {items.map((item) => (
        <ItemCard key={item.itemId} item={item} />
      ))}

      {/* bottom area: show a small visible loader while loading next page, otherwise the sentinel element */}
      {bottomArea}
    </>
  );
}
