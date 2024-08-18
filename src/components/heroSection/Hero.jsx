import React from 'react'
import Heading from './Headings'
import { Box } from '@mui/material'
import Secondary from './Secondary'

const Hero = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <Heading/>
      <Secondary/>
    </Box>
  )
}

export default Hero
