import React from 'react';
import { Box } from '@mui/material';
import micImg from '../../../assets/mic.svg';


const Mic = () => {
    return (
        <div style={{paddingTop: '32px'}}>
            <Box sx={{
                width: '172px',
                height: '172px',
                borderRadius: '50%',
                backgroundColor: "#FA594610",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'

            }}>
                <Box sx={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    backgroundColor: "#FA594620",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'

                }}>
                    <Box sx={{
                        width: '125px',
                        height: '125px',
                        borderRadius: '50%',
                        backgroundColor: "#FA594630",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'

                    }}>
                        <Box sx={{
                            width: '102px',
                            height: '102px',
                            borderRadius: '50%',
                            backgroundColor: "#FA594650",
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'

                        }}>
                            <Box sx={{
                                width: '82px',
                                height: '82px',
                                borderRadius: '50%',
                                backgroundColor: "#FA5946",
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'

                            }}>
                                <img src={micImg} width="18px" height="28px" alt="" />

                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </div>
    );
}

export default Mic