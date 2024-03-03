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
import { FC, useContext, useEffect, useState } from 'react';

import { Link, useNavigate, useParams } from 'react-router-dom';
import { getItem, getItemReviews, getItemTags } from '../api/api';
import { IMAGES_URL, ITEMS_URL } from '../constants';
import { Item, Review, Tag } from '../types';
import placeholderItemImage from '../resources/images/placeholder.png';
import { AuthContext } from '../App';
import { axiosDeleteHandler } from '../api/apiUtils';

export const ItemDetails: FC = () => {
  const { id } = useParams();
  const { isUserLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const [item, setItem] = useState<Item | undefined>(undefined);
  const [tags, setTags] = useState<Tag[]>([]);
  const [reviews, seReviews] = useState<Review[]>([]);

  const [isWaiting, setIsWaiting] = useState(false);
  const [apiError, setApiError] = useState<Error | undefined>(undefined);
  const [isWaitingTags, setIsWaitingTags] = useState(false);
  const [isWaitingReviews, setIsWaitingReviews] = useState(false);
  const [deletingError, setDeletingError] = useState<Error | undefined>(undefined);
  const [isDeleting, setIsDeleting] = useState(false);

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

  async function deleteItem(): Promise<void> {
    const confirmed = window.confirm('Slette?');
    if (confirmed) {
      const url = `${ITEMS_URL}/${id}`;
      await axiosDeleteHandler(url, setDeletingError, setIsDeleting);
      navigate('/');
    }
  }

  return (
    <>
      {isWaiting && (
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
          <CircularProgress />
        </Box>
      )}
      {isDeleting && (
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
          <CircularProgress />
        </Box>
      )}
      {apiError && (
        <Alert sx={{ m: 2 }} severity="error">
          Innlasting av data gikk gæli!
        </Alert>
      )}
      {deletingError && (
        <Alert sx={{ m: 2 }} severity="error">
          Sletting gikk galt!
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
              <Button disabled>Ranger</Button>
              {isUserLoggedIn && (
                <Button component={Link} to={`/item/${id}/edit`}>
                  Rediger
                </Button>
              )}
              {isUserLoggedIn && <Button onClick={deleteItem}>Slett</Button>}
            </CardActions>
          </Card>
        )}
      </Container>
    </>
  );
};
