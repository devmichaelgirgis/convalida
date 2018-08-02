import React, { Component } from 'react';
import { Router } from '@reach/router';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Introduction from './components/gettingstarted/Introduction';
import Download from './components/gettingstarted/Download';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00BC8A',
      contrastText: '#FFF',
      link: '#EA0760'
    }
  }
});

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router basepath={process.env.PUBLIC_URL}>
          <Home path="/" />
          <Introduction path="introduction" />
          <Download path="download" />
          <NotFound default />
        </Router>
      </MuiThemeProvider>
    );
  }
}