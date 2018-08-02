import React, { Component } from 'react';
import Viewport from '../Viewport';
import { Typography } from '@material-ui/core';

class Download extends Component {
  render() {
    return (
      <Viewport>
        <Typography align="center" variant="display1">
          Download
        </Typography>
      </Viewport>
    );
  }
}

export default Download;