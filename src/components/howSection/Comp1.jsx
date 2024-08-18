import React from 'react'
import bgEl from '../../assets/Ellipse.svg'
import rec1 from '../../assets/rec1.svg'
import i1 from '../../assets/i1.svg'
import { Box, Typography } from '@mui/material'

const Comp1 = () => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            position: "relative",
        }}>
            <Box sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Typography sx={{
                    position: "absolute",
                    color: "white",
                    fontSize: "1.5rem",
                }}>Step 1</Typography>
                <img src={bgEl} alt="" />
            </Box>

            <Box sx={{
                paddingLeft: "64px",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Box sx={{
                    position: "relative",
                }}>
                    <img src={rec1} alt="Background Image" style={{ display: 'block' }} />

                    <Box sx={{
                        position: "absolute",
                        padding: "56px",
                        display: "flex",
                        height: "100%",
                        flexDirection: "column",
                        justifyContent: "center",
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "#000", 
                        textAlign: "left",
                    }}>
                        <Typography sx={{
                            fontFamily: "Arimo",
                            fontSize : "36px",
                            fontWeight: "bold",
                            width: "250px"
                        }}>Get your current health data</Typography>
                        <Typography sx={{
                            fontFamily: "Arimo",
                            fontSize : "20px",
                            width: "400px"
                        }}>Medical files, X-Ray, your sugar level reports, MRI, medical prescriptions and more</Typography>
                    </Box>
                </Box>

                <Box sx={{
                    position: "absolute",
                    right: "20px",
                    top: "0",
                    bottom: "0",
                    display: "flex",
                    alignItems: "center",
                }}>
                    <img src={i1} alt="Right Image" />
                </Box>
            </Box>




        </Box>
    )
}

export default Comp1
