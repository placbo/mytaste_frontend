import {
  Alert,
  Box,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Container
} from '@mui/material';
import { FC, useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { getItem, getItemReviews, getItemTags } from '../api/api';
import { axiosPostHandler } from '../api/apiUtils';
import { ItemForm } from '../components/ItemForm';
import { ITEMS_URL } from '../constants';
import { Item, Review, Tag } from '../types';

export const ManageItemPage: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const emptyItem: Item = {
    itemId: '',
    title: '',
    imageURL: '',
    creator: 'perbjester@gmail.com',
  };

  const [item, setItem] = useState<Item>(emptyItem);
  const [tags, setTags] = useState<Tag[]>([]);

  const [reviews, seReviews] = useState<Review[]>([]);
  const [isWaiting, setIsWaiting] = useState(false);
  const [apiError, setApiError] = useState<Error | undefined>(undefined);
  const [savingError, setSavingError] = useState<Error | undefined>(undefined);
  const [isSaving, setIsSaving] = useState(false);
  //  const currentUser = undefined; //TODO: context for bruker-data ??

  useEffect(() => {
    const geItemWrapper = async () => {
      if (id && Number.isInteger(+id)) {
        setApiError(undefined);
        const result = await getItem(+id, setApiError, setIsWaiting);
        setItem(result);

        const tags = await getItemTags(+id, null, setIsWaiting);
        setTags(tags);

        const reviews = await getItemReviews(+id, null, setIsWaiting);
        seReviews(reviews);
      }
    };
    geItemWrapper();
  }, [id]);

  const handleFormChange = ({ target }: any) => {
    let insertValue = target.value;
    if (target.name === 'tags') {
      insertValue = target.value.split(',');
    }
    setItem({
      ...item,
      [target.name]: insertValue,
    });
  };

  const handleSubmit = async (event: any) => {
    //if (!formIsValid()) return;
    event.preventDefault();
    // if (item.id) {
    //updateItem(item);
    //} else {
    const itemsUrl = `${ITEMS_URL}`;
    await axiosPostHandler(itemsUrl, item, setSavingError, setIsSaving);
    navigate('/');
    // }
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
      {savingError && (
        <Alert sx={{ m: 2 }} severity="error">
          Lagring av data gikk gæli!
        </Alert>
      )}
      <Container maxWidth="sm">
        {item && (
          <Card sx={{ m: 2 }}>
            <CardHeader title="Legg til ny: "></CardHeader>
            <CardContent>
              <ItemForm
                disabled={isSaving}
                item={item}
                onChange={handleFormChange}
                handleSubmit={handleSubmit}
                tags={tags}
              />
            </CardContent>
          </Card>
        )}
      </Container>
    </>
  );
};
