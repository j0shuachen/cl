import merge from 'lodash/merge';
import{
  RECEIVE_SPONSOR,
  RECEIVE_SPONSORS,
  UPDATE_SPONSOR,
  RECEIVE_ERRORS,
  REMOVE_SPONSOR
} from '../actions/sponsor_actions';

// const initialState={
//   entities:{}
// };
// x

const SponsorReducer = (state={errors:[]}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type){
    case RECEIVE_SPONSORS:
    return action.events;

    case RECEIVE_SPONSOR:

    const newEvent = {[action.sponsor.id]: action.sponsor};
    // console.log(newEvent);
    return merge({}, state, newEvent);
    case UPDATE_SPONSOR:
      newState = merge({}, state);
      newState[action.sponsor.id] = action.sponsor;
      return newState;
    case REMOVE_SPONSOR:
      newState = merge({}, state);
      delete newState[action.sponsor.id];
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

export default SponsorReducer;
