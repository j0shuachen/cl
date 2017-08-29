import merge from 'lodash/merge';
import {
  RECEIVE_GROUP,
  RECEIVE_GROUPS ,
  UPDATE_GROUP,
  RECEIVE_ERRORS
} from '../actions/groups_actions.js';

const initialState = Object.freeze({
  errors: [],

  // currentGroup: undefined
});

const GroupsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type){
    case RECEIVE_GROUPS:
      return action.groups;
    case RECEIVE_GROUP:
      const newGroup= {[action.group.id]: action.group};
      // return merge({}, state, newGroup);
      return newGroup;
    case UPDATE_GROUP:
    newState = merge({}, state);
    newState[action.group.id] = action.group;
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

export default GroupsReducer;
