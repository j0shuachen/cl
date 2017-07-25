import merge from 'lodash/merge';
import{
  RECEIVE_EVENT,
  RECEIVE_EVENTS
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
    default:
    return state;
  }

};

export default EventsReducer;
