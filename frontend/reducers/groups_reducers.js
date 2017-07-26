import merge from 'lodash/merge';
import {
  RECEIVE_GROUP,
  RECEIVE_GROUPS ,
  UPDATE_GROUP
} from '../actions/groups_actions.js';

const initialState = {
  entities: {},
  // currentGroup: undefined
};

const GroupsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type){
    case RECEIVE_GROUPS:
      return action.groups;
    case RECEIVE_GROUP:
      const newGroup= {[action.group.id]: action.group};
      return merge({}, state, newGroup);
    case UPDATE_GROUP:
    newState = merge({}, state);
    newState[action.group.id] = action.group;
    return newState;
    default:
    return state;
  }
};

export default GroupsReducer;
