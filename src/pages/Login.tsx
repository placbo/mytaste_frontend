//import googleLoginButton from '../assets/btn_google_signin_dark_normal_web.png';
import { Alert, Box, Button, CircularProgress, Container, TextField } from '@mui/material';
import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';
import { LOGIN_URL } from '../constants';

export const LoginPage = () => {
  const navigate = useNavigate();

  const { setIsUserLoggedIn } = useContext(AuthContext);

  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  const login = async () => {
    try {
      setIsLoading(true);
      setLoginError('');
      const result = await axios.post(LOGIN_URL, {
        password,
      });
      const fetchedToken = await result.data.token;
      if (fetchedToken) {
        setIsUserLoggedIn(fetchedToken);
        localStorage.setItem('token', fetchedToken);
        //todo: sjekk expiry
        navigate('/');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setLoginError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container
      sx={{
        width: '100%',
        height: '20vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Box>
        <TextField
          id="password"
          name="password"
          type="password"
          label="Passord"
          variant="standard"
          disabled={isLoading}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button variant="contained" disabled={isLoading} onClick={login} sx={{ ml: 2 }}>
          Do it! {isLoading && <CircularProgress size={'1rem'} />}
        </Button>
      </Box>
      {loginError && (
        <Alert sx={{ m: 2 }} severity="error">
          Kunne ikke logge inn ({loginError})
        </Alert>
      )}
    </Container>
  );
};
