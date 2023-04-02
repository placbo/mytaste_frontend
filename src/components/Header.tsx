import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../App';
import logo from '../assets/mytaste.png';

export const Header = () => {
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(AuthContext);

  function logout() {
    setIsUserLoggedIn(undefined);
    localStorage.removeItem('token');
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: 'black',
            p: 2,
            borderBottom: '1px solid grey',
          }}>
          <Typography variant="h6" component={Link} to={'/'} color="common.white" sx={{ textDecoration: 'none' }}>
            MyTaste
          </Typography>
          <img src={logo} height="50px"></img>
          {!isUserLoggedIn ? (
            <Button component={Link} to="/login">
              Log in
            </Button>
          ) : (
            <Button onClick={logout}>Log out</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
