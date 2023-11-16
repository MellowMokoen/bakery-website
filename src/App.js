import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import MenuPage from "./MenuPage";

function App() {
  return (
    <div className='App'>
      <HomePage />
      <Router>
       <Routes>
        <Route path = "/" exact element = {HomePage} />
        <Route path = "/about" element = {AboutPage} />
        <Route path = "/menu" element = {MenuPage} />
       </Routes>
      </Router>
    </div>
  );
}

export default App;
