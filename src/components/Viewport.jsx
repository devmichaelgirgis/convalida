import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from './appbar/AppBar';

class Viewport extends Component {
  render() {
    const { children } = this.props;
    return (
      <div style={{ marginTop: 72 }}>
        <AppBar title="Convalida" />
        {children}
      </div>
    );
  }
}

Viewport.proptypes = {
  children: PropTypes.element.isRequired
};

export default Viewport;