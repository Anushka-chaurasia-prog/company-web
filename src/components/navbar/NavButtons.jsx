import React from 'react'
import { Typography } from '@mui/material';

const NavButtons = ({content}) => {
  return (
      <Typography
        sx={{
          fontFamily: 'Arimo',
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '24px',
          textAlign: 'center',
          color: '#0C0C0C', 
        }}
      >
        {content}
      </Typography>
  )
}

export default NavButtons
