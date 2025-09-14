import { Alert, Box, Button, CircularProgress, Container, TextField } from '@mui/material';
import axios from 'axios';
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL, LOGIN_URL } from '../constants';
import { useAuth, User } from '../context/AuthContext';
import { jwtDecode } from 'jwt-decode';

export const LoginPage = () => {
  const navigate = useNavigate();

  const { setUser } = useAuth();

  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    passwordRef.current?.focus();
  }, []);

  const login = async () => {
    try {
      setIsLoading(true);
      setLoginError('');
      const result = await axios.post(API_BASE_URL+ LOGIN_URL, {
        password,
      });
      const fetchedToken = await result.data.token;
      if (fetchedToken) {
        const decodedUser: User = jwtDecode(fetchedToken);
        setUser(decodedUser);
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
          inputRef={passwordRef}
          onChange={(event) => setPassword(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              login();
            }
          }}
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
