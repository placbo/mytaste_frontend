import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/mytaste.png';
import AddIcon from '@mui/icons-material/Add';
import { FC } from 'react';

export const Header: FC = () => {
  const { user } = useAuth();
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
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img alt="logo" src={logo} height="50px"></img>
            <Typography
              variant="h6"
              component={Link}
              to={'/'}
              color="common.white"
              sx={{ textDecoration: 'none', ml: 1 }}
            >
              MyTaste
            </Typography>
          </Box>

          {user?.isAdmin && (
            <Button variant="contained" component={Link} to="/newitem">
              <AddIcon sx={{ mr: 1 }} />
              Ny
            </Button>
          )}

          {user ? (
            <Box
              component={Link}
              to="/profile"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                textDecoration: 'none',
                color: 'inherit',
                cursor: 'pointer',
              }}
            >
              <Typography variant="body1" color="common.white">
                {user.displayName}
              </Typography>
              <IconButton sx={{ p: 0 }}>
                <Avatar src={user.image} alt={user.displayName} />
              </IconButton>
            </Box>
          ) : (
            <Button component={Link} to="/login">
              Logg in
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
