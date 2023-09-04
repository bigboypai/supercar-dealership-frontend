import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardContainer from './cardContainer';
import CarDetail from './CarDetail';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/api/cars');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CardContainer cars={data} />} />
        <Route path="/cars/:carId" element={<CarDetail cars={data} />} />
      </Routes>
    </Router>
  );
}

export default App;