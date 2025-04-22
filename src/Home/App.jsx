import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './NavBar';
import Footer from './Footer';
import Home from './Home'; 
import MenShoes from '../Men/MenShoes'; 
import WomenShoes from '../Women/WomenShoes'; 
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<MenShoes />} />
        <Route path="/women" element={<WomenShoes />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
