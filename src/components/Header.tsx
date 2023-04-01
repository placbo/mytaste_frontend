import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const Header = () => {
  // const [currentUser, setCurrentUser] = useState<any>(null);

  // const StyledLink = styled(Link)`
  //   text-decoration: none;
  //   color: red;
  // `;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to={'/'}
            color="common.white"
            sx={{ flexGrow: 1, textDecoration: 'none' }}>
            MyTaste
          </Typography>
          <Button disabled>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
