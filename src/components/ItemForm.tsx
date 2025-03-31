import { Box, Button, GridLegacy, Rating, TextField, Typography } from '@mui/material';

import { Controller, useForm } from 'react-hook-form';

interface ItemFormProps {
  saveForm: (dataFromForm: ItemFormFields) => void;
  isSaving: boolean;
  item?: ItemFormFields;
  itemId?: string | undefined;
  isDisabled?: boolean;
}

export type ItemFormFields = {
  title: string;
  tags: string;
  description: string;
  rating: number;
  review: string;
};

export const ItemForm = ({ saveForm, isSaving, item, itemId, isDisabled = false }: ItemFormProps) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm<ItemFormFields>({
    defaultValues: {
      title: item?.title,
      tags: item?.tags,
      description: item?.description,
      rating: item?.rating,
      review: item?.review,
    },
  });

  function onSubmit({ title, tags, description, rating, review }: ItemFormFields) {
    saveForm({
      title,
      tags,
      description,
      rating,
      review,
    });
  }

  return (
    <form className="itemform" onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <TextField
          id="title"
          {...register('title')}
          required
          fullWidth
          label="Produktnavn"
          type="text"
          margin="normal"
          disabled={isSaving || isDisabled}
        />
        <TextField
          id="description"
          {...register('description')}
          fullWidth
          label="Beskrivelse?"
          type="text"
          margin="normal"
          disabled={isSaving || isDisabled}
        />
        <TextField
          id="tags"
          {...register('tags')}
          fullWidth
          label="Emnekknagger (komma-separert)"
          type="text"
          margin="normal"
          disabled={isSaving || isDisabled}
        />
        <Box mb={3} m={1}>
          <Typography component="legend">Rating</Typography>
          <Controller
            control={control}
            name={'rating'}
            defaultValue={0}
            render={({ field: { onChange, value } }) => (
              <Rating name={'rating'} onChange={onChange} value={Number(value)} />
            )}
          />
        </Box>
        <TextField
          id="review"
          {...register('review')}
          fullWidth
          label="Ka du syns?"
          type="text"
          margin="normal"
          disabled={isSaving || isDisabled}
        />

        <GridLegacy container justifyContent="right" sx={{ mt: 4 }}>
          <GridLegacy item>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSaving || isDisabled || !isDirty}
              sx={{ ml: 2 }}>
              {itemId ? 'Oppdater felter' : 'Lagre før du legger til bilde'}
            </Button>
          </GridLegacy>
        </GridLegacy>
      </Box>
    </form>
  );
};
