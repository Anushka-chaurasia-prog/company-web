import React from 'react'
import Headings from '../utils/Headings'
import { Box } from '@mui/material'
import Spacer from '../utils/Spacer'
import Comp1 from './Comp1'
import Comp2 from './Comp2'
import Comp3 from './Comp3'
import Comp4 from './Comp4'
import line from '../../assets/sideLine.svg'

const How = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: 'flex',
        width: '80vw',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        boxShadow: '30px 0px 20px -15px #FA594630, -30px 0px 20px -15px #FA594630',
      }}

    >
    
      <Headings heading={"How Roojh\nmagic works?"} mar={"80px"}/>
      <Spacer height={105}/>
      <Comp1/>
      <Spacer height={105}/>
      <Comp2/>
      <Spacer height={105}/>
      <Comp3/>
      <Spacer height={105}/>
      <Comp4/>
      <Spacer height={154}/>

      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: '180px',
          top : "460px", 
          width: 'auto',
          height: 'auto', 
          zIndex: "-1"
        }}
      >
        <img src={line} alt="Description" style={{ maxWidth: '100%' }} />
      </Box>
    </Box>
  )
}

export default How
