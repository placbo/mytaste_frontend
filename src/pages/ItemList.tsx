import {
  Alert,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Stack,
  TextField,
  IconButton,
  InputAdornment,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import CircularProgress from '@mui/material/CircularProgress';
import Rating from '@mui/material/Rating';
import { useEffect, useState, useCallback } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { getItems, searchItems, getTags } from '../api/api.js';
import { DEFAULT_NUMBER_OF_RESULTS } from '../api/apiUtils.js';
import { THUMBNAIL_URL } from '../constants.js';
import placeholderItemImage from '../resources/images/placeholder.png';
import { Item, TagWithUsageCount } from '../types.js';

export function ItemList() {
  const [items, setItems] = useState<Item[]>([]);
  const [isWaiting, setIsWaiting] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [apiError, setApiError] = useState<Error | undefined>(undefined);

  const [query, setQuery] = useState('');
  const [searchPage, setSearchPage] = useState<number>(1);
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  // New state for tags
  const [tags, setTags] = useState<TagWithUsageCount[]>([]);
  const [tagsLoading, setTagsLoading] = useState(false);
  const [tagsError, setTagsError] = useState<Error | undefined>(undefined);

  // State to track if more items are available
  const [hasMore, setHasMore] = useState(true);

  // Load tags when component mounts
  useEffect(() => {
    const fetchTags = async () => {
      setTagsLoading(true);
      setTagsError(undefined);
      try {
        const result = await getTags(setTagsError, setTagsLoading);
        if (result) {
          setTags(result);
        }
      } catch (error) {
        console.error('Error fetching tags:', error);
      } finally {
        setTagsLoading(false);
      }
    };
    fetchTags();
  }, []);

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
  const performSearch = useCallback(async (searchQuery: string, pageNum: number = 1) => {
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
  }, []);

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

  return (
    <>
      <Box sx={{ p: 2, pt: 3, pb: 1 }}>
        <TextField
          fullWidth
          label={'Søk i alle elementer (tittel)'}
          size="small"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsTyping(true); // User is typing
            if (!hasSearched) setHasSearched(true);
          }}
          InputProps={{
            endAdornment: query && (
              <InputAdornment position="end">
                <IconButton aria-label="tøm søk" size="small" onClick={clearQuery} edge="end">
                  <ClearIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Tags List */}
      <Box sx={{ px: 2, pb: 2 }}>
        {tagsLoading && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CircularProgress size={16} />
            <Typography variant="body2" color="text.secondary">
              Laster tags...
            </Typography>
          </Box>
        )}

        {tagsError && (
          <Alert severity="warning" sx={{ mb: 2 }}>
            Kunne ikke laste tags
          </Alert>
        )}

        {!tagsLoading && !tagsError && tags.length > 0 && (
          <>
            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1, mt: 1 }}>
              10 mest brukte tags (klikk for å søke):
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
              {tags
                .sort((a: TagWithUsageCount, b: TagWithUsageCount) => b.usageCount - a.usageCount) // Sort by usage count descending
                .slice(0, 10) // Show top 10 most used tags
                .map((tag: TagWithUsageCount) => (
                  <Chip
                    key={tag.tagId}
                    label={`${tag.tag} (${tag.usageCount})`}
                    variant="outlined"
                    size="small"
                    clickable
                    onClick={() => setQuery(tag.tag)}
                    sx={{
                      '&:hover': {
                        backgroundColor: 'action.hover',
                      },
                    }}
                  />
                ))}
            </Stack>
          </>
        )}
      </Box>

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

      {items.map((item: Item) => (
        <Card sx={{ minWidth: 200, margin: '1rem' }} key={item.itemId}>
          <CardActionArea
            component={RouterLink}
            to={'/item/' + item.itemId}
            sx={{ display: 'flex', justifyContent: 'start' }}
          >
            <CardMedia
              component="img"
              sx={{ maxWidth: 70 }}
              image={item.imageURL ? `${THUMBNAIL_URL}${item.imageURL}` : placeholderItemImage}
              alt="image"
            />
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  justifyContent: 'space-between',
                }}
              >
                <Typography
                  component="div"
                  variant="h6"
                  gutterBottom
                  sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}
                >
                  {item.title}
                </Typography>
                {item.averageRating && (
                  <>
                    <Rating
                      name="simple-controlled"
                      precision={0.5}
                      readOnly
                      value={+item.averageRating}
                    />
                    <Typography variant="subtitle2" color="text.secondary" component="span">
                      {item.averageRatingCount || '0'}{' '}
                      {item.averageRatingCount === 1 ? 'stemme' : 'stemmer'}
                    </Typography>
                  </>
                )}
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  sx={{ flexWrap: 'wrap', marginTop: '0.5rem' }}
                >
                  {item.tags?.map((tag) => (
                    <Chip key={tag.tagId} label={tag.tag} variant="outlined" />
                  ))}
                </Stack>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}

      <Box sx={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
        {hasMore && (
          <Button onClick={triggerNextPageFetch} disabled={isWaiting}>
            Vis mer...
          </Button>
        )}
      </Box>
    </>
  );
}
