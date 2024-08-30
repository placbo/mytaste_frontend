import { Alert, Box, Card, CardContent, CardHeader, CircularProgress, Container } from '@mui/material';
import { FC, useContext, useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { getItem, getItemReviews, getItemTags } from '../api/api';
import { axiosPostHandler } from '../api/apiUtils';
import { ItemForm } from '../components/ItemForm';
import { ITEMS_URL } from '../constants';
import { emptyItemFormFields, ISaveItemResponse, Item, ItemFormFields, Review, Tag } from '../types';
import { AuthContext } from '../App';

export const ManageItemPage: FC = () => {
  const { id: itemIdFromPath } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState<ItemFormFields>(emptyItemFormFields);

  const [isLoadingItems, setIsLoadingItems] = useState(false);
  const [isLoadingTags, setIsLoadingTags] = useState(false);
  const [isLoadingReviews, setIsLoadingReviews] = useState(false);
  const [loadItemsError, setLoadItemsError] = useState<Error | undefined>(undefined);
  const [loadTagsError, setLoadTagsError] = useState<Error | undefined>(undefined);
  const [loadReviewsError, setLoadReviewsError] = useState<Error | undefined>(undefined);

  const [isSaving, setIsSaving] = useState(false);
  const [savingError, setSavingError] = useState<Error | undefined>(undefined);
  const { user } = useContext(AuthContext);

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

        // TODO: plukk ut bare den reviewen som er koblet til brukeren
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
      const newId = result.id;

      const tagsList = dataFromForm.tags.split(',');
      await axiosPostHandler(`${ITEMS_URL}/${newId}/tags`, { tags: tagsList }, setSavingError, setIsSaving);

      const rewiewToSave: Review = { comment: dataFromForm.review, user: user, rating: dataFromForm.rating };
      await axiosPostHandler(`${ITEMS_URL}/${newId}/reviews`, rewiewToSave, setSavingError, setIsSaving);
    }
    navigate('/');
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
            <ItemForm isSaving={isSaving} item={item} saveForm={saveForm} />
          )}
        </CardContent>
      </Card>
    </Container>
  );
};
