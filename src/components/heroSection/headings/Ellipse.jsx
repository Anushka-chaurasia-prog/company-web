import React from 'react';
import { Box } from '@mui/material';

const EllipseComponent = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '98vw',
        height: '98vw',
        zIndex: '-1',
        borderRadius: '50%',
        backgroundColor: 'transparent',
        border: 'solid 1px',
        borderColor: '#E1E1E1',
        top: '-147vh',
        left: '0'
  
      }}
    />
  );
};

export default EllipseComponent;
