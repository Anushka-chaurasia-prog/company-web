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
             Add health profiles of your loved ones and support them with medication reminders, health tips, and valuable resources. Because distance shouldn't limit the warmth of your care.
        </Typography>
    )
}

export default SubHeading
