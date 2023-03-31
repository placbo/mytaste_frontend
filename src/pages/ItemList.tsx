import { useEffect, useState } from 'react';
import { getAllItems } from '../api/api.js';
import { Header } from '../components/Header.js';
import Rating from '@mui/material/Rating';
import CircularProgress from '@mui/material/CircularProgress';
import { Item } from '../types.js';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import placeholderItemImage from '../resources/images/placeholder.png';
import { THUMBNAIL_URL } from '../constants.js';

// const RatingLabel = styled.span`
//   margin-left: 1rem;
//   font-style: italic;
//   color: grey;
// `;

export function ItemList() {
  const [items, setItems] = useState<Item[]>([]);
  const [isWaiting, setIsWaiting] = useState(false);
  const [apiError, setApiError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    getAllItems(setApiError, setIsWaiting)
      .then((result) => {
        setItems(result.items);
      })
      .catch((error) => console.error(error.message));
  }, []);

  if (isWaiting) return <CircularProgress />;

  return (
    <>
      <Header />
      {items &&
        items.map((item: any) => (
          // <Link key={item.id} to={'/item/' + item.id}>
          <Card sx={{ minWidth: 200, display: 'flex', margin: '1rem' }}>
            <CardMedia
              component="img"
              sx={{ maxWidth: 150 }}
              image={item.imageURL ? `${THUMBNAIL_URL}${item.imageURL}` : placeholderItemImage}
              alt="image"
            />
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                <Typography component="div" variant="h5" gutterBottom>
                  {item.title}
                </Typography>
                <Box sx={{ display: 'flex', gap: '1rem' }}>
                  <Rating name="simple-controlled" precision={0.5} readOnly value={+item.averageRating} />
                  <Typography variant="subtitle1" color="text.secondary" component="span">
                    {item.averageRatingCount || '0'} {item.averageRatingCount === 1 ? 'vote' : 'votes'}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
    </>
  );
}
