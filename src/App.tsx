import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ItemList } from './pages/ItemList';
import { Item } from './pages/Item';
import { LoginPage } from './pages/Login';
import { ToastContainer } from 'react-toastify';
import { NotFound } from './pages/NotFound';
import { Profile } from './pages/Profile';
import 'react-toastify/dist/ReactToastify.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <ToastContainer autoClose={3000} hideProgressBar />
        <Router basename="/mytaste">
          <Routes>
            <Route path="/" element={<ItemList />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/item/:id" element={<Item />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
