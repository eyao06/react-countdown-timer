import React, { Component } from 'react';
import './index.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>{this.props.title}</h1>
      </header>
    );
  }
}

export default Header;
