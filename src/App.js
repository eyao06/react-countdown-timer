import React, { Component } from 'react';

import Header from './components/Header/index.js';
import Timer from './components/Timer/index.js';
import TimerInput from './components/TimerInput/index.js';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = { time: 0, 
                   startHours: 0, 
                   startMinutes: 0, 
                   startSeconds: 0,
                   endHours: 0, 
                   endMinutes: 0, 
                   endSeconds: 0 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  // converts time to seconds
  timeToSeconds(hours, minutes, seconds){

    let hoursToSeconds = parseInt(hours, 10) * 60 * 60;
    let minutesToSeconds = parseInt(minutes, 10) * 60;
    
    let time = hoursToSeconds + minutesToSeconds + parseInt(seconds, 10);

    return time;
  }

  // starts timer
  startTimer() {

    let startTime = this.timeToSeconds(this.state.startHours, this.state.startMinutes, this.state.startSeconds);
    let endTime = this.timeToSeconds(this.state.endHours, this.state.endMinutes, this.state.endSeconds);

    let time = endTime - startTime;

    //checks if start time is greater than end time
    if (time < 0) {
      alert("Error: Start Time Must Be Less Than The End Time");
      this.setState({ time: 0 });
      return;
    }
    

    this.setState({ time: time });

    if (this.timer === 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  // countdown
  countDown() {

    let time = (this.state.time)-1;
    this.setState({
      time: time,
    });
    
    // Check if we're at zero.
    if (time <= 0) { 
      clearInterval(this.timer);
    }
  }

  // handles all input changes
  onHandleChange(event, name) {
    this.setState ({
      [name]: event.target.value
    })
  }

  render() {
    return (
      <div className="App">

        {/* Header */}
        <Header title="The Countdown Timer" />

        {/* Countdown Timer */}
        <Timer time={this.state.time} />
        <br /><br /><br />

        {/* Start Time Input */}
        <TimerInput title="Start Time" 
                    name="start" 
                    hours={this.state.startHours} 
                    minutes={this.state.startMinutes} 
                    seconds={this.state.startSeconds} 
                    onChange={this.onHandleChange.bind(this)} />

        {/* End Time Input */}
        <TimerInput title="End Time" 
                    name="end" 
                    hours={this.state.endHours} 
                    minutes={this.state.endMinutes} 
                    seconds={this.state.endSeconds} 
                    onChange={this.onHandleChange.bind(this)} />
        
        {/* Start Timer Button */}
        <button className="button" type="button" onClick={this.startTimer}>Start Countdown</button> 
      </div>
    );
  }
}

export default App;