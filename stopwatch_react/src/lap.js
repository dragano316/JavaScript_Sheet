import React, { Component } from 'react';
import { connect } from 'react-redux';
import { format } from './helper/helper';

export class Lap extends Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <h3>{format(this.props.time)}</h3>
      </div>
    );
  }
}



export default connect(state => state)(Lap);
