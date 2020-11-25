import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startTimer, stopTimer, addLap, resetTimer } from './actions/actions';
import { CentiSeconds } from './helper/helper';

export class StopwatchControls extends Component {
  render() {
    const { started, dispatch } = this.props;
    if (started) {
      return (
        <div>
          <button onClick={() => dispatch(stopTimer(CentiSeconds(Date.now())))}>
            Stop
          </button>
          <button onClick={() => dispatch(addLap(CentiSeconds(Date.now())))}>
             Lap
          </button>
        </div>
      )
    } else {
      return (
        <div>
          <button onClick={() => dispatch(startTimer(CentiSeconds(Date.now())))}>
            start
          </button>
          <button onClick={() => dispatch(resetTimer())}>
            reset
          </button>
        </div>
      )
    }
  }
}

export default connect(state => {return {dispatch: state.dispatch,started: state.started};
})(StopwatchControls);
