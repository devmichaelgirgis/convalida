import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Introduction from './components/gettingstarted/Introduction';
import Download from './components/gettingstarted/Download';
import RequiredValidation from './components/api/RequiredValidation';
import EmailValidation from './components/api/EmailValidation';
import ConfirmEmailValidation from './components/api/ConfirmEmailValidation';
import LengthValidation from './components/api/LengthValidation';
import OnlyNumberValidation from './components/api/OnlyNumberValidation';
import PatternValidation from './components/api/PatternValidation';
import PasswordValidation from './components/api/PasswordValidation';
import ConfirmPasswordValidation from './components/api/ConfirmPasswordValidation';
import BetweenValidation from './components/api/BetweenValidation';
import CpfValidation from './components/api/CpfValidation';
import CreditCardValidation from './components/api/CreditCardValidation';
import NumberLimitValidation from './components/api/NumberLimitValidation';
import Viewport from './components/Viewport';

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
        <Router>
          <Viewport>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/introduction" component={Introduction} />
              <Route path="/download" component={Download} />
              <Route path="/required-validation" component={RequiredValidation} />
              <Route path="/email-validation" component={EmailValidation} />
              <Route path="/confirm-email-validation" component={ConfirmEmailValidation} />
              <Route path="/length-validation" component={LengthValidation} />
              <Route path="/only-number-validation" component={OnlyNumberValidation} />
              <Route path="/pattern-validation" component={PatternValidation} />
              <Route path="/password-validation" component={PasswordValidation} />
              <Route path="/confirm-password-validation" component={ConfirmPasswordValidation} />
              <Route path="/between-validation" component={BetweenValidation} />
              <Route path="/cpf-validation" component={CpfValidation} />
              <Route path="/credit-card-validation" component={CreditCardValidation} />
              <Route path="/number-limit-validation" component={NumberLimitValidation} />
              <Route component={NotFound} />
            </Switch>
          </Viewport>
        </Router>
      </MuiThemeProvider>
    );
  }
}