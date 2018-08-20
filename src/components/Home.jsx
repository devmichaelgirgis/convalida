import React, { Component } from 'react';
import { Typography, withStyles, Avatar, Button } from '@material-ui/core';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const styles = {
  avatar: {
    width: 240,
    height: 240,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  title: {
    color: '#777777',
    marginTop: 32
  },
  subtitle: {
    color: '#777777',
    marginTop: 8
  },
  button: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 32
  }
};

class Home extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div style={{ marginTop: 128 }}>
        <Avatar alt="Logo" src={logo} className={classes.avatar} />
        <Typography className={classes.title} align="center" variant="display2">
          Convalida
        </Typography>
        <Typography className={classes.subtitle} align="center" variant="headline">
          A field validation library for Android.
        </Typography>
        <Link to="introduction" style={{ textDecoration: 'none' }}>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}>
            <b>Get Started</b>
          </Button>
        </Link>
      </div>
    );
  }
}

export default withStyles(styles)(Home);