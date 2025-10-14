import { TextField, IconButton, InputAdornment, Box } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

interface SearchBarProps {
  query: string;
  onQueryChange: any;
  onClear: () => void;
  label?: string;
}

export function SearchBar({ query, onQueryChange, onClear, label = 'Search' }: SearchBarProps) {
  return (
    <Box sx={{ p: 2, pt: 3, pb: 1 }}>
      <TextField
        fullWidth
        label={label}
        size="small"
        value={query}
        onChange={(e) => {
          onQueryChange(e.target.value);
        }}
        slotProps={{
          input: {
            endAdornment: query && (
              <InputAdornment position="end">
                <IconButton aria-label="clear search" size="small" onClick={onClear} edge="end">
                  <ClearIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
}
