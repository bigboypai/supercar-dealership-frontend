import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardContainer from './cardContainer';
import CarDetail from './CarDetail';

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/cars');
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<CardContainer cars={cars} />} />
          <Route path="/cars/:carId" element={<CarDetail cars={cars} />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;