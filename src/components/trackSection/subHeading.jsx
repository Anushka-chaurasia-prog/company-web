import React from 'react'
import { Typography } from '@mui/material'
const SubHeading = () => {
    return (
        <Typography
            variant="h1"
            sx={{
                color: "#0C0C0C70",
                paddingTop: "40px",
                width: "1000px",
                fontFamily: 'Arimo',
                textAlign: 'center',
                fontSize: "24px",
                letterSpacing: '-4%',
                lineHeight: '118%'
            }}
        >
            <strong><i style={{color: 'black'}}>Feeling under the weather?</i></strong> Wondering if your chronic condition is acting up? Roojh helps you keep tabs on your health data, from blood pressure to your serum iron level and beyond.
        </Typography>
    )
}

export default SubHeading
