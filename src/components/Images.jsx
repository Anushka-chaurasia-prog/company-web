// import React from 'react';
// import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
// import AI1 from '../assets/AI1.svg';
// import AI2 from '../assets/AI2.svg';
// import AI3 from '../assets/AI3.svg';

// const HealthServiceSection = () => {
//   return (
//     <Box
//       sx={{
//         padding: '50px 20px',
//         backgroundColor: '#f9f9f9',
//         textAlign: 'center',
//       }}
//     >
//       <Box
//         sx={{
//           backgroundColor: 'white',
//           padding: '40px',
//           borderRadius: '16px',
//           boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//           maxWidth: '1200px',
//           margin: '0 auto',
//         }}
//       >
//         <Typography
//           variant="h4"
//           sx={{
//             fontFamily: 'Arimo',
//             fontWeight: 'bold',
//             color: 'purple',
//             marginBottom: '16px',
//             backgroundImage: 'linear-gradient(90deg, red, blue)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//           }}
//         >
//           Connect with health service effortlessly
//         </Typography>
//         <Typography
//           variant="subtitle1"
//           sx={{
//             fontFamily: 'Arimo',
//             marginBottom: '40px',
//           }}
//         >
//           Need to find a nearby pharmacy or schedule a doctor's appointment? Roojh connects you seamlessly with health services, ensuring that help is just a click away.
//         </Typography>

//         <Grid container spacing={3} justifyContent="center">
//           {/* First Card */}
//           <Grid item xs={12} md={4}>
//             <Card
//               sx={{
//                 padding: '20px',
//                 borderRadius: '16px',
//                 boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//                 height: '100%',
//               }}
//             >
//               <CardContent>
//                 <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: '16px' }}>
//                   Roojh, how can I find a reliable nutritionist in my area?
//                 </Typography>
//                 <Box
//                   component="img"
//                   src={AI3}
//                   alt="Map showing nutritionists"
//                   sx={{ width: '100%', borderRadius: '8px', marginBottom: '16px' }}
//                 />
//               </CardContent>
//             </Card>
//           </Grid>

//           {/* Second Card */}
//           <Grid item xs={12} md={4}>
//             <Card
//               sx={{
//                 padding: '20px',
//                 borderRadius: '16px',
//                 boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//                 height: '100%',
//               }}
//             >
//               <CardContent>
//                 <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: '16px' }}>
//                   Roojh, can you assist in scheduling my annual check-up?
//                 </Typography>
//                 <Box
//                   component="img"
//                   src={AI2}
//                   alt="List of doctors"
//                   sx={{ width: '100%', borderRadius: '8px', marginBottom: '16px' }}
//                 />
//               </CardContent>
//             </Card>
//           </Grid>

//           {/* Third Card */}
//           <Grid item xs={12} md={4}>
//             <Card
//               sx={{
//                 padding: '20px',
//                 borderRadius: '16px',
//                 boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//                 height: '100%',
//               }}
//             >
//               <CardContent>
//                 <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: '16px' }}>
//                   Roojh, where's the closest pharmacy to my location?
//                 </Typography>
//                 <Box
//                   component="img"
//                   src={AI1}
//                   alt="List of pharmacies"
//                   sx={{ width: '100%', borderRadius: '8px', marginBottom: '16px' }}
//                 />
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default HealthServiceSection;
import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import AI1 from '../assets/AI1.svg';
import AI2 from '../assets/AI2.svg';
import AI3 from '../assets/AI3.svg';

const HealthServiceSection = () => {
  return (
    <Box
      sx={{
        padding: '50px 0',
        backgroundColor: 'white',
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '16px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          maxWidth: '900px',
          margin: '0 auto',
          // Add padding for left and right side spacing
          px: { xs: '20px', sm: '40px', md: '60px' },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Arimo',
            fontWeight: 'bold',
            color: 'purple',
            marginBottom: '16px',
            backgroundImage: 'linear-gradient(90deg, red, blue)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Connect with health service effortlessly
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: 'Arimo',
            marginBottom: '40px',
          }}
        >
          Need to find a nearby pharmacy or schedule a doctor's appointment? Roojh connects you seamlessly with health services, ensuring that help is just a click away.
        </Typography>

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
                  Roojh, how can I find a reliable nutritionist in my area?
                </Typography>
                <Box
                  component="img"
                  src={AI3}
                  alt="Map showing nutritionists"
                  sx={{ width: '100%', borderRadius: '8px', marginBottom: '16px' }}
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
                  Roojh, can you assist in scheduling my annual check-up?
                </Typography>
                <Box
                  component="img"
                  src={AI1}
                  alt="List of doctors"
                  sx={{ width: '100%', borderRadius: '8px', marginBottom: '16px' }}
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
                  Roojh, where's the closest pharmacy to my location?
                </Typography>
                <Box
                  component="img"
                  src={AI2}
                  alt="List of pharmacies"
                  sx={{ width: '100%', borderRadius: '8px', marginBottom: '16px' }}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HealthServiceSection;
