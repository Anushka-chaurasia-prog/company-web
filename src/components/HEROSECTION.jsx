// 
import React from 'react';
import { Box, Typography } from '@mui/material';
import ELL1 from '../assets/ELL1.svg';  // Import the orange ellipse background
import P1 from '../assets/P1.svg';
import P2 from '../assets/P2.svg';
import P3 from '../assets/P3.svg';

const ImageSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',  // White background for the entire section
        padding: '50px 0',
        textAlign: 'center',  // Center align the text
      }}
    >
      {/* Top Text Section */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          fontSize: '40px',
          marginBottom: '16px',
          background: 'linear-gradient(90deg, #F94E4E, #4E4EEF, #344DFF)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Have health questions? Ask Roojh!
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: '#666666',
          fontSize: '16px',
          marginBottom: '40px',
          maxWidth: '600px', // Adjust this value to control the width of the text block
          margin: '0 auto',  // Center the text block
          lineHeight: '1.5',  // Adjust line height if needed
        }}
      >
        Unsure about that weird rash? Ask Roojh! Our friendly AI is here to provide reliable information,
        guiding you on whether it’s a minor issue or if a professional’s advice is needed.
      </Typography>

      {/* Bottom Image Section */}
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Background Ellipse Image */}
        <Box
          component="img"
          src={ELL1}
          alt="Orange Ellipse Background"
          sx={{
            width: '100%',
            height: 'auto',
            maxWidth: '700px',  // Adjust to fit your design
          }}
        />

        {/* Phones on top of the Ellipse */}
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            gap: '16px',
            bottom: '-20px', // Adjust positioning to match design
          }}
        >
          {/* First Phone */}
          <Box 
            component="img" 
            src={P1} 
            alt="phone1" 
            sx={{ 
              width: '150px', 
              height: 'auto',
            }} 
          />
          {/* Second Phone */}
          <Box 
            component="img" 
            src={P2} 
            alt="phone2" 
            sx={{ 
              width: '180px', 
              height: 'auto',
            }} 
          />
          {/* Third Phone */}
          <Box 
            component="img" 
            src={P3} 
            alt="phone3" 
            sx={{ 
              width: '150px', 
              height: 'auto',
            }} 
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ImageSection;







