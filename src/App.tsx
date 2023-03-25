import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import './App.css';
import theme from './theme';
import { RouterProvider } from 'react-router';
import { useAppDispatch } from './store/store';
import { getUser } from './actions/user/userActions';
import TaskKey from './components/TaskKey/TaskKey';
import { routes } from './routes/routes';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
