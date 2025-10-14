import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Stack,
} from '@mui/material';
import Rating from '@mui/material/Rating';
import { Link as RouterLink } from 'react-router-dom';
import { THUMBNAIL_URL } from '../constants.js';
import placeholderItemImage from '../resources/images/placeholder.png';
import { Item } from '../types.js';

interface ItemCardProps {
  item: Item;
}

export function ItemCard({ item }: ItemCardProps) {
  return (
    <Card sx={{ minWidth: 200, margin: '1rem' }}>
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
  );
}
