import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

const styles = {
  link: {
    color: '#EA0760',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
};

class Link extends Component {
  render() {
    const { classes, url, text } = this.props;
    return (
      <a className={classes.link} href={url}>{text}</a>
    );
  }
}

Link.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default withStyles(styles)(Link);