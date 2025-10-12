import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/mytaste.png';
import AddIcon from '@mui/icons-material/Add';
import { FC } from 'react';

export const Header: FC = () => {
  const { user, logout } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: 'black',
            p: 2,
            gap: 2,
            borderBottom: '1px solid grey',
          }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img alt="logo" src={logo} height="50px"></img>
            <Typography
              variant="h6"
              component={Link}
              to={'/'}
              color="common.white"
              sx={{ textDecoration: 'none', ml: 1 }}>
              MyTaste
            </Typography>
          </Box>

          {user?.isAdmin && (
            <Button variant="contained" component={Link} to="/newitem">
              <AddIcon sx={{ mr: 1 }} />
              Ny
            </Button>
          )}

          {!user ? (
            <Button component={Link} to="/login">
              Logg in
            </Button>
          ) : (
            <Button onClick={logout}>Logg out</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
