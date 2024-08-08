import React from 'react'
import { Typography, Box } from '@mui/material'
import lock from '../../../assets/lock.svg'
import E2E from '../../../assets/E2E.svg'
import HIPAA from '../../../assets/HIPAA.svg'
import ISO from '../../../assets/ISO.svg'
import MFA from '../../../assets/MFA.svg'
import RSA from '../../../assets/RSA.svg'

const Securtiy = () => {
    return (
        <>
            <Box sx={{
                display: "flex",
                marginTop: "70px",
                flexDirection: "row",
                alignItems: 'center',
                gap: "8px",
                backgroundColor: "#FA594608",
                padding: "8px 16px 8px 16px",
                borderRadius: "12px"
            }}
            >   <img src={lock} alt="" height="32px" />
                <Typography sx={{
                    color: "#FA5946",
                    fontSize: "20px",
                    fontFamily: "Arimo"
                }}>
                    Protected by the strongest data privacy
                </Typography>
            </Box>

            <Box sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: 'center',
                gap: "24px",

                padding: "8px 16px 8px 16px",
                borderRadius: "12px"
            }}
            >
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: 'center',
                    gap: "8px",

                    padding: "8px 16px 8px 16px",
                    borderRadius: "12px"
                }}
                >
                    <img src={HIPAA} height="24px" alt="" />
                    <Typography sx={{
                        color: "#0C0C0C90",
                        fontSize: "16px",
                        fontWeight: "400",
                        fontFamily: "Arimo"
                    }}>
                        HIPAA Compliant
                    </Typography>

                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: 'center',
                    gap: "8px",

                    padding: "8px 16px 8px 16px",
                    borderRadius: "12px"
                }}
                >
                    <img src={ISO} height="24px" alt="" />
                    <Typography sx={{
                        color: "#0C0C0C90",
                        fontSize: "16px",
                        fontWeight: "400",
                        fontFamily: "Arimo"
                    }}>
                        ISO/IEC 27001 Certification
                    </Typography>

                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: 'center',
                    gap: "8px",

                    padding: "8px 16px 8px 16px",
                    borderRadius: "12px"
                }}
                >
                    <img src={E2E} height="24px" alt="" />
                    <Typography sx={{
                        color: "#0C0C0C90",
                        fontSize: "16px",
                        fontWeight: "400",
                        fontFamily: "Arimo"
                    }}>
                        End-To-End Encryption
                    </Typography>

                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: 'center',
                    gap: "8px",

                    padding: "8px 16px 8px 16px",
                    borderRadius: "12px"
                }}
                >
                    <img src={RSA} height="24px" alt="" />
                    <Typography sx={{
                        color: "#0C0C0C90",
                        fontSize: "16px",
                        fontWeight: "400",
                        fontFamily: "Arimo"
                    }}>
                        Regular security audits
                    </Typography>

                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: 'center',
                    gap: "8px",

                    padding: "8px 16px 8px 16px",
                    borderRadius: "12px"
                }}
                >
                    <img src={MFA} height="24px" alt="" />
                    <Typography sx={{
                        color: "#0C0C0C90",
                        fontSize: "16px",
                        fontWeight: "400",
                        fontFamily: "Arimo"
                    }}>
                        Multi-factor authentication
                    </Typography>

                </Box>
            </Box>
        </>
    )
}

export default Securtiy
