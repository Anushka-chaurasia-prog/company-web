// 
import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        flexDirection: 'column',
        height: '100vh', // Full viewport height
        textAlign: 'center', // Center text
        padding: '24px',
        boxSizing: 'border-box',
        backgroundColor: '#f5f5f5', // Optional background color for the section
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: 'Arimo',
          fontWeight: 'bold',
          marginBottom: '36px',
        }}
      >
        FAQs
      </Typography>

      <Accordion sx={{ width: '60%' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ fontFamily: 'Arimo', fontSize: '20px', fontWeight: 'bold' }}>
            What if I’m not tech-savvy? Is Roojh easy to use?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: 'Arimo', fontSize: '16px' }}>
            Yes, Roojh is designed to be user-friendly, even for those who are not tech-savvy.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ width: '60%' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontFamily: 'Arimo', fontSize: '20px', fontWeight: 'bold' }}>
            Can Roojh replace my doctor?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: 'Arimo', fontSize: '16px' }}>
            While Roojh is a valuable companion for your health journey, it’s important to remember that we are not a substitute for a doctor. We can assist with personalized advice, health insights, and even connect you with healthcare professionals, but for diagnosis and treatment, consulting a qualified doctor is always recommended.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ width: '60%' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography sx={{ fontFamily: 'Arimo', fontSize: '20px', fontWeight: 'bold' }}>
            How does Roojh protect my privacy?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: 'Arimo', fontSize: '16px' }}>
            Roojh takes your privacy seriously. We use secure methods to store your data and ensure it is only accessible by you.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ width: '60%' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography sx={{ fontFamily: 'Arimo', fontSize: '20px', fontWeight: 'bold' }}>
            Got a hotline for funds-related SOS moments?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: 'Arimo', fontSize: '16px' }}>
            Yes, Roojh provides assistance in case of funds-related emergencies. Contact us at [Hotline Number].
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Box sx={{ marginTop: '36px' }}>
        <button style={{
          padding: '12px 24px',
          borderRadius: '8px',
          backgroundColor: '#FA5946',
          color: 'white',
          fontFamily: 'Arimo',
          fontSize: '16px',
          border: 'none',
          cursor: 'pointer'
        }}>
          More FAQs
        </button>
      </Box>
    </Box>
  );
};

export default FAQSection;
