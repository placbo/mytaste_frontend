import { ThemeProvider } from '@emotion/react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthSuccess from './components/AuthSuccess';
import { Header } from './components/Header';
import { AddNewItemPage } from './pages/AddNewItemPage ';
import { EditItemPage } from './pages/EditItemPage';
import { ItemDetails } from './pages/Item';
import { ItemList } from './pages/ItemList';
import { NotFound } from './pages/NotFound';
import { LoginPage } from './pages/Login';
import { AuthProvider } from './context/AuthContext';

export const DEFAULT_USER = 'perbjester@gmail.com';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

// const getTokenExpiry = (token: string | null): number => {
//   if (!token) return 0;
//   try {
//     return JSON.parse(atob(token.split('.')[1])).exp;
//     //todo! sjekk om det funker . finn eksempel. https://stackoverflow.com/questions/72866826/decoding-a-jwt-token-on-frontend-with-atob-gives-me-failed-to-execute-atob-on
//   } catch (error) {
//     return 0;
//   }
// };
//
// const isTokenExpired = (expiry: number): boolean => {
//   return Math.floor(new Date().getTime() / 1000) >= expiry;
// };

function App() {
  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   const tokenExpiry = getTokenExpiry(token);
  //   if (token && !isTokenExpired(tokenExpiry)) {
  //     setIsUserLoggedIn(token);
  //   }
  // }, []);

  return (
    <AuthProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Router basename="/">
            <Header />
            <Routes>
              <Route path="/" element={<ItemList />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/auth/success" element={<AuthSuccess />} />
              <Route path="/item/:id" element={<ItemDetails />} />
              <Route path="/item/:id/edit" element={<EditItemPage />} />
              <Route path="/newitem" element={<AddNewItemPage />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </Router>
        </Container>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
