import React, { Component } from 'react';
import AppBar from './appbar/AppBar';

class Home extends Component {
  render() {
    return (
      <div style={{ marginTop: 72 }}>
        <AppBar title="Convalida Docs" />
        <h2>Hello, Convalida Docs!</h2>
      </div>
    );
  }
}

export default Home;