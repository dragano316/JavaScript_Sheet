import React, { Component } from 'react';
import { connect } from 'react-redux';
import Lap from './lap';

export class LapList extends Component {
  render() {
    const { laps } = this.props;
    return (
      <div >
        {laps.map((lap, i) => {
          const lapNumber = laps.length - i;
          return (
            <Lap key={lapNumber} label={`Lap->${lapNumber}`} time={lap} />
          );
        })}
      </div>
    );
  }
}

export default connect(state => {return {laps: state.laps};})(LapList);
