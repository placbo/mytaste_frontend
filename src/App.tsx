import { ThemeProvider } from '@emotion/react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AuthSuccess from './components/AuthSuccess';
import { Header } from './components/Header';
import { AuthProvider } from './context/AuthContext';
import { AddNewItemPage } from './pages/AddNewItemPage ';
import { EditItemPage } from './pages/EditItemPage';
import { ItemDetails } from './pages/Item';
import { ItemList } from './pages/ItemList';
import { NotFound } from './pages/NotFound';
import { FC } from 'react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

  export const App:FC = () => {
    return (
    <AuthProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Router basename="/mytaste">
            <Header />
            <Routes>
              <Route path="/" element={<ItemList />} />
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
};

export default App;
