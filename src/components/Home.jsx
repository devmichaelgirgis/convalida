import React, { Component } from 'react';
import AppBar from './appbar/AppBar';
import { Typography } from '@material-ui/core';

class Home extends Component {
  render() {
    return (
      <div style={{ marginTop: 72 }}>
        <AppBar title="Convalida" />
        <Typography align="center" variant="display1">
          Hello, Convalida Docs!
        </Typography>
      </div>
    );
  }
}

export default Home;