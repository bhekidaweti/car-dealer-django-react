import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CarList from './components/CarList';
import CarDetail from './components/CarDetail';

const App = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch cars from the backend API
    fetch('http://127.0.0.1:8000/api/dealership/')
      .then(response => response.json())
      .then(data => setCars(data));
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<CarList />} />
        <Route path="/cars/:id" element={<CarDetail cars={cars} />} />
      </Routes>
    </Router>
  );
};

export default App;




