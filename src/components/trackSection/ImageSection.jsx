import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import img1 from '../../assets/t_img_1.svg';
import img2 from '../../assets/t_img_2.svg';
import img3 from '../../assets/t_img_3.svg';


const ImageSection = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', width: "950px", paddingTop: "64px" }}>
            <Box
                sx={{
                    backgroundColor: '#F9F9F9',
                    color: 'white',
                    height: "329px",
                    padding: 2,
                    borderRadius: 8,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <Typography sx={{
                    color: "black",
                    fontSize: "32px",
                    width: "430px",
                    padding: "45px",
                }}>Are you noticing any unusual symptoms related to serum iron levels?</Typography>
                <Box
                    component="img"
                    src={img1}
                    alt="example"
                    sx={{
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        right: 0,
                        top: 0,
                    }}
                />
            </Box>
            <Box sx={{ display: 'flex', gap: '16px' }}>
                <Box
                    sx={{
                        backgroundColor: '#F9F9F9',
                        width: "50%",
                        height: "329px",
                        color: 'white',
                        padding: 2,
                        borderRadius: 8,
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography sx={{
                        color: "black",
                        fontSize: "28px",
                        width: "350px",
                        padding: "45px",

                    }}>Any changes in your heart rate that we should be aware of ?</Typography>
                    <Box
                        component="img"
                        src={img2}
                        alt="example"
                        sx={{
                            width: '200px',
                            height: '200px',
                            objectFit: 'cover',
                            position: 'absolute',
                            right: 0,
                            bottom: 0,
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        backgroundColor: '#F9F9F9',
                        width: "50%",

                        color: 'white',
                        padding: 2,
                        borderRadius: 8,
                        position: 'relative',
                        overflow: 'hidden',
                        height: "329px",
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                    }}
                >
                    <Typography sx={{
                        color: "black",
                        fontSize: "28px",
                        padding: "45px",
                        width: "250px",
                        textAlign: "right"
                    }}>What are my latest sugar level readings?</Typography>
                    <Box
                        component="img"
                        src={img3}
                        alt="example"
                        sx={{
                            width: '200px',
                            height: '200px',
                            objectFit: 'cover',
                            position: 'absolute',
                            left: 0,
                            bottom: 0,
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default ImageSection;
