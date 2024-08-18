import React from 'react'
import bgEl from '../../assets/Ellipse.svg'
import rec1 from '../../assets/rec2.svg'
import i1 from '../../assets/i2.svg'
import { Box, Typography } from '@mui/material'

const Comp2 = () => {
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
                }}>Step 2</Typography>
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
                        }}>Take pictures and upload on Roojh App</Typography>
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

export default Comp2
