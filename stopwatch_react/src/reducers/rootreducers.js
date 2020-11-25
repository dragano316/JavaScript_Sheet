const initialstate={
    laps:[],
    started:null,
    recordedTime:0,
    lapTotal:0,
}

// const rootReducer=(state=initialstate,action)=>{


// }

function rootReducer(state=initialstate, action) {
    switch (action.type) {
      case 'START_TIMER':
        return {
          ...state,
          started: action.time
        };
      case 'STOP_TIMER':
        return {
          ...state,
          recordedTime:state.recordedTime+action.time-state.started,
          started: null
        };
      case 'ADD_LAP':
        const lapTotal = state.laps.reduce((prev, cur) => prev + cur, 0);
        const lapTime = action.time-state.started+state.recordedTime-lapTotal;
        const newLapTotal = lapTotal + lapTime;
        return {
          ...state,
          lapTotal: newLapTotal,
          laps: [lapTime, ...state.laps],
        }
      case 'RESET_TIMER':
        return initialstate;
      default:
        return state;
    }
  }
export default rootReducer;