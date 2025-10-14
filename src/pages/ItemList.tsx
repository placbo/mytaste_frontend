import { Alert, Box, Button, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useTags } from '../hooks/useTags.js';
import { useItems } from '../hooks/useItems.js';
import { SearchBar } from '../components/SearchBar.js';
import { TagList } from '../components/TagList.js';
import { ItemCard } from '../components/ItemCard.js';

export function ItemList() {
  // Use the custom hooks
  const { tags, loading: tagsLoading, error: tagsError } = useTags();
  const {
    items,
    isWaiting,
    apiError,
    query,
    isSearchMode,
    isTyping,
    hasMore,
    setQueryValue,
    clearQuery,
    triggerNextPageFetch,
  } = useItems();

  return (
    <>
      <SearchBar
        query={query}
        onQueryChange={setQueryValue}
        onClear={clearQuery}
        label="Søk i alle elementer (tittel)"
      />

      <TagList
        tags={tags}
        loading={tagsLoading}
        error={tagsError}
        onTagClick={setQueryValue}
        maxTags={10}
        title="10 mest brukte tags (klikk for å søke):"
      />

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

      {items.length === 0 && query.trim() && isSearchMode && !isWaiting && !isTyping && (
        <Typography variant="body1" sx={{ px: 2, py: 1 }}>
          Ingen treff for: <strong>{query}</strong>
        </Typography>
      )}

      {items.map((item) => (
        <ItemCard key={item.itemId} item={item} />
      ))}

      <Box sx={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
        {hasMore && (
          <Button onClick={triggerNextPageFetch} disabled={isWaiting}>
            Vis mer...
          </Button>
        )}
      </Box>
    </>
  );
}
