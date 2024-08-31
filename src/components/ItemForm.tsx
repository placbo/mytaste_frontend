import { Box, Button, Grid, Rating, TextField, Typography } from '@mui/material';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ItemFormFields } from '../types';
import { AddImageComponent } from './AddImageComponent';

interface ItemFormProps {
  saveForm: (dataFromForm: ItemFormFields) => void;
  isSaving: boolean;
  item: ItemFormFields;
  itemId: string;
}

export const ItemForm = ({ saveForm, isSaving, item, itemId }: ItemFormProps) => {
  const [title, setTitle] = useState<string>(item.title || '');
  const [tags, setTags] = useState<string>(item.tags || '');
  const [description, setDescription] = useState<string>(item.description || '');
  const [rating, setRating] = useState<number>(item.rating || 0);
  const [review, setRewiev] = useState<string>(item.review || '');
  const [saveImageError, setSaveImageError] = useState<Error | undefined>(undefined);

  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    saveForm({
      title,
      tags,
      description,
      rating,
      review,
    });
  }

  return (
    <form className="itemform" onSubmit={handleSubmit}>
      <Grid container alignItems="center" justifyContent="center" sx={{ mb: 2 }}>
        <Grid item>
          <AddImageComponent itemId={itemId} setError={setSaveImageError}></AddImageComponent>
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <TextField
          id="title"
          required
          fullWidth
          label="Produktnavn"
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
          value={title}
          margin="normal"
          disabled={isSaving}
        />

        <TextField
          id="description"
          fullWidth
          label="Beskrivelse?"
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          name="description"
          value={description}
          margin="normal"
          disabled={isSaving}
        />

        <TextField
          id="tags"
          fullWidth
          label="Emnekknagger (komma-separert)"
          onChange={(e) => setTags(e.target.value)}
          type="text"
          name="tags"
          value={tags}
          margin="normal"
          disabled={isSaving}
        />

        <Box mb={3} m={1}>
          <Typography component="legend">Rating</Typography>
          <Rating
            name="rating"
            value={rating}
            disabled={isSaving}
            onChange={(_, value) => {
              setRating(value || 0);
            }}
          />
        </Box>

        <TextField
          id="review"
          fullWidth
          label="Ka du syns?"
          onChange={(e) => setRewiev(e.target.value)}
          type="text"
          name="review"
          value={review}
          margin="normal"
          disabled={isSaving}
        />

        <Grid container justifyContent="right" sx={{ mt: 4 }}>
          <Grid item>
            <Button type="submit" variant="contained" color="primary" sx={{ ml: 2 }}>
              {itemId ? 'Oppdater felter' : 'Lagre før du legger til bilde'}
            </Button>
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
      </Box>
    </form>
  );
};
