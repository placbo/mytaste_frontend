import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  CircularProgress,
  Container,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
import { FC, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { getItem, getItemReviews, getItemTags } from '../api/api';
import { IMAGES_URL } from '../constants';
import { Item, Review, Tag } from '../types';
import placeholderItemImage from '../resources/images/placeholder.png';

export const ItemDetails: FC = () => {
  const { id } = useParams();
  const [item, setItem] = useState<Item | undefined>(undefined);
  const [tags, setTags] = useState<Tag[]>([]);
  const [reviews, seReviews] = useState<Review[]>([]);

  const [isWaiting, setIsWaiting] = useState(false);
  const [apiError, setApiError] = useState<Error | undefined>(undefined);
  const [isWaitingTags, setIsWaitingTags] = useState(false);
  const [isWaitingReviews, setIsWaitingReviews] = useState(false);

  // if (result.ratings && Object.values(result.ratings).length > 0) {
  //   if (currentUser && result.ratings[currentUser.email]) {
  //     setUserRating(result.ratings[currentUser.email]);
  //     setHasRatingForCurrentUser(true);
  //   }
  // }

  useEffect(() => {
    const geItemWrapper = async () => {
      if (id && Number.isInteger(+id)) {
        setApiError(undefined);
        const result = await getItem(+id, setApiError, setIsWaiting);
        setItem(result);

        const tags = await getItemTags(+id, null, setIsWaitingTags);
        setTags(tags);

        const reviews = await getItemReviews(+id, null, setIsWaitingReviews);
        seReviews(reviews);
      }
    };
    geItemWrapper();
  }, [id]);

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
      <Container maxWidth="sm">
        {item && (
          <Card sx={{ m: 2 }}>
            <CardHeader title={item.title}></CardHeader>
            <CardContent>
              <Stack direction="row-reverse" spacing={1}>
                {tags && tags.map((tag) => <Chip key={tag.tagId} label={tag.tag} variant="outlined" />)}
              </Stack>
            </CardContent>
            <CardMedia
              sx={{ ObjectFit: 'cover', height: '30rem' }}
              component="img"
              image={item.imageURL ? `${IMAGES_URL}${item.imageURL}` : placeholderItemImage}
              alt="image"></CardMedia>
            <CardContent>
              {isWaitingTags && <CircularProgress />}
              {apiError && (
                <Alert sx={{ m: 2 }} severity="warning">
                  Får ikke tak i emneknagger
                </Alert>
              )}

              <Stack direction="column" spacing={2}>
                {reviews &&
                  reviews.map((review) => (
                    <Card key={review.reviewId} sx={{ backgroundColor: '#333333' }}>
                      <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Rating
                          sx={{ mb: 2 }}
                          name="simple-controlled"
                          precision={0.5}
                          readOnly
                          value={review.rating}
                        />
                        <Typography variant="body1" gutterBottom>
                          {review.comment}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                          {review.user}
                        </Typography>
                      </CardContent>
                    </Card>
                  ))}
              </Stack>
            </CardContent>
            <CardActions>
              <Button>Ranger</Button>
              <Button disabled>Rediger</Button>
              <Button disabled>Slett</Button>
            </CardActions>
          </Card>
        )}
      </Container>
    </>
  );
};
