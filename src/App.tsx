import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ItemList } from './ItemList';
import { Item } from './Item';
import { LoginPage } from './Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Router basename="/mytaste2">
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="item/:id" element={<Item />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
