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
  Stack,
} from '@mui/material';
import { FC, useContext, useEffect, useState } from 'react';

import { Link, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../App';
import { getItem, getItemReviews, getItemTags } from '../api/api';
import { axiosDeleteHandler } from '../api/apiUtils';
import { IMAGES_URL, ITEMS_URL } from '../constants';
import placeholderItemImage from '../resources/images/placeholder.png';
import { Item, Review, Tag } from '../types';
import { ReviewList } from './reviewList';

export const ItemDetails: FC = () => {
  const { id } = useParams();
  const { isUserLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const [item, setItem] = useState<Item | undefined>(undefined);
  const [tags, setTags] = useState<Tag[]>([]);
  const [reviews, seReviews] = useState<Review[]>([]);

  const [isWaiting, setIsWaiting] = useState(false);
  const [itemApiError, setItemApiError] = useState<Error | undefined>(undefined);
  const [reviewsApiError, setReviewsApiError] = useState<Error | undefined>(undefined);
  const [tagsApiError, setTagsApiError] = useState<Error | undefined>(undefined);
  const [isWaitingTags, setIsWaitingTags] = useState(false);
  const [isWaitingReviews, setIsWaitingReviews] = useState(false);
  const [deletingError, setDeletingError] = useState<Error | undefined>(undefined);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const geItemWrapper = async () => {
      if (id && Number.isInteger(+id)) {
        setItemApiError(undefined);
        const result = await getItem(+id, setItemApiError, setIsWaiting);
        setItem(result);

        setItemApiError(undefined);
        const tags = await getItemTags(+id, setTagsApiError, setIsWaitingTags);
        setTags(tags);

        const reviews = await getItemReviews(+id, setReviewsApiError, setIsWaitingReviews);
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
      {itemApiError && (
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
              {isWaitingTags && <CircularProgress />}
              {tagsApiError && (
                <Alert sx={{ m: 2 }} severity="warning">
                  Får ikke tak i emneknagger
                </Alert>
              )}
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
              {isWaitingReviews && <CircularProgress />}
              {reviewsApiError && (
                <Alert sx={{ m: 2 }} severity="warning">
                  Får ikke tak i omtaler
                </Alert>
              )}
              <ReviewList reviews={reviews} />
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
