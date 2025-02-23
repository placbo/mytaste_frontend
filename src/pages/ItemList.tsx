import { Alert, Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Rating from '@mui/material/Rating';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { getItems } from '../api/api.js';
import { DEFAULT_NUMBER_OF_RESULTS } from '../api/apiUtils.js';
import { THUMBNAIL_URL } from '../constants.js';
import placeholderItemImage from '../resources/images/placeholder.png';
import { Item } from '../types.js';

export function ItemList() {
  const [items, setItems] = useState<Item[]>([]);
  const [isWaiting, setIsWaiting] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [apiError, setApiError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    const geItemsWrapper = async () => {
      setApiError(undefined);
      const result = await getItems(page, DEFAULT_NUMBER_OF_RESULTS, setApiError, setIsWaiting);
      if (result) {
        setItems((prevState) => {
          return [...prevState, ...result.items];
        });
      }
    };
    geItemsWrapper();
  }, [page]);

  const triggerNextPageFetch = () => {
    setPage((prevState: number) => prevState + 1);
  };

  return (
    <>
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

      {items &&
        items.length > 0 &&
        items.map((item: Item) => (
          <Card sx={{ minWidth: 200, margin: '1rem' }} key={item.itemId}>
            <CardActionArea
              component={RouterLink}
              to={'/item/' + item.itemId}
              sx={{ display: 'flex', justifyContent: 'start' }}>
              <CardMedia
                component="img"
                sx={{ maxWidth: 150 }}
                image={item.imageURL ? `${THUMBNAIL_URL}${item.imageURL}` : placeholderItemImage}
                alt="image"
              />
              <CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                  <Typography component="div" variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  {item.averageRating && (
                    <Box sx={{ display: 'flex', gap: '1rem' }}>
                      <Rating name="simple-controlled" precision={0.5} readOnly value={+item.averageRating} />
                      <Typography variant="subtitle1" color="text.secondary" component="span">
                        {item.averageRatingCount || '0'} {item.averageRatingCount === 1 ? 'stemme' : 'stemmer'}
                      </Typography>
                      {/* <Stack direction="row-reverse" spacing={1}>
                        {tags && tags.map((tag) => <Chip key={tag.tagId} label={tag.tag} variant="outlined" />)}
                      </Stack> */}
                    </Box>
                  )}
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      <Box sx={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
        <Button onClick={triggerNextPageFetch}>Vis mer...</Button>
      </Box>
    </>
  );
}
