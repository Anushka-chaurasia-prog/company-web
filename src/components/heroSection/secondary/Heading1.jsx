import React from 'react'
import { Typography } from '@mui/material'

const Heading1 = () => {
    return (
        <>
            <Typography
                sx={{
                    paddingTop: '20px',
                    fontSize: '40px',
                    fontFamily: 'Arimo',
                    color: "#0C0C0C"
                }}>
                We are ready to answer
            </Typography>
            <Typography
                sx={{
                    background: 'linear-gradient(to right, #FF6B59 1%, #2273E7 83%, #FFA79C 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    fontWeight: 'bold',
                    fontFamily: 'Arimo',
                    textAlign: 'center',
                    fontSize: '40px',
                    letterSpacing: '-1px',
                    lineHeight: '118%'
                }}
            >
                your health related questions
            </Typography>
        </>
    )
}

export default Heading1
