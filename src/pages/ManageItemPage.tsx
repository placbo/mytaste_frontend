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
import { ItemForm } from '../components/ItemForm';
import { IMAGES_URL } from '../constants';
import { Item, Review, Tag } from '../types';

export const ManageItemPage: FC = () => {
  const { id } = useParams();

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

  const [isSaving, setIsSaving] = useState(false);
  const currentUser = undefined;

  const handleFormChange = ({ target }: any) => {
    let insertValue = target.value;
    if (target.name === 'tags') {
      insertValue = target.value.split(',');
    }
    console.log(target.value);
    console.log(target.name);

    setItem({
      ...item,
      [target.name]: insertValue,
    });
  };

  const handleSubmit = (event: any) => {
    //if (!formIsValid()) return;
    event.preventDefault();
    console.log(event);
    // if (item.id) {
    //   updateItem(item);
    // } else {
    //   addItem(item);
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
