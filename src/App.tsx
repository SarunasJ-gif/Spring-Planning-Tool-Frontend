import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import 'typeface-poppins';
import './App.css';
import theme from './theme';
import { RouterProvider } from 'react-router';
import { routes } from './routes/routes';
import {useAppDispatch} from "./redux/store";

function App() {
  const dispatch = useAppDispatch();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={routes} />
      </ThemeProvider>
    </>
  );
}

export default App;
