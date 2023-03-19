import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ItemList } from './pages/ItemList';
import { Item } from './pages/Item';
import { LoginPage } from './pages/Login';
import { ToastContainer } from 'react-toastify';
import { NotFound } from './pages/NotFound';
import { Profile } from './pages/Profile';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Router basename="/mytaste2">
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/item/:id" element={<Item />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
