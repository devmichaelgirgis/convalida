import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';
import { Link } from '@reach/router';
import AppBar from './appbar/AppBar';

const styles = {
  link: {
    color: '#EA0760',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
};

class NotFound extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div style={{ marginTop: "15%" }}>
        <AppBar title="Convalida" />
        <Typography align="center" variant="display1">
          :(
        </Typography>
        <br /><br />
        <Typography align="center" variant="display1">
          Sorry, this page doesn’t exist.
        </Typography>
        <br /><br />
        <Link style={{ textDecoration: 'none' }} to="/">
          <Typography className={classes.link} align="center" variant="body2">
            Go back to homepage
          </Typography>
        </Link>
      </div>
    );
  }
}

export default withStyles(styles)(NotFound);