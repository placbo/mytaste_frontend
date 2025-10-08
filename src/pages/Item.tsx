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
import { FC, useEffect, useState } from 'react';

import { Link, useNavigate, useParams } from 'react-router-dom';
import { getItem, getItemReviews, getItemTags } from '../api/api';
import { axiosDeleteHandler } from '../api/apiUtils';
import { IMAGES_URL, ITEMS_URL } from '../constants';
import { useAuth } from '../context/AuthContext';
import placeholderItemImage from '../resources/images/placeholder.png';
import { Item, Review, Tag } from '../types';
import { ReviewList } from './ReviewList';

export const ItemDetails: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [item, setItem] = useState<Item | undefined>(undefined);
  const [tags, setTags] = useState<Tag[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);

  const [isLoadingItem, setIsLoadingItem] = useState(false);
  const [isLoadingTags, setIsLoadingTags] = useState(false);
  const [isLoadingReviews, setIsLoadingReviews] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const [itemApiError, setItemApiError] = useState<Error | undefined>(undefined);
  const [reviewsApiError, setReviewsApiError] = useState<Error | undefined>(undefined);
  const [tagsApiError, setTagsApiError] = useState<Error | undefined>(undefined);
  const [deletingError, setDeletingError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    const geItemWrapper = async () => {
      if (id && Number.isInteger(+id)) {
        setItemApiError(undefined);
        const result = await getItem(+id, setItemApiError, setIsLoadingItem);
        setItem(result);

        setItemApiError(undefined);
        const tags = await getItemTags(+id, setTagsApiError, setIsLoadingTags);
        setTags(tags);

        const reviews = await getItemReviews(+id, setReviewsApiError, setIsLoadingReviews);
        setReviews(reviews);
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

  if (itemApiError)
    return (
      <Alert sx={{ m: 2 }} severity="error">
        Innlasting av data gikk gæli!
      </Alert>
    );

  if (isLoadingItem || isDeleting)
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
        <CircularProgress />
      </Box>
    );

  return (
    <Container maxWidth="sm">
      {deletingError && (
        <Alert sx={{ m: 2 }} severity="error">
          Sletting gikk galt!
        </Alert>
      )}
      {item && (
        <Card sx={{ m: 2 }}>
          <CardHeader title={item.title}></CardHeader>
          <CardContent>{item.description}</CardContent>
          <CardContent>
            {isLoadingTags && <CircularProgress />}
            {tagsApiError && (
              <Alert sx={{ m: 2 }} severity="warning">
                Får ikke tak i emneknagger
              </Alert>
            )}
            <Stack direction="row-reverse" spacing={1}>
              {tags?.map((tag) => <Chip key={tag.tagId} label={tag.tag} variant="outlined" />)}
            </Stack>
          </CardContent>
          <CardMedia
            sx={{ ObjectFit: 'cover', height: '30rem' }}
            component="img"
            image={item.imageURL ? `${IMAGES_URL}/${item.imageURL}` : placeholderItemImage}
            alt="image"></CardMedia>
          <CardContent>
            {isLoadingReviews && <CircularProgress />}
            {reviewsApiError && (
              <Alert sx={{ m: 2 }} severity="warning">
                Får ikke tak i omtaler
              </Alert>
            )}
            <ReviewList reviews={reviews} />
          </CardContent>
          <CardActions>
            <Button disabled>Ranger</Button>
            {user && (
              <Button component={Link} to={`/item/${id}/edit`}>
                Rediger
              </Button>
            )}
            {user && <Button onClick={deleteItem}>Slett</Button>}
          </CardActions>
        </Card>
      )}
    </Container>
  );
};
