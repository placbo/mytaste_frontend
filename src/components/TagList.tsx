import { Alert, Box, Typography, Chip, Stack, CircularProgress } from '@mui/material';
import { TagWithUsageCount } from '../types.js';

interface TagListProps {
  tags: TagWithUsageCount[];
  loading: boolean;
  error?: Error;
  onTagClick: any;
  maxTags?: number;
  title?: string;
}

export function TagList({
  tags,
  loading,
  error,
  onTagClick,
  maxTags = 10,
  title = '10 mest brukte tags (klikk for å søke):',
}: TagListProps) {
  return (
    <Box sx={{ px: 2, pb: 2 }}>
      {loading && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <CircularProgress size={16} />
          <Typography variant="body2" color="text.secondary">
            Laster tags...
          </Typography>
        </Box>
      )}

      {error && (
        <Alert severity="warning" sx={{ mb: 2 }}>
          Kunne ikke laste tags
        </Alert>
      )}

      {!loading && !error && tags.length > 0 && (
        <>
          <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1, mt: 1 }}>
            {title}
          </Typography>
          <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
            {tags
              .sort((a, b) => b.usageCount - a.usageCount)
              .slice(0, maxTags)
              .map((tag) => (
                <Chip
                  key={tag.tagId}
                  label={`${tag.tag} (${tag.usageCount})`}
                  variant="outlined"
                  size="small"
                  clickable
                  onClick={() => onTagClick(tag.tag)}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'action.hover',
                    },
                  }}
                />
              ))}
          </Stack>
        </>
      )}
    </Box>
  );
}
