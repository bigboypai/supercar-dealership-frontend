import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import CarCard from './carCard';

function CardContainer({cars}) {

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

export default CardContainer;