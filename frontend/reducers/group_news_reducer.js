import merge from 'lodash/merge';
import{
    RECEIVE_GROUP_NEWS,
    RECEIVE_GROUP_NEW,
    RECEIVE_ERRORS,
    REMOVE_GROUP_NEW

} from '../actions/group_news_actions';



const GroupNewsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  // console.log(action);
  switch(action.type){
    case RECEIVE_GROUP_NEWS:
      return action.enrollments;
    case RECEIVE_GROUP_NEW:
    const newEvent = {[action.enrollment.id]: action.enrollment};
    // return merge({}, state, newEvent);
    const op = merge({}, state);
    console.log(action.enrollment);
//     if(op.enrolls){
//     op.enrolls[action.enrollment.id]= action.enrollment.;
//     // op.members[action.enrollment.id] = action.enrollment;
//     return op;
//   // }else{
//   //   op.enrolls = {};
//   //   return op;
//   // }
// }else{
//   op.enrolls = {};
//
//   op.enrolls[action.enrollment.id] = action.enrollment;
//   return op;
// }
  op.enrolls = action.enrollment.enrolls;
  op.members = action.enrollment.members;
  return op;

    case REMOVE_GROUP_NEW:
      newState = merge({}, state);
      // console.log(newState);
      // console.log(action.enrollment);
      // console.log(newState.members[action.enrollment.user_id]);
      // console.log(newState.enrolls);
      // delete newState.members[action.enrollment.user_id];
      console.log(action.enrollment);
      // delete newState.enrolls[action.enrollment.id];
      // delete newState.members[action.enrollment.user_id];
      // console.log('ye', newState);

      newState.enrolls = action.enrollment.enrolls;
      newState.members = action.enrollment.members;
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

export default GroupNewsReducer;
