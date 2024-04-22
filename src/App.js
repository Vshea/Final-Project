import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import GalleryPage from './components/GalleryPage';
import CreatePage from './components/CreatePage';
import Footer from './components/Footer';
import './App.css'; // Import the global styles

const App = () => {
  return (
    <Router>
      <div className="page-container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/GalleryPage" element={<GalleryPage />} />
          <Route path="/CreatePage" element={<CreatePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>

    
  );
};

export default App;