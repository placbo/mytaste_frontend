import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { FC, useContext, useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { getItem, getItemReviews, getItemTags } from '../api/api';
import { axiosPostHandler } from '../api/apiUtils';
import { AuthContext } from '../App';
import { AddImageComponent } from '../components/AddImageComponent';
import { ItemForm } from '../components/ItemForm';
import { ITEMS_URL } from '../constants';
import { emptyItemFormFields, ISaveItemResponse, Item, ItemFormFields, Review } from '../types';

export const ManageItemPage: FC = () => {
  const { id: itemIdFromPath } = useParams();

  const [item, setItem] = useState<ItemFormFields>(emptyItemFormFields);

  const [isLoadingItems, setIsLoadingItems] = useState(false);
  const [isLoadingTags, setIsLoadingTags] = useState(false);
  const [isLoadingReviews, setIsLoadingReviews] = useState(false);
  const [loadItemsError, setLoadItemsError] = useState<Error | undefined>(undefined);
  const [loadTagsError, setLoadTagsError] = useState<Error | undefined>(undefined);
  const [loadReviewsError, setLoadReviewsError] = useState<Error | undefined>(undefined);
  const [saveImageError, setSaveImageError] = useState<Error | undefined>(undefined);
  const [saveImageSuccess, setSaveImageSuccess] = useState<boolean>(false);

  const [isSaving, setIsSaving] = useState(false);
  const [savingError, setSavingError] = useState<Error | undefined>(undefined);
  const { user } = useContext(AuthContext);

  const [itemId, setItemId] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const geItemWrapper = async () => {
      if (itemIdFromPath && Number.isInteger(+itemIdFromPath)) {
        const itemFromApi: ItemFormFields = emptyItemFormFields;

        setLoadItemsError(undefined);
        const result = await getItem(+itemIdFromPath, setLoadItemsError, setIsLoadingItems);
        itemFromApi.title = result.title || '';
        itemFromApi.description = result.description || '';

        setLoadTagsError(undefined);
        const tags = await getItemTags(+itemIdFromPath, setLoadTagsError, setIsLoadingTags);

        itemFromApi.tags = tags.join(',');

        // TODO for edit: plukk ut bare den reviewen som er koblet til brukeren
        const reviews: Review[] = await getItemReviews(+itemIdFromPath, setLoadReviewsError, setIsLoadingReviews);
        const usersReview = reviews.filter((review) => review.user === user);
        console.log('USERREVIEWS: ', usersReview);

        setItem(itemFromApi);
      }
    };
    geItemWrapper();
  }, [itemIdFromPath]);

  const saveForm = async (dataFromForm: ItemFormFields) => {
    if (itemIdFromPath) {
      //updateItem(item);
      console.log('TODO: Update item');
    } else {
      const itemObjectToSave: Item = {
        title: dataFromForm.title,
        description: dataFromForm.description,
        creator: user,
      };
      const result: ISaveItemResponse = await axiosPostHandler(
        `${ITEMS_URL}`,
        itemObjectToSave,
        setSavingError,
        setIsSaving
      );
      const resultItemId = result.id;

      const tagsList = dataFromForm.tags.split(',');
      await axiosPostHandler(`${ITEMS_URL}/${resultItemId}/tags`, { tags: tagsList }, setSavingError, setIsSaving);

      const rewiewToSave: Review = { comment: dataFromForm.review, user: user, rating: dataFromForm.rating };
      await axiosPostHandler(`${ITEMS_URL}/${resultItemId}/reviews`, rewiewToSave, setSavingError, setIsSaving);

      setItemId(resultItemId);
    }
  };

  if (isLoadingItems || isLoadingTags) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (loadItemsError || loadTagsError) {
    return (
      <Alert sx={{ m: 2 }} severity="error">
        Innlasting av data gikk gæli!
      </Alert>
    );
  }

  return (
    <Container maxWidth="sm">
      {savingError && (
        <Alert sx={{ m: 2 }} severity="error">
          Lagring av data gikk gæli!
        </Alert>
      )}

      <Card sx={{ m: 2 }}>
        <CardHeader title={itemIdFromPath ? 'Rediger:' : 'Legg til ny: '}></CardHeader>
        <CardContent>
          {itemIdFromPath ? (
            <div>Skrudd av for redigering enn så lenge</div>
          ) : (
            <ItemForm isSaving={isSaving} item={item} saveForm={saveForm} itemId={itemId} />
          )}
        </CardContent>
        <CardContent>
          <Typography component="legend">Bilde</Typography>

          <AddImageComponent
            itemId={itemId}
            setError={setSaveImageError}
            setSuccess={setSaveImageSuccess}></AddImageComponent>

          {saveImageError && <Alert severity="error">{'Kunne ikke lagre bilde'}</Alert>}
          {saveImageSuccess && <Alert severity="success">{'Bildet ble lagret'}</Alert>}

          <Grid container justifyContent="right" sx={{ mt: 4 }}>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                sx={{ ml: 2 }}
                onClick={() => {
                  navigate('/');
                }}>
                {'Lukk'}
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};
