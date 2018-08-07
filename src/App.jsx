import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Introduction from './components/gettingstarted/Introduction';
import Download from './components/gettingstarted/Download';
import RequiredValidation from './components/api/RequiredValidation';
import EmailValidation from './components/api/EmailValidation';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00BC8A',
      contrastText: '#FFF',
      link: '#EA0760'
    }
  },
  overrides: {
    MuiTypography: {
      title: {
        fontSize: 36,
        color: '#777777',
      },
      subheading: {
        fontSize: 28,
        color: '#777777',
      },
      body1: {
        fontSize: 20,
        color: '#777777',
      }
    }
}
});

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/introduction" component={Introduction} />
            <Route path="/download" component={Download} />
            <Route path="/required-validation" component={RequiredValidation} />
            <Route path="/email-validation" component={EmailValidation} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}