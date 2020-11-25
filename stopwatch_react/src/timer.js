import React, { Component } from 'react';
import { format } from './helper/helper';

export class Timer extends Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <h2>{format(this.props.time)}</h2>
      </div>
    );
  }
}



export default Timer;
