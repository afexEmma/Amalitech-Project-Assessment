//State
const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0
  }
  
  const stateReducer = (state=initialWagonState, action) => {
    switch(action.type){
      case 'gather':
        return {
          ...initialWagonState,
          supplies: state.supplies + 15,
          distance: state.distance,
          days: state.days + 1
        };
      case 'travel':
      if(state.supplies >= (20*action.payload)){
        return {
          ...initialWagonState,
          supplies: state.supplies - (20*action.payload),
          distance: state.distance + (10*action.payload),
          days: state.days + action.payload
        }
      }else {
        console.log('Insufficient funds');
        return state;
      }
         
      case 'tippedWagon':
        return {
          ...initialWagonState,
          supplies: state.supplies - 30,
          distance: state.distance,
          days: state.days + 1
        };
      default:
        return state;
    }
  }
  
  // Action
  const travelAction = {
    type: 'travel',
    payload: 1
  }
  
  const gatherAction = {
    type: 'gather'
  }
  
  const tippedWagonAction = {
    type: 'tippedWagon'
  }
  
  const travel3Action = {
    type: 'travel',
    payload: 3
  }
  
  //Initializing wagon with default state
  let wagon = stateReducer(undefined, {});
  
  //travel action
  wagon = stateReducer(wagon, travelAction);
  wagon = stateReducer(wagon, gatherAction);
  wagon = stateReducer(wagon, tippedWagonAction);
  wagon = stateReducer(wagon, travel3Action);
  // wagon = stateReducer(wagon, travel3Action);
  
  //gather action
  console.log(wagon)