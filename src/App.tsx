import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Item from "./Item";

function App() {
  return (
    <div className="App">
      hepp
      <Router basename="/mytaste2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Item />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
