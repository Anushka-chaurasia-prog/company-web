// import React from 'react';
// import React from 'react';
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import Slider from 'react-slick';
import WELL from '../assets/WELL.svg'; // SVG image import

// Card Data
const cards = [
  { category: 'Symptoms & Conditions', title: 'What could be causing my cough?' },
  { category: 'Prevention & Wellness', title: 'What can I do to avoid getting the flu?' },
  { category: 'Lab Tests & Diagnostics', title: 'What do these serum test results mean?' },
  // Add more cards as needed
];

// Slider Data
const sliderItems1 = [
  { title: 'Card 1 Title', description: 'Card 1 Description' },
  { title: 'Card 2 Title', description: 'Card 2 Description' },
  { title: 'Card 3 Title', description: 'Card 3 Description' },
  // Add more items as needed
];

const sliderItems2 = [
  { title: 'WELL Health Advisor', description: 'The most private digital health advisor', image: WELL },
  { title: 'Card 5 Title', description: 'Card 5 Description' },
  { title: 'Card 6 Title', description: 'Card 6 Description' },
  // Add more items as needed
];

// Slider Settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true, // Optional: centers the active slide
  centerPadding: '20px', // Adjust padding between slides
  rows: 1,
};

const HealthPage = () => {
  return (
    <Box sx={{ padding: '50px 20px', textAlign: 'center', background: 'linear-gradient(to right, #6B46EF, #F94E4E)' }}>
      {/* Header Section */}
      <Typography variant="h3" sx={{ color: 'white', marginBottom: '10px' }}>
        Roojh does all this, and more.
      </Typography>
      <Typography variant="body1" sx={{ color: 'white', marginBottom: '40px' }}>
        The most private digital health advisor
      </Typography>

      {/* WELL Image */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
        <img src={WELL} alt="WELL" style={{ maxWidth: '100%', height: 'auto' }} />
      </Box>

      {/* Cards as Slider Section */}
      <Box sx={{ marginTop: '40px', padding: '20px', borderRadius: '10px' }}>
        <Slider {...sliderSettings}>
          {cards.map((card, index) => (
            <Box key={index} sx={{ padding: '0 10px' }}>
              <Paper sx={{ padding: '20px', textAlign: 'center', backgroundColor: 'white', borderRadius: '10px' }}>
                <Typography variant="subtitle2" sx={{ marginBottom: '10px' }}>
                  {card.category}
                </Typography>
                <Typography variant="body1">{card.title}</Typography>
              </Paper>
            </Box>
          ))}
        </Slider>
      </Box>

      {/* Second Slider Section */}
      <Box sx={{ marginTop: '20px', padding: '20px', borderRadius: '10px' }}>
        <Slider {...sliderSettings}>
          {sliderItems2.map((item, index) => (
            <Box key={index} sx={{ padding: '0 10px' }}>
              <Paper sx={{ padding: '20px', textAlign: 'center', backgroundColor: 'white', borderRadius: '10px' }}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" sx={{ marginBottom: '10px' }}>
                  {item.description}
                </Typography>
                {item.image && <img src={item.image} alt={item.title} style={{ maxWidth: '100%', height: 'auto' }} />}
              </Paper>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default HealthPage;
