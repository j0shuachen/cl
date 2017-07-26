import merge from 'lodash/merge';
import{
  RECEIVE_EVENT,
  RECEIVE_EVENTS,
  UPDATE_EVENT
} from '../actions/event_actions';

// const initialState={
//   entities:{}
// };
// x

const EventsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type){
    case RECEIVE_EVENTS:
    return action.events;

    case RECEIVE_EVENT:
    const newEvent = {[action.eventt.id]: action.eventt};
    return merge({}, state, newEvent);
    case UPDATE_EVENT:
      newState = merge({}, state);
      newState[action.eventt.id] = action.eventt;
      return newState;
    default:
    return state;
  }

};

export default EventsReducer;
