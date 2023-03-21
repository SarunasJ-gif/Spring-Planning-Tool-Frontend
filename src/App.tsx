import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import NavigationBar from './components/NavigationBar/NavigationBar';

import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import './App.css';
import { ROUTES } from './routes/routes';
import theme from './theme';
import KeyFromDesign from './components/KeyFromDesign/KeyFromDesign';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavigationBar />
        <KeyFromDesign title={''} />
        <Routes>
          <Route path={ROUTES.HOME} element={''} />
          <Route path={ROUTES.MY_CALENDER} element={''} />
          <Route path={ROUTES.MANAGER_TEAM} element={''} />
          <Route path={ROUTES.NEW_SPRINT} element={''} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
