import React from 'react'
import { Typography } from '@mui/material'
const Headings = ({ heading, mar }) => {
    return (
        <Typography
            variant="h1"
            sx={{
                marginTop: mar,
                whiteSpace: 'pre-line',
                background: 'linear-gradient(118deg, #FF6B59 1%, #2273E7 83%, #FFA79C 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontWeight: 'bold',
                fontFamily: 'Arimo',
                textAlign: 'center',
                fontSize: "64px",
                letterSpacing: '-4%',
                lineHeight: '118%'
            }}
        >
            {heading}
        </Typography>
    )
}

export default Headings
