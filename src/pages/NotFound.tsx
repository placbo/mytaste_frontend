import { Container, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const NotFound = () => (
  <Container>
    <Typography variant="h2">Page Not Found, sjø</Typography>
    <RouterLink to="/">
      <Link>Back to Home</Link>
    </RouterLink>
  </Container>
);
