import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { default as MaterialAppBar } from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GitHubButton from './GitHubButton';
import SideMenu from './SideMenu';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  link: {
    color: '#FFF',
    textDecoration: 'none'
  }
};

class AppBar extends Component {
  render() {
    const { classes, title} = this.props;

    return (
      <div className={classes.root}>
        <MaterialAppBar style={{position: 'fixed'}}>
          <Toolbar>
            <SideMenu />
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}>
              {title}
            </Typography>
            <GitHubButton />
          </Toolbar>
        </MaterialAppBar>
      </div>
    );
  }
}

AppBar.propTypes = {
  title: PropTypes.string.isRequired
};

export default withStyles(styles)(AppBar);