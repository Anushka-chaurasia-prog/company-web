import Hero from './components/heroSection/Hero'
import How from './components/howSection/How'
import Navbar from './components/navbar/Navbar'
import Track from './components/trackSection/Track'
import Spacer from './components/utils/Spacer'
import './index.css'
import { Box } from '@mui/material'
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
        <Spacer height={189} />

      </Box>


    </>
  )
}


export default App
