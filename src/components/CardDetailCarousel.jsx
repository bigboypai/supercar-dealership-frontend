import React, { useState } from 'react';
import {
  Container,
  Box,
  Button,
  Paper,
  Grid,
  useTheme,
  IconButton,
} from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';

const CardDetailCarousel = ({ images }) => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="95vw" // Set the width to viewport width
      height="100vh" // Set the height to viewport height
      overflow="hidden"
      position="relative"
    >
      <IconButton
        onClick={prevSlide}
        sx={{
          position: 'absolute',
          left: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          zIndex: theme.zIndex.appBar + 1,
        }}
      >
        <NavigateBefore />
      </IconButton>
      <IconButton
        onClick={nextSlide}
        sx={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          zIndex: theme.zIndex.appBar + 1,
        }}
      >
        <NavigateNext />
      </IconButton>
      <Paper
        elevation={3}
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Paper>
    </Box>
  );
};

export default CardDetailCarousel;
