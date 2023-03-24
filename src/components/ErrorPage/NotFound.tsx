import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import image from './404error.png';
import { Endpoint } from '../../routes/Endpoint';

const NotFound = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '146px',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: 'Open Sans',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '36px',
          lineHeight: '44px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          color: '#979797',
          //marginTop: '140px',
        }}
      >
        Oops!
      </Typography>

      <Box
        sx={{
          width: '432px',
          height: '234px',
          marginTop: '69px',
        }}
      >
        <img src={image} alt="image for error" />
      </Box>

      <Typography
        variant="h3"
        sx={{
          fontFamily: 'Open Sans',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '24px',
          lineHeight: '112px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          letterSpacing: '-1.5px',
          color: '#979797',
          marginTop: '15px',
        }}
      >
        Error: 404 Page Not Found
      </Typography>

      <Link to={Endpoint.MAIN_PAGE} style={{ textDecoration: 'none' }}>
        <Button
          sx={{
            varient: 'contained',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0,
            width: '195px',
            height: '42px',
            background: '#404CFA',
            boxShadow:
              '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
            borderRadius: '4px',
            color: '#FFFFFF',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              background: '#404CFA',
              color: '#FFFFFF',
            },
          }}
        >
          BACK TO MAIN PAGE
        </Button>
      </Link>
    </Box>
  );
};

export default NotFound;
