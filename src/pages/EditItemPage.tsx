import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  Container,
  GridLegacy,
  Typography,
} from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getItem, getItemReviews, getItemTags } from '../api/api';
import { axiosPostHandler, axiosPutHandler } from '../api/apiUtils';
import { ItemForm, ItemFormFields } from '../components/ItemForm';
import { ITEMS_URL, THUMBNAIL_URL } from '../constants';
import { useAuth } from '../context/AuthContext';
import placeholderItemImage from '../resources/images/placeholder.png';
import { Item, Review } from '../types';

export const EditItemPage: FC = () => {
  const { user } = useAuth();

  const navigate = useNavigate();
  const { id: itemIdFromPath } = useParams();

  const [item, setItem] = useState<ItemFormFields>();
  const [imageFileName, setImageFileName] = useState<string | undefined>(undefined);

  const [isLoadingItems, setIsLoadingItems] = useState(false);
  const [loadItemsError, setLoadItemsError] = useState<Error | undefined>(undefined);

  const [isLoadingTags, setIsLoadingTags] = useState(false);
  const [loadTagsError, setLoadTagsError] = useState<Error | undefined>(undefined);

  const [isLoadingReviews, setIsLoadingReviews] = useState(false);
  const [loadReviewsError, setLoadReviewsError] = useState<Error | undefined>(undefined);

  const [isSaving, setIsSaving] = useState(false);
  const [savingError, setSavingError] = useState<Error | undefined>(undefined);
  const [hasSaved, setHasSaved] = useState<boolean>(false);

  useEffect(() => {
    const geItemAndMetadata = async () => {
      if (itemIdFromPath && Number.isInteger(+itemIdFromPath)) {
        setLoadItemsError(undefined);
        const itemResult = await getItem(+itemIdFromPath, setLoadItemsError, setIsLoadingItems);

        setLoadTagsError(undefined);
        const tags = await getItemTags(+itemIdFromPath, setLoadTagsError, setIsLoadingTags);

        setLoadReviewsError(undefined);
        const reviews: Review[] = await getItemReviews(+itemIdFromPath, setLoadReviewsError, setIsLoadingReviews);
        //const usersReviews = reviews.filter((review) => review.user === user);
        const usersReview = reviews[0];

        setItem({
          title: itemResult.title || '',
          description: itemResult.description || '',
          rating: usersReview.rating || 0,
          review: usersReview.comment || '',
          tags: tags.map((tag) => tag.tag).join(','),
        });
        setImageFileName(itemResult.imageURL);
      }
    };
    geItemAndMetadata();
  }, [itemIdFromPath]);

  const saveForm = async (dataFromForm: ItemFormFields) => {
    setSavingError(undefined);
    setHasSaved(false);
    const itemObjectToUpdate: Item = {
      title: dataFromForm.title,
      description: dataFromForm.description,
    };
    await axiosPutHandler(`${ITEMS_URL}/${itemIdFromPath}`, itemObjectToUpdate, setSavingError, setIsSaving);
    const tagsList = dataFromForm.tags.split(',');
    await axiosPostHandler(`${ITEMS_URL}/${itemIdFromPath}/tags`, { tags: tagsList }, setSavingError, setIsSaving);
    const rewiewToSave: Review = { comment: dataFromForm.review, user: user?.id, rating: dataFromForm.rating };

    //TODO: ta høyde for at epost ikke finnes mer i user - bruker id i stedet

    await axiosPostHandler(`${ITEMS_URL}/${itemIdFromPath}/reviews`, rewiewToSave, setSavingError, setIsSaving);
    setHasSaved(true);
  };

  if (isLoadingItems || isLoadingTags || isLoadingReviews) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (loadItemsError || loadTagsError || loadReviewsError) {
    return (
      <Alert sx={{ m: 2 }} severity="error">
        Innlasting av data gikk gæli!
      </Alert>
    );
  }

  if (!itemIdFromPath) {
    return (
      <Alert sx={{ m: 2 }} severity="error">
        Missing itemId
      </Alert>
    );
  }

  return (
    <Container maxWidth="sm">
      <Card sx={{ m: 2 }}>
        <CardHeader title={'Rediger:'}></CardHeader>
        <CardContent>
          <ItemForm isSaving={isSaving} item={item} saveForm={saveForm} itemId={itemIdFromPath} />
          {savingError && (
            <Alert sx={{ m: 2 }} severity="error">
              Lagring av data gikk gæli!
            </Alert>
          )}
          {hasSaved && !savingError && (
            <Alert sx={{ m: 2 }} severity="success">
              Data oppdatert!
            </Alert>
          )}
        </CardContent>
        <CardContent>
          <GridLegacy container justifyContent="center" sx={{ mt: 4 }}>
            <GridLegacy item>
              <Typography component="legend">Bilde (Ikke editerbart pr nå)</Typography>
              <CardMedia
                component="img"
                sx={{ maxWidth: 150 }}
                image={imageFileName ? `${THUMBNAIL_URL}${imageFileName}` : placeholderItemImage}
                alt="image"
              />
            </GridLegacy>
          </GridLegacy>
          <GridLegacy container justifyContent="right" sx={{ mt: 4 }}>
            <GridLegacy item>
              <Button
                variant="contained"
                color="secondary"
                sx={{ ml: 2 }}
                onClick={() => {
                  navigate(`/item/${itemIdFromPath}`);
                }}>
                {'Lukk'}
              </Button>
            </GridLegacy>
          </GridLegacy>
        </CardContent>
      </Card>
    </Container>
  );
};
