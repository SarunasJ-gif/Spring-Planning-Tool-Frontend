import { createTheme } from '@mui/material/styles';
import 'typeface-poppins';

import 'typeface-poppins';
import 'typeface-open-sans';
import 'typeface-roboto';

const theme = createTheme({
  typography: {
    fontFamily: ['Poppins'].join(','),
    h1: {
      fontFamily: 'Poppins',
    },
    h5: {
      fontFamily: 'Poppins',
    },
    button: {
      fontFamily: 'Poppins',
      textTransform: 'none',
    },
  },
  palette: {
    background: {
      default: '#FAFBFD',
    },
    primary: {
      main: '#404CFA',
    },
    secondary: {
      main: '#E5E5E5',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    h4: {
      fontWeight: '100',
      fontSize: '20px',
      border: 'none',
    },
  },
});

export default theme;
