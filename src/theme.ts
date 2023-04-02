import { createTheme } from '@mui/material/styles';
import 'typeface-poppins';

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
    primary: {
      main: '#404CFA',
    },
    secondary: {
      main: '#E5E5E5',
    },
  },
});

export default theme;
