import './App.css';
import React,{Component} from "react";
import Timer from './timer';
import LapList from './listoflap';
import Lap from './lap';
import StopwatchControls from './stopwatchcontrol';
import { connect } from 'react-redux';
import { CentiSeconds } from './helper/helper';


class App extends Component {
  state = {
    totalTime: 0,
    currentLapTime: 0
  };

  componentDidUpdate() {
    requestAnimationFrame(this.tick.bind(this));
  }

  tick() {
    if (this.props.started) {
      const now = CentiSeconds(Date.now());
      const totalTime = now - this.props.started + this.props.recordedTime;
      this.setState({
        now,
        totalTime,
        currentLapTime: totalTime - this.props.lapTotal
      });
    } else {
      if (this.props.recordedTime !== this.state.totalTime) {
        this.setState({
          totalTime: this.props.recordedTime,
          currentLapTime: this.props.recordedTime - this.props.lapTotal
        });
      }
    }
  }

  render(){
    console.log(this.props)
    return (
      <div className="App">
      <h1>Stopwatch</h1>
      <Timer label={'Total'} time={this.state.totalTime} />
      <StopwatchControls />
      <Lap label={`Lap-> ${this.props.laps.length + 1}`} time={this.state.currentLapTime} />
      <LapList />
    </div>
    );
  }

}

export default connect(store => store)(App);
