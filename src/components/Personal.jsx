import React from 'react';
import { Box, Typography } from '@mui/material';
import img1 from '../../assets/c_1.svg'
import img2 from '../../assets/c_2.svg'
import img3 from '../../assets/c_3.svg'

const HealthAdviceSection = () => {
  return (
    <Box
      sx={{
        marginTop: "96px",
        display: 'flex',
        flexDirection: 'column',
        width: '70vw',
        height: 'auto',
        gap: "48px",
        backgroundColor: "#F57154", // Adjust the color to match the background in the image
        padding: "24px",
        borderRadius: "32px"
      }}
    >
      <Typography sx={{ fontSize: '36px', color: 'white', textAlign: 'center', marginBottom: '24px' }}>
        Get personalized health advice, just for you
      </Typography>

      {/* First Advice Box */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '24px',
          backgroundColor: 'white',
          borderRadius: '16px',
        }}
      >
        <Box
          sx={{
            flex: 1,
            textAlign: 'left',
          }}
        >
          <Typography sx={{ fontSize: '18px', color: '#333' }}>
            Your recent <strong>serum iron pressure readings</strong> are slightly higher than usual. Consider low-sodium meals to help manage it.
          </Typography>
        </Box>
        <Box component="img" src={img1} alt="Serum Iron Pressure" sx={{ width: '64px', height: '64px', marginLeft: '24px' }} />
      </Box>

      {/* Second Advice Box */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '24px',
          backgroundColor: 'white',
          borderRadius: '16px',
        }}
      >
        <Box
          sx={{
            flex: 1,
            textAlign: 'left',
          }}
        >
          <Typography sx={{ fontSize: '18px', color: '#333' }}>
            You might be consuming more sugar than recommended. Would you like to explore some <strong>low-sugar snack options</strong>?
          </Typography>
        </Box>
        <Box component="img" src={img2} alt="Low Sugar Snacks" sx={{ width: '64px', height: '64px', marginLeft: '24px' }} />
      </Box>

      {/* Third Advice Box */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '24px',
          backgroundColor: 'white',
          borderRadius: '16px',
        }}
      >
        <Box
          sx={{
            flex: 1,
            textAlign: 'left',
          }}
        >
          <Typography sx={{ fontSize: '18px', color: '#333' }}>
            Feeling stressed? Try meditation! Ready for a quick session together?
          </Typography>
        </Box>
        <Box component="img" src={img3} alt="Meditation" sx={{ width: '64px', height: '64px', marginLeft: '24px' }} />
      </Box>
    </Box>
  );
};

export default HealthAdviceSection;
