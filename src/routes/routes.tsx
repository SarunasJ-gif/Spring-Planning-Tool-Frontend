import React from 'react';
import type { Router as RemixRouter } from '@remix-run/router';
import { Outlet, RouteObject } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import NavigationBar from '../components/NavigationBar/NavigationBar';
import MiniDrawer from '../components/Sidebar/Sidebar';
import { Endpoint } from './Endpoint';
import MainPage from '../components/MainPage/MainPage';
import NotFound from '../components/ErrorPage/NotFound';

const routeOptions: RouteObject[] = [
  {
    element: (
      <>
        <NavigationBar />
        <MiniDrawer />
        <Outlet />
      </>
    ),
    children: [
      {
        path: Endpoint.ERROR_PAGE,
        element: <NotFound />,
      },
      {
        path: Endpoint.MAIN_PAGE,
        element: <MainPage />,
      },
      {
        path: Endpoint.ADD_SPRINT,
        element: '',
      },
    ],
  },
];

export const routes: RemixRouter = createBrowserRouter(routeOptions);
