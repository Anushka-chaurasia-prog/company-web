
// import RLG from '../assets/RLG.svg';
// import PLAY from '../assets/PLAY.svg';
// import APPLE from '../assets/APPLE.svg';

// import React from 'react';
// import { Box, Typography, Link } from '@mui/material';
// import { styled } from '@mui/system';

// import RLG from '../assets/RLG.svg';
// import PLAY from '../assets/PLAY.svg';
// import APPLE from '../assets/APPLE.svg';
// import ORG1 from '../assets/ORG1.svg';  // Assuming this is the image with the orange shape

//  // The orange shape image

// const FooterContainer = styled(Box)(({ theme }) => ({
//   backgroundColor: '#000',
//   padding: '40px 20px',
//   display: 'flex',
//   justifyContent: 'space-between',
//   position: 'relative',
//   color: '#fff',
//   flexDirection: 'row',
// }));

// const FooterContent = styled(Box)(({ theme }) => ({
//   zIndex: 2,
//   display: 'flex',
//   justifyContent: 'space-between',
//   width: '100%',
// }));

// const FooterSection = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '8px',
//   color: '#fff',
//   zIndex: 2,
// }));

// const OrangeShape = styled('ORG1')(({ theme }) => ({
//   position: 'absolute',
//   top: '0',
//   right: '0',
//   width: '400px',  // Adjust the size based on the provided image dimensions
//   height: 'auto',
//   zIndex: 1,
// }));

// const Footer = () => {
//   return (
//     <FooterContainer>
//       <FooterContent>
//         <FooterSection>
//           <img src={RLG} alt="Roojh Logo" width="80" />
//           <Typography variant="body2">Your AI health advisor</Typography>
//           <Box display="flex" gap="10px" mt={1}>
//             <Link href="#">
//               <img src={PLAY} alt="Google Play Badge" width="120" />
//             </Link>
//             <Link href="#">
//               <img src={APPLE} alt="App Store Badge" width="120" />
//             </Link>
//           </Box>
//           <Typography variant="caption" color="textSecondary" mt={2}>
//             Built by Doctors
//           </Typography>
//           <Typography variant="caption" color="textSecondary">
//             Government of India ABDM approved PHR and EHR App
//           </Typography>
//           <Typography variant="caption" color="textSecondary" mt={2}>
//             © 2024 Roojh. All rights reserved.
//           </Typography>
//         </FooterSection>
//         <FooterSection>
//           <Typography variant="h6" sx={{ color: "#fff" }}>Explore</Typography>
//           <Link href="#" color="inherit">For Doctors</Link>
//           <Link href="#" color="inherit">For Partners</Link>
//           <Link href="#" color="inherit">Create ABDM</Link>
//           <Link href="#" color="inherit">About Us</Link>
//           <Link href="#" color="inherit">Contact Us</Link>
//         </FooterSection>
//         <FooterSection>
//           <Typography variant="h6" sx={{ color: "#fff" }}>Legal</Typography>
//           <Link href="#" color="inherit">Privacy Policy</Link>
//           <Link href="#" color="inherit">Terms and Conditions</Link>
//           <Link href="#" color="inherit">Refund Policy</Link>
//         </FooterSection>
//       </FooterContent>
//       <OrangeShape src={orangeShape} alt="Orange Decorative Shape" />
//     </FooterContainer>
//   );
// };

// export default Footer;
