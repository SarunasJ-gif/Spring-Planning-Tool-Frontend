import { createTheme } from '@mui/material/styles';

require('typeface-poppins');
require('typeface-open-sans');
require('typeface-roboto');

const theme = createTheme({
  palette: {
    primary: {
      main: '#404CFA',
    },
    secondary: {
      main: '#E5E5E5',
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
});

export default theme;
