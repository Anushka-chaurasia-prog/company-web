import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import AI1 from '../assets/AI1.svg';
import AI2 from '../assets/AI2.svg';
import AI3 from '../assets/AI3.svg';

const PersonalizedHealthAdvice = () => {
  return (
    <Box
      sx={{
        padding: '50px 20px',
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
      }}
    >
      {/* Main Header */}
      <Typography
        variant="h4"
        sx={{
          fontFamily: 'Arimo',
          fontWeight: 'bold',
          color: '#fff',
          marginBottom: '20px',
          backgroundImage: 'linear-gradient(180deg, #F2703E, #E04D75)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Get personalized health advice, just for you
      </Typography>

      {/* Subheading */}
      <Typography
        variant="subtitle1"
        sx={{
          fontFamily: 'Arimo',
          color: '#fff',
          marginBottom: '40px',
        }}
      >
        Feeling a bit low on energy? Roojh suggests a quick, uplifting workout or recommends a nutritious snack to keep you fueled throughout the day.
      </Typography>

      {/* Grid of Cards */}
      <Grid container spacing={3} justifyContent="center">
        {/* First Card */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              padding: '20px',
              borderRadius: '16px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              height: '100%',
            }}
          >
            <CardContent>
              <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: '16px' }}>
                Your recent <strong>serum iron pressure readings</strong> are slightly higher than usual. Consider low-sodium meals to help manage it.
              </Typography>
              <Box
                component="img"
                src={AI1}
                alt="Blood pressure monitor"
                sx={{ width: '100%', borderRadius: '8px', marginTop: '16px' }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Second Card */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              padding: '20px',
              borderRadius: '16px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              height: '100%',
            }}
          >
            <CardContent>
              <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: '16px' }}>
                You might be consuming more sugar than recommended. Would you like to explore some <strong>low-sugar snack options?</strong>
              </Typography>
              <Box
                component="img"
                src={AI2}
                alt="Low-sugar snacks"
                sx={{ width: '100%', borderRadius: '8px', marginTop: '16px' }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Third Card */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              padding: '20px',
              borderRadius: '16px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              height: '100%',
            }}
          >
            <CardContent>
              <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: '16px' }}>
                Feeling stressed? Try meditation! Ready for a quick session together?
              </Typography>
              <Box
                component="img"
                src={AI3}
                alt="Meditation"
                sx={{ width: '100%', borderRadius: '8px', marginTop: '16px' }}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HealthAdd;