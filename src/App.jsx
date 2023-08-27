import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import CarCard from './components/CarCard';

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await fetch('http://localhost:3000/api/cars'); // Change the URL to your API endpoint
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    }

    fetchCars();
  }, []);

  return (
    <Grid container spacing={3}>
      {cars.map((car, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <CarCard car={car} />
        </Grid>
      ))}
    </Grid>
  );
}

export default App;