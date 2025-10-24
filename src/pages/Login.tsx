import { Box, Button, Container } from '@mui/material';
import { API_BASE_URL, GOOGLE_AUTH_URL } from '../constants';

export const LoginPage = () => {
  const handleGoogleLogin = () => {
    globalThis.location.href = API_BASE_URL + GOOGLE_AUTH_URL;
  };

  return (
    <Container
      sx={{
        width: '100%',
        minHeight: '40vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          alignItems: 'center',
          width: '100%',
          maxWidth: 400,
        }}
      >
        <Button variant="contained" fullWidth onClick={handleGoogleLogin} sx={{ py: 1.5 }}>
          Logg inn med Google
        </Button>
      </Box>
    </Container>
  );
};
