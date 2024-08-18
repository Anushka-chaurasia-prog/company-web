import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import MP1 from '../assets/MP1.svg'; // Replace with the actual path to your phone image

const HeroSection = () => {
    return (
        <Box sx={{ 
            backgroundColor: '#f7f7f7',  // Very light grey background for the entire section
            padding: '40px 0',  // Padding on the top and bottom of the section
        }}>
            <Box sx={{ 
                maxWidth: '900px', // Set the maximum width of the content container
                margin: '0 auto',  // Center the container horizontally
                padding: '40px 20px',  // Padding inside the white box
                backgroundColor: '#ffffff',  // White background for the text and image container
                borderRadius: '8px',  // Slightly rounded corners
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',  // Subtle shadow for depth
                display: 'flex',  // Flexbox for layout
                alignItems: 'center',  // Vertically align items
                justifyContent: 'space-between'  // Space between the text and the image
            }}>
                <Box sx={{ 
                    maxWidth: '500px' // Limit the width of the text container
                }}>
                    <Typography variant="h2" sx={{ 
                        fontWeight: 'bold',
                        fontSize: '36px',
                        lineHeight: 1.2,
                        background: 'linear-gradient(90deg, #F94E4E, #4E4EEF, #344DFF)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        display: 'inline-block'
                    }}>
                        Participate in India's digital healthcare revolution
                    </Typography>
                    <Typography sx={{ 
                        marginTop: '20px',
                        fontSize: '18px',
                        color: '#555'
                    }}>
                        Create ABHA and store all your medical records with Roojh (Government of India ABDM approved PHR App)
                    </Typography>
                    <Button variant="contained" sx={{ 
                        marginTop: '30px', 
                        backgroundColor: '#FF5B5B',
                        padding: '10px 20px',
                        fontSize: '16px'
                    }}>
                        Create ABHA
                    </Button>
                    <Typography sx={{ 
                        marginTop: '10px',
                        fontSize: '14px',
                        color: '#888'
                    }}>
                        * Data shared is securely encrypted <br />
                        * Official partner of Government of India
                    </Typography>
                </Box>
                <Box sx={{ 
                    maxWidth: '600px', // Limit the width of the image container
                    marginLeft: '5px' // Space between the text and image
                }}>
                    <img src={MP1} alt="Roojh App" style={{ width: '120%' }} />  {/* Increased the image size */}
                </Box>
            </Box>
        </Box>
    );
};

export default HeroSection;






// import React from 'react'

// export default function MobilePage() {
//   return (
//     <div>MobilePagevjdkhvuivhdkivuevhivudiyjhbhksgbcyhegyigygi8</div>
//   )
// }
