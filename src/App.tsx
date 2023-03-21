import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import NavigationBar from './components/NavigationBar/NavigationBar';

import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import './App.css';
import { ROUTES } from './routes/routes';
import theme from './theme';
import SideBar from './components/Sidebar/Sidebar';
import TaskKey from './components/TaskKey/TaskKey';



function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavigationBar />
        <TaskKey key={'SFD-192'} color={'white'} backgroundColor={'blue'} />
        <Routes>
          <Route path={ROUTES.HOME} element={''} />
          <Route path={ROUTES.MY_CALENDER} element={''} />
          <Route path={ROUTES.MANAGER_TEAM} element={''} />
          <Route path={ROUTES.NEW_SPRINT} element={''} />
        </Routes>
        <SideBar />
      </ThemeProvider>
    </>
  );
}

export default App;
