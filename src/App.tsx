import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import NavigationBar from './components/NavigationBar/NavigationBar';

import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import './App.css';
import { ROUTES } from './routes/routes';
import theme from './theme';
import SideBar from './components/Sidebar/Sidebar';
import { useAppDispatch } from './store/store';
import { getUser } from './actions/user/userActions';
import TaskKey from './components/TaskKey/TaskKey';

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
        <NavigationBar />
        <TaskKey taskKey={'SFD-192'} keyColor={'white'} keyBackgroundColor={'blue'} />
        <Routes>
          <Route path={ROUTES.HOME} element={''} />
          <Route path={ROUTES.MY_CALENDER} element={''} />
          <Route path={ROUTES.MANAGER_TEAM} element={''} />
          <Route path={ROUTES.NEW_SPRINT} element={''} />
        </Routes>
        {/*<SideBar />*/}
      </ThemeProvider>
    </>
  );
}

export default App;
