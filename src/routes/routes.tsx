import React, { Component, ErrorInfo } from 'react';
import type { Router as RemixRouter } from '@remix-run/router';
import { Outlet, Route, RouteObject } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import NavigationBar from '../components/NavigationBar/NavigationBar';
import Sidebar from '../components/Sidebar/Sidebar';
import { Endpoint } from './Endpoint';
import MainPage from '../components/MainPage/MainPage';
import NotFound from '../components/ErrorPage/NotFound';
import Login from '../components/Login/Login';

type MyErrorBoundaryProps = {
  children: React.ReactNode;
};

class MyErrorBoundary extends Component<MyErrorBoundaryProps> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <NotFound />;
    }

    return this.props.children;
  }
}

const routeOptions: RouteObject[] = [
  {
    element: (
      <>
        <NavigationBar />
        <Sidebar />
        <Outlet />
        <MyErrorBoundary>
          <Outlet />
        </MyErrorBoundary>
      </>
    ),
    children: [
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
  {
    path: Endpoint.LOGIN,
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export const routes: RemixRouter = createBrowserRouter(routeOptions);
