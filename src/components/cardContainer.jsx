import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import CarCard from './CarCard';
import { Link } from 'react-router-dom'


function CardContainer({ cars }) {
  return (
    <Grid container spacing={3}>
        {cars.map((car, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <div style={{ padding: '16px' }}>
                <Link to={`/cars/${car._id}`}>
                  <CarCard car={car} />
                </Link>
              </div>
            </Grid>
        ))}
    </Grid>
  );
}

export default CardContainer;