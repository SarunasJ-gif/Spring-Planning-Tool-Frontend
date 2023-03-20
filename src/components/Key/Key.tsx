import * as React from 'react';
import Box from '@mui/material/Box';



export default function Key() {
    return (
        <Box
            sx={{
                width: 90,
                height: 35,
                borderRadius: 2,
                backgroundColor: 'primary.dark',
                '&:hover': {
                    backgroundColor: 'primary.main',

                    opacity: [0.9, 0.8, 0.7],
                },
            }}
        />
    );
}

