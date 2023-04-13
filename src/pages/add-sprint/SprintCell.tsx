import React from 'react';
import { Box, Typography } from '@mui/material';

interface SprintCellProps {
  name: string;
}

export const SprintCell = ({ name }: SprintCellProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        width: '296px',
        height: '62px',
        padding: '12px',
        backgroundColor: '#D8DAFF',
        border: '1px solid #E1E5EB',
        borderRadius: '4px 4px 0px 0px',
        boxSizing: 'border-box',
        marginLeft: '60px',
        position: 'relative',
      }}
    >
      <Typography
        variant="caption"
        sx={{
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '12px',
          lineHeight: '16px',
          letterSpacing: '0.4px',
          color: 'rgba(0, 0, 0, 0.6)',
          alignSelf: 'flex-start',
        }}
      >
        Sprint Name
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '24px',
          letterSpacing: '0.15px',
          color: 'rgba(0, 0, 0, 0.87)',
          marginTop: 'auto',
          alignSelf: 'flex-start',
        }}
      >
        {name}
      </Typography>
      <Box
        sx={{
          width: '100%',
          height: '2px',
          position: 'absolute',
          bottom: '0',
          left: '0',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }}
      />
    </Box>
  );
};
