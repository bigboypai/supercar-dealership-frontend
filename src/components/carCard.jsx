import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

function CarCard({ car }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Card
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        position: 'relative',
      }}
    >
      <CardMedia
        component="img"
        height="250"
        image={car.car_info.image[0]} // Change this to the appropriate image URL
        alt={`${car.car_info.make} ${car.car_info.model}`}
      />
      {hovered && (
        <CardContent
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography gutterBottom variant="h6">
            {car.car_info.make} {car.car_info.model}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Units Built: {car.car_info.units_built}
          </Typography>
        </CardContent>
      )}
    </Card>
  );
}

export default CarCard;
