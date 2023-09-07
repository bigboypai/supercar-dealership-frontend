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
        cursor: 'pointer'
      }}
    >
      <CardMedia
        component="img"
        height="250"
        image={car.pictures[0]}
        alt={`${car.car_info.make} ${car.car_info.model}`}
      />
      {hovered && (
        <CardContent
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
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
          <Typography variant="body2" color="white">
          </Typography>
        </CardContent>
      )}
    </Card>
  );
}

export default CarCard;
