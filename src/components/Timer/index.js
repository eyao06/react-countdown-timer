import React, { Component } from 'react';
import './index.css';

class Timer extends Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="timer">{this.props.time} Second(s)</h1>
      </header>
    );
  }
}

export default Timer;
