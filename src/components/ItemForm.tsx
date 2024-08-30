import { Box, Button, Rating, TextField, Typography } from '@mui/material';

import { useState } from 'react';
import { ItemFormFields } from '../types';

interface myProps {
  saveForm: (dataFromForm: ItemFormFields) => void;
  isSaving: boolean;
  item: ItemFormFields;
}

export const ItemForm = ({ saveForm, isSaving, item }: myProps) => {
  const [title, setTitle] = useState<string>(item.title || '');
  const [tags, setTags] = useState<string>(item.tags || '');
  const [description, setDescription] = useState<string>(item.description || '');
  const [rating, setRating] = useState<number>(item.rating || 0);
  const [review, setRewiev] = useState<string>(item.review || '');

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

        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, alignSelf: 'flex-end' }}>
          Lagre før du legger til bilde
        </Button>
      </Box>
    </form>
  );
};
