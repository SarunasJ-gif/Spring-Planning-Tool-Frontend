import { createTheme } from '@mui/material/styles';

import 'typeface-poppins';
import 'typeface-open-sans';
import 'typeface-roboto';

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
