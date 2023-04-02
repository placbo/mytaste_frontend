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
import { createContext, useState } from 'react';

export const AuthContext = createContext<any>({} as any); //jukser (https://stackoverflow.com/questions/61333188/react-typescript-avoid-context-default-value)

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(undefined);
  const authContextValue = { isUserLoggedIn, setIsUserLoggedIn };
  return (
    <>
      <AuthContext.Provider value={authContextValue}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Router basename="/mytaste">
            <Routes>
              <Route path="/" element={<ItemList />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/item/:id" element={<ItemDetails />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
