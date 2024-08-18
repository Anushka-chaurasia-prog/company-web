import React from 'react'
import bgEl from '../../assets/Ellipse.svg'
import rec1 from '../../assets/rec4.svg'
import i1 from '../../assets/i4.svg'
import { Box, Typography } from '@mui/material'

const Comp4 = () => {
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
                }}>Step 4</Typography>
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
                            fontSize : "34px",
                            fontWeight: "bold",
                            width: "450px"
                        }}>You can ask questions, and receive personalized health guidance</Typography>
                        <Typography sx={{
                            fontFamily: "Arimo",
                            fontSize : "20px",
                            width: "400px"
                        }}>Get personalized answers and see beautiful visual representation of your health vitals </Typography>
                    </Box>
                </Box>

                <Box sx={{
                    position: "absolute",
                    right: "10px",
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

export default Comp4
