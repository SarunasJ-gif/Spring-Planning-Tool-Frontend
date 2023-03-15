import React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import './App.css';
import { ROUTES } from './routes/routes';

function App() {
  return (
    <div className="App">
      <h1>Sprint</h1>
      <Routes>
        <Route path={ROUTES.HOME} element={''} />
        <Route path={ROUTES.MY_CALENDER} element={''} />
        <Route path={ROUTES.MANAGER_TEAM} element={''} />
        <Route path={ROUTES.NEW_SPRINT} element={''} />
      </Routes>
    </div>
  );
}

export default App;
