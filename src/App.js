import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";
import './App.css';
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import MenuPage from "./MenuPage";

function App() {
  return (
  <Router>
    <div className='App'>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
      </nav>
       <Routes>
        <Route path = "/" exact element={<HomePage />} />
        <Route path = "/about" element={<AboutPage />} />
        <Route path = "/menu" element={<MenuPage />} />
       </Routes>
    </div>
  </Router>
  );
}

export default App;
