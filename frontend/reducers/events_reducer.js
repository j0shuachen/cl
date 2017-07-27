import merge from 'lodash/merge';
import{
  RECEIVE_EVENT,
  RECEIVE_EVENTS,
  UPDATE_EVENT,
  RECEIVE_ERRORS
} from '../actions/event_actions';

// const initialState={
//   entities:{}
// };
// x

const EventsReducer = (state={errors:[]}, action) => {
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
      case RECEIVE_ERRORS:
        const errors = action.errors;
        return merge({}, state, {
          errors
        });
    default:
    return state;
  }

};

export default EventsReducer;
