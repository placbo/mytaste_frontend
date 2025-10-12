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
import { getItems, searchItems } from '../api/api.js';
import { DEFAULT_NUMBER_OF_RESULTS } from '../api/apiUtils.js';
import { THUMBNAIL_URL } from '../constants.js';
import placeholderItemImage from '../resources/images/placeholder.png';
import { Item } from '../types.js';

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

  // Load complete list of items (not search) on page or when exiting search mode
  useEffect(() => {
    if (isSearchMode) return; // Don't load regular items when in search mode

    const getItemsWrapper = async () => {
      setApiError(undefined);
      const result = await getItems(page, DEFAULT_NUMBER_OF_RESULTS, setApiError, setIsWaiting);
      if (result) {
        setItems((prev) => [...prev, ...result.items]);
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
              sx={{ maxWidth: 150 }}
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
                <Typography component="div" variant="h6" gutterBottom>
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
                    <Typography variant="subtitle1" color="text.secondary" component="span">
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
        <Button onClick={triggerNextPageFetch} disabled={isWaiting}>
          Vis mer...
        </Button>
      </Box>
    </>
  );
}
