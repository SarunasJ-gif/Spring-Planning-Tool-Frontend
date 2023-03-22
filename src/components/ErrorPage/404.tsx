//import Link from 'next/link';
import React, { FC } from 'react';

import { Typography, Chip, Stack, Button, createTheme } from '@mui/material';

//import HomeIcon from '@mui/icons-material/Home';
//import MenuBookIcon from '@mui/icons-material/MenuBook';

const Custom404: FC = () => {
  const theme = createTheme({
    typography: {
      h2: {
        fontSize: '36px',
        fontFamily: 'Open-Sans',
      },
    },
    palette: {
      primary: {
        light: '#979797',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  return (
    <>
      <div
        style={{
          position: 'absolute',
        }}
      >
        <Typography variant="h2">
          <span
            style={{
              color: theme.palette.primary.light,
              width: '1504px',
              height: '140px',
              left: '0px',
              top: '146px',
            }}
          >
            Oops!
          </span>
        </Typography>
        <Button href="/" size="large" variant="contained">
          BACK TO MAIN PAGE
        </Button>
      </div>
      <style></style>
    </>
  );
};
export default Custom404;
