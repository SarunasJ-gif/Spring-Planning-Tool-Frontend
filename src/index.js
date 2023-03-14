import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
