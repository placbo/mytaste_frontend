import { ThemeProvider } from '@emotion/react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';
import { createContext, useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { ItemDetails } from './pages/Item';
import { ItemList } from './pages/ItemList';
import { LoginPage } from './pages/Login';
import { ManageItemPage } from './pages/ManageItemPage';
import { NotFound } from './pages/NotFound';
import { DEFAULT_USER } from './constants';

export const AuthContext = createContext<any>({} as any); //jukser!: (https://stackoverflow.com/questions/61333188/react-typescript-avoid-context-default-value)

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const getTokenExpiry = (token: string | null): number => {
  if (!token) return 0;
  try {
    return JSON.parse(atob(token.split('.')[1])).exp;
    //todo! sjekk om det funker . finn eksempel. https://stackoverflow.com/questions/72866826/decoding-a-jwt-token-on-frontend-with-atob-gives-me-failed-to-execute-atob-on
  } catch (error) {
    return 0;
  }
};

const isTokenExpired = (expiry: number): boolean => {
  return Math.floor(new Date().getTime() / 1000) >= expiry;
};

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<string | undefined>(undefined);
  const [user, setUser] = useState<string | undefined>(DEFAULT_USER);
  const authContextValue = { isUserLoggedIn, setIsUserLoggedIn, user, setUser };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const tokenExpiry = getTokenExpiry(token);
    if (token && !isTokenExpired(tokenExpiry)) {
      setIsUserLoggedIn(token);
    }
  }, []);

  return (
    <>
      <AuthContext.Provider value={authContextValue}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Container maxWidth="lg">
            <Router basename="/mytaste">
              <Header />
              <Routes>
                <Route path="/" element={<ItemList />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/item/:id" element={<ItemDetails />} />
                <Route path="/item/:id/edit" element={<ManageItemPage />} />
                <Route path="/newitem" element={<ManageItemPage />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </Router>
          </Container>
        </ThemeProvider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
