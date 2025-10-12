import { Container, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { FC } from 'react';

export const NotFound: FC = () => (
  <Container>
    <Typography variant="h2">Page Not Found, sjø</Typography>
    <RouterLink to="/">
      <Link>Back to Home</Link>
    </RouterLink>
  </Container>
);
