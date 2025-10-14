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
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Rating from '@mui/material/Rating';
import { Link as RouterLink } from 'react-router-dom';
import { THUMBNAIL_URL } from '../constants.js';
import placeholderItemImage from '../resources/images/placeholder.png';
import { Item } from '../types.js';
import { useTags } from '../hooks/useTags.js';
import { useItems } from '../hooks/useItems.js';
import { SearchBar } from '../components/SearchBar.js';
import { TagList } from '../components/TagList.js';

export function ItemList() {
  // Use the custom hooks
  const { tags, loading: tagsLoading, error: tagsError } = useTags();
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

  return (
    <>
      <SearchBar
        query={query}
        onQueryChange={setQueryValue}
        onClear={clearQuery}
        label="Søk i alle elementer (tittel)"
      />

      <TagList
        tags={tags}
        loading={tagsLoading}
        error={tagsError}
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

      {items.map((item: Item) => (
        <Card sx={{ minWidth: 200, margin: '1rem' }} key={item.itemId}>
          <CardActionArea
            component={RouterLink}
            to={'/item/' + item.itemId}
            sx={{ display: 'flex', justifyContent: 'start' }}
          >
            <CardMedia
              component="img"
              sx={{ maxWidth: 100 }}
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
