import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ItemList } from './pages/ItemList';
import { ItemDetails } from './pages/Item';
import { LoginPage } from './pages/Login';
import { NotFound } from './pages/NotFound';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createContext, useEffect, useState } from 'react';
import { Header } from './components/Header';
import { ManageItemPage } from './pages/ManageItemPage';

export const AuthContext = createContext<any>({} as any); //jukser!: (https://stackoverflow.com/questions/61333188/react-typescript-avoid-context-default-value)

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const getTokenExpiry = (token: string | null): number => {
  if (!token) return 0;
  return JSON.parse(atob(token.split('.')[1])).exp;
};

const isTokenExpired = (expiry: number): boolean => {
  return Math.floor(new Date().getTime() / 1000) >= expiry;
};

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<string | undefined>(undefined);
  const authContextValue = { isUserLoggedIn, setIsUserLoggedIn };

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

          <Router basename="/mytaste/">
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
        </ThemeProvider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
