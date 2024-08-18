import Care from './components/careSection/Care'
import Hero from './components/heroSection/Hero'
import How from './components/howSection/How'
import Navbar from './components/navbar/Navbar'
import Questions from './components/Questions'
import MpbilePage from './components/MobilePage'
import HEROSECTION from './components/HEROSECTION'
// import HealthAdd from './components/HealthAdd'
import Images from './components/Images'
import Track from './components/trackSection/Track'
import Spacer from './components/utils/Spacer'
import './index.css'
import { Box } from '@mui/material'
// import HealthAdvice from './components/HealthAdvice'
import HealthRecords from './components/HealthRecord'
import Sliding from './components/Sliding'
import ColourSlide from './components/ColourSlide'


function App() {


  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Hero />
        <Spacer height={189} />
        <How />
        <Spacer height={189} />
        <Track/>
        <Care/>
        <Spacer height={189} />


      </Box>
     
      <Images/>
      <HEROSECTION/>
      <HealthRecords/>
      <MpbilePage/>
      <Sliding/>

      {/* <HealthAdd/> */}
      <Questions/>
      <ColourSlide/>
      
    
      


    </>
  )
}


export default App
