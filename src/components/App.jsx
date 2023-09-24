import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarDetail from './CarDetail';
import Home from './Home';

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://wild-teal-stingray.cyclic.cloud/api/cars');
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
          <Route path="/" element={<Home cars={cars} />} />
          <Route path="/cars/:carId" element={<CarDetail cars={cars} />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;