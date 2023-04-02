import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../App';
import logo from '../assets/mytaste.png';
import AddIcon from '@mui/icons-material/Add';

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
            gap: 2,
            borderBottom: '1px solid grey',
          }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} height="50px"></img>
            <Typography
              variant="h6"
              component={Link}
              to={'/'}
              color="common.white"
              sx={{ textDecoration: 'none', ml: 1 }}>
              MyTaste
            </Typography>
          </Box>

          {!isUserLoggedIn ? (
            <Button component={Link} to="/login">
              Logg in
            </Button>
          ) : (
            <>
              <Button variant="contained" component={Link} to="/newitem">
                <AddIcon sx={{ mr: 1 }} />
                Legg til
              </Button>
              <Button onClick={logout}>Logg out</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
