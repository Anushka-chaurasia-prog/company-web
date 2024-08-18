import React from 'react'
import heartLine from '../../../assets/heart-line.png'
import { Typography } from '@mui/material'

const Heading2 = () => {
    return (
        <>
            <Typography
                sx={{
                    paddingTop: '27px',
                    fontSize: '20px',
                    fontFamily: 'Arimo',
                    color: "#FA5946"
                }}>
                Built by Doctors
            </Typography>
            <img src={heartLine} width="266px" height="38px" alt="" style={{ paddingTop: "16px" }} />
            <Typography
                sx={{
                    paddingTop: '16px',
                    fontSize: '18px',
                    fontFamily: 'Arimo',
                    color: "#0C0C0C"
                }}>
                ✨ Government of India ABDM approved PHR and EHR App ✨
            </Typography>
        </>
    )
}

export default Heading2
