import React, { Component } from 'react';
import './index.css';

class TimerInput extends Component {

  constructor(props) {
    super();
    this.state = { hours: props.hours, 
                   minutes: props.minutes, 
                   seconds: props.seconds };

  }

  // handles input changes and restricts non number inputs
  onHandleChange (event) {
    const input = (event.target.validity.valid) ? event.target.value : this.state[event.target.name];

    let eventName = event.target.name;
    let name = this.props.name + eventName.charAt(0).toUpperCase() + eventName.slice(1);

    this.setState ({
      [event.target.name]: input
    })

    this.props.onChange(event, name);

  }

  render() {
    return (
    	<div className="column">
          <div className="row">

          	{/* Title */}
            <header className="App-header">
              <h1 className="title">{this.props.title}</h1>
            </header>

            <hr />

          	{/* Table */}
            <table className="content-table">
              <tbody>

	          	  {/* Table Headers */}
	              <tr>
	                <th>Hour(s)</th>
	                <th></th>
	                <th>Minute(s)</th>
	                <th></th>
	                <th>Second(s)</th>
	              </tr>

	          	  {/* Input Boxes */}
	              <tr>

	          		{/* hours input */}
	                <td>            
	                  <input className="input" 
	                         type="text" 
	                         pattern="[0-9]*"
	                         id="hours" 
	                         name="hours"
	                         min="0" 
	                         placeholder="Hour(s)" 
	                         value={this.state.hours}
	                         onInput={(event) => this.onHandleChange(event)}/>
	                </td>
	                <td>:</td>

	          		{/* minutes input */}
	                <td>            
	                  <input className="input" 
	                         type="text" 
	                         pattern="[0-9]*"
	                         id="minutes" 
	                         name="minutes"  
	                         min="0" 
	                         placeholder="Minute(s)" 
	                         value={this.state.minutes}
	                         onInput={(event) => this.onHandleChange(event)} />
	                </td>
	                <td>:</td>

	          		{/* seconds input */}
	                <td>
	                  <input className="input" 
	                         type="text" 
	                         pattern="[0-9]*"
	                         id="seconds" 
	                         name="seconds" 
	                         min="0" 
	                         placeholder="Second(s)" 
	                         value={this.state.seconds}
	                         onInput={(event) => this.onHandleChange(event)} />
	                </td>
	              </tr>
	            </tbody>
            </table>
          </div>
        </div>
    );
  }
}

export default TimerInput;

// value={this.state[this.props.name + "hours"]}