import React from 'react';
import Heading1 from './secondary/Heading1';
import Heading2 from './secondary/Heading2';
import DownloadBtn from './secondary/DownloadBtn';
import { Box } from '@mui/material';
import Securtiy from './secondary/Securtiy';

const Secondary = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
            }}
        >
            <Heading1 />
            <Heading2 />
            <DownloadBtn />
            <Securtiy/>
        </Box>
    );
};

export default Secondary;
