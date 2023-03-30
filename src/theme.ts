import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
    ].join(','),
    h1: {
      fontFamily: 'Poppins',
    },
    h2: {
      fontFamily: 'Poppins',
    },
    h3: {
      fontFamily: 'Poppins',
    },
    h4: {
      fontFamily: 'Poppins',
    },
    h5: {
      fontFamily: 'Poppins',
    },
    h6: {
      fontFamily: 'Poppins',
    },
    subtitle1: {
      fontFamily: 'Open Sans',
    },
    subtitle2: {
      fontFamily: 'Open Sans',
    },
    body1: {
      fontFamily: 'Open Sans',
    },
    body2: {
      fontFamily: 'Open Sans',
    },
    button: {
      fontFamily: 'Poppins',
      textTransform: 'none',
    },
    caption: {
      fontFamily: 'Open Sans',
    },
    overline: {
      fontFamily: 'Poppins',
    },
  },
  palette: {
    primary: {
      main: '#404CFA',
    },
    secondary: {
      main: '#E5E5E5',
    },
  },
});

export default theme;
