import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Viewport from './components/Viewport';
import Home from './components/Home';
import NotFound from './components/NotFound';

import {
  Introduction,
  HowItWorks,
  HowToUse,
  Download
} from './components/gettingstarted';

import {
  RequiredValidation,
  EmailValidation,
  ConfirmEmailValidation,
  LengthValidation,
  OnlyNumberValidation,
  PatternValidation,
  PasswordValidation,
  ConfirmPasswordValidation,
  BetweenValidation,
  CpfValidation,
  CreditCardValidation,
  NumberLimitValidation
} from './components/api/validations';

import {
  ValidateOnClick,
  ClearValidationsOnClick,
  OnValidationSuccess,
  OnValidationError
} from './components/api/actions';

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
              <Route path="/how-it-works" component={HowItWorks} />
              <Route path="/how-to-use" component={HowToUse} />
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
              <Route path="/validate-on-click" component={ValidateOnClick} />
              <Route path="/clear-validations-on-click" component={ClearValidationsOnClick} />
              <Route path="/on-validation-success" component={OnValidationSuccess} />
              <Route path="/on-validation-error" component={OnValidationError} />
              <Route component={NotFound} />
            </Switch>
          </Viewport>
        </Router>
      </MuiThemeProvider>
    );
  }
}