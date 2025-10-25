import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Container,
  Rating,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getItem, getUserReview, saveReview } from '../api/api';
import { useAuth } from '../context/AuthContext';
import { Item, Review } from '../types';

export const RateItemPage: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [item, setItem] = useState<Item | undefined>(undefined);
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [existingReview, setExistingReview] = useState<Review | undefined>(undefined);

  const [isLoadingItem, setIsLoadingItem] = useState(false);
  const [isLoadingReview, setIsLoadingReview] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const [itemApiError, setItemApiError] = useState<Error | undefined>(undefined);
  const [savingError, setSavingError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    const loadItemAndReview = async () => {
      if (id && Number.isInteger(+id) && user) {
        setItemApiError(undefined);
        const itemResult = await getItem(+id, setItemApiError, setIsLoadingItem);
        setItem(itemResult);

        const userReview = await getUserReview(+id, setItemApiError, setIsLoadingReview);
        if (userReview) {
          setExistingReview(userReview);
          setRating(userReview.rating);
          setComment(userReview.comment || '');
        }
      }
    };
    loadItemAndReview();
  }, [id, user]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!id || !user) return;

    const reviewData: Review = {
      itemId: +id,
      rating: rating,
      comment: comment,
    };

    if (existingReview?.reviewId) {
      reviewData.reviewId = existingReview.reviewId;
    }

    setSavingError(undefined);
    const result = await saveReview(reviewData, setSavingError, setIsSaving);

    if (result && !savingError) {
      // Navigate back to the item page after successful save
      navigate(`/item/${id}`);
    }
  };

  const handleCancel = () => {
    navigate(`/item/${id}`);
  };

  if (itemApiError) {
    return (
      <Alert sx={{ m: 2 }} severity="error">
        Kunne ikke laste inn elementet! {itemApiError.message}
      </Alert>
    );
  }

  if (isLoadingItem || isLoadingReview) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="sm">
      {item && (
        <Card sx={{ m: 2 }}>
          <CardHeader
            title={existingReview ? 'Rediger din rangering' : 'Ranger element'}
            subheader={item.title}
          />
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                {savingError && (
                  <Alert severity="error">Kunne ikke lagre rangering. Prøv igjen.</Alert>
                )}

                <Box>
                  <Typography component="legend" gutterBottom>
                    Din rangering
                  </Typography>
                  <Rating
                    name="rating"
                    value={rating}
                    precision={1}
                    size="large"
                    onChange={(_event, newValue) => {
                      setRating(newValue || 0);
                    }}
                  />
                </Box>

                <TextField
                  label="Kommentar (valgfritt)"
                  multiline
                  rows={4}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  fullWidth
                  variant="outlined"
                />

                <Stack direction="row" spacing={2} justifyContent="flex-end">
                  <Button variant="outlined" onClick={handleCancel} disabled={isSaving}>
                    Avbryt
                  </Button>
                  <Button type="submit" variant="contained" disabled={isSaving || rating === 0}>
                    {isSaving ? <CircularProgress size={24} /> : 'Lagre'}
                  </Button>
                </Stack>
              </Stack>
            </form>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};
