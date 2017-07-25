import merge from 'lodash/merge';
import {
  RECEIVE_GROUP,
  RECEIVE_GROUPS ,
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
    default:
    return state;
  }
};

export default GroupsReducer;
