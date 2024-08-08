import React from 'react';
import { Typography } from '@mui/material';

const MainLogo = () => {
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          paddingTop: "70px",
          background: 'linear-gradient(118deg, #FF6B59 1%, #2273E7 83%, #FFA79C 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          fontWeight: 'bold',
          fontFamily: 'Arimo',
          textAlign: 'center',
          fontSize: '160px',
          letterSpacing: '-4%',
          lineHeight: '118%'
        }}
      >
        Roojh
      </Typography>
      <Typography variant='h6' 
      sx={{
          paddingTop: '20px',
          color: "#0C0C0C"
        }}>
        Your personal AI health advisor
      </Typography>
      </>
  );
};

export default MainLogo;
