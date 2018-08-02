import React, { Component } from 'react';
import Viewport from '../Viewport';
import { Typography } from '@material-ui/core';

class Introduction extends Component {
  render() {
    return (
      <Viewport>
        <Typography align="center" variant="display1">
          Introduction
        </Typography>
      </Viewport>
    );
  }
}

export default Introduction;