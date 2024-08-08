import React from 'react';
import { Box, Typography } from '@mui/material';
import img1 from '../../assets/c_1.svg'
import img2 from '../../assets/c_2.svg'
import img3 from '../../assets/c_3.svg'


const ImageSection = () => {
  return (
    <Box
      sx={{
        marginTop: "96px",
        display: 'flex',
        flexDirection: 'column',
        width: '70vw',
        height: 'auto',
        gap: "48px"
      }}
    >
      {/* First Row */}
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          gap: "36px"
        }}
      >
        <Box
          sx={{
            width: '55%',
            padding: '48px',
            height :  "329px",
            borderRadius: "32px",
            boxSizing: 'border-box',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'left',
            backgroundColor: "#FA5946",
          }}
        >
          <Typography sx={{
            width : "320px",
            color : "white",
            fontSize: "32px",
            fontFamily : "Arimo"
          }}>How is Dad’s sugar level in the past 3 months?</Typography>
          <Box
            component="img"
            src={img1}
            alt="image"
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
        <Box
          sx={{
            width: '45%',
            height :  "329px",
            borderRadius: "32px",
            padding: '36px 0 0',
            boxSizing: 'border-box',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center',
            backgroundColor: "#FA5946",

          }}
        >
          <Typography sx={{
            width : "230px",
            color : "white",
            fontSize: "32px",
            fontFamily : "Arimo",
            paddingLeft: "25%"
          }}>Did Mom see the doctor?</Typography>
          <Box
            component="img"
            src={img2}
            alt="image"
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
      </Box>

      {/* Second Row */}
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          gap: "36px"
        }}
      >
        <Box
          sx={{
            width: '65%',
            height :  "329px",
            borderRadius: "32px",
            padding: '0 0 0 36px',
            boxSizing: 'border-box',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'left',
            backgroundColor: "#FA5946",

          }}
        >
          <Typography sx={{
            paddingTop : "85px",
            width : "320px",
            color : "white",
            fontSize: "32px",
            fontFamily : "Arimo"
          }}
            >How was the latest routine gynecology check up of my wife?</Typography>
          <Box
            component="img"
            src={img3}
            alt="image"
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width : "100%",
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'cover',
              
            }}
          />
        </Box>
        <Box
          sx={{
            width: '35%',
            padding: '16px',
            height :  "329px",
            borderRadius: "32px",
            boxSizing: 'border-box',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'left',
            backgroundColor: "#FA5946",

          }}
        >
          <Typography sx={{
            paddingTop: "50px",
            width : "320px",
            color : "white",
            fontSize: "32px",
            fontFamily : "Arimo",
            fontStyle: "italic"
          }}>Roojh<br/>Your Family Health Assistant</Typography>
          <Typography
            variant="body2"
            sx={{
              position: 'absolute',
              bottom: '-60px',
              fontSize: "136px",
              color: "#ffffff12",

            }}
          >
            Roojh
          </Typography>
          
        </Box>
      </Box>
    </Box>
  );
};

export default ImageSection;
