import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  RECEIVE_USER,
  UPDATE_USER

} from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,

  errors: []

});

const SessionReducer= (state = nullUser, action) =>{
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
    // console.log(action.currentUser);
    const currentUser = action.currentUser;
    return merge({}, nullUser, {
      currentUser
    });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, nullUser, {
        errors
      });
    case RECEIVE_USER:
    // console.log('action', action.user);
    //
      const nex = {[action.user.id]: action.user};
      const o = merge({}, state, nex);
    //   console.log('nex', nex);
    // const nex = action.user;
      // return nex;
      return o;
    case UPDATE_USER:
      const nexo = merge({}, state);
      nexo[action.user.id] = action.user;
    default:
      return state;
  }
};

export default SessionReducer;
