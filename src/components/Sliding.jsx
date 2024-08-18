
import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import Slider from 'react-slick';
import S1 from '../assets/S1.svg'; // Replace with actual image paths
import S2 from '../assets/S2.svg';
import S3 from '../assets/S3.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialCard = ({ image, name, occupation, description }) => (
  <Box
    sx={{
      backgroundColor: 'white',
      borderRadius: '6px',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      padding: '50px 0',
      textAlign: 'center',
      width: '270px', // Width of each testimonial box
      marginRight: '10px',
      marginLeft:'5px', // Gap between boxes
      boxSizing: 'border-box',
    }}
  >
    <Avatar
      src={image}
      alt={name}
      sx={{ width: 90, height: 80, margin: '0 auto 16px' }}
    />
    <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
      {name}
    </Typography>
    <Typography variant="body2" sx={{ color: '#666666', marginBottom: '12px' }}>
      {occupation}
    </Typography>
    <Typography variant="body1" sx={{ color: '#333', fontSize: '13px', lineHeight: '1.7' }}>
      {description}
    </Typography>
  </Box>
);

const TestimonialsSection = () => {
  const settings = {
    dots: true,          // Enable navigation dots
    infinite: true,      // Infinite looping
    speed: 500,          // Transition speed
    slidesToShow: 3,   // Show 2 and a half testimonial cards per slide
    slidesToScroll: 1,   // Scroll one card at a time
    arrows: false,       // Hide arrows, only show dots for navigation
    rtl: false,           // Set Right-to-Left (RTL) to make the partial box appear on the left side
  };

  return (
    <Box
      sx={{
        backgroundColor: 'white', // White background for the entire section
        padding: '50px 0', // Top and bottom padding
      }}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          padding: '40px 20px',
          maxWidth: '950px',
          width: '100%',
          margin: '0 auto',  // Center the container horizontally
        }}
      >
        {/* Header Section */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            fontSize: '36px',
            marginBottom: '16px',
            background: 'linear-gradient(90deg, #F94E4E, #4E4EEF, #344DFF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
          }}
        >
          Real people, real health journeys with Roojh
        </Typography>

        {/* Testimonials Slider */}
        <Slider {...settings}>
          <TestimonialCard
            image={S1}
            name="Garima Gupta (42)"
            occupation="Teacher, Delhi"
            description="After years of battling diabetes, I felt lost and scared. Roojh changed everything. Its personalized meal plans and constant support helped me finally see my glucose levels under control. Now, I feel like I'm in control of my health again."
          />
          <TestimonialCard
            image={S2}
            name="Dr Swapnila Soni (32)"
            occupation="Cardiologist, Chennai"
            description="Roojh has become an invaluable part of my practice. By tracking detailed health profiles for my patients, it allows me to give more personalized care. We can work together, doctor and patient, to make informed decisions about treatment and prevention."
          />
          <TestimonialCard
            image={S3}
            name="Dr M"
            occupation="Consultant"
            description="Working with Roojh has significantly improved how we engage with our patients. It has made tracking their health journeys more efficient and reliable."
          />
        </Slider>
      </Box>
    </Box>
  );
};

export default TestimonialsSection;
