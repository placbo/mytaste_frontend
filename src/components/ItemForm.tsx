import { Box, Button, TextField } from '@mui/material';

import { Item, Tag } from '../types';

interface myProps {
  handleSubmit: any;
  disabled: any;
  onChange: any;
  item: Item;
  tags: Tag[];
}

export const ItemForm = ({ handleSubmit, disabled, onChange, item, tags }: myProps) => {
  return (
    <form className="itemform" onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <TextField
          id="title"
          required
          fullWidth
          label="Title"
          onChange={onChange}
          type="text"
          name="title"
          value={item.title || ''}
          margin="normal"
        />

        {/* <TextField
          margin="normal"
          id="tags"
          fullWidth
          label="Tags (comma separated)"
          onChange={onChange}
          type="text"
          name="tags"
          value={tags || ''}
        /> */}

        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, alignSelf: 'flex-end' }}>
          Lagre før du legger til bilde
        </Button>
      </Box>
    </form>
  );
};
