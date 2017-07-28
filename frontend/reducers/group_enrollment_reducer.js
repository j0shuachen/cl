import merge from 'lodash/merge';
import{
    RECEIVE_GROUP_ENROLLMENTS,
    RECEIVE_GROUP_ENROLLMENT,
    RECEIVE_ERRORS,
    REMOVE_GROUP_ENROLLMENT

} from '../actions/group_enrollment_actions';

// const initialState={
//   entities:{}
// };
// x

const GroupEnrollmentReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type){
    case RECEIVE_GROUP_ENROLLMENTS:
      return action.enrollments;
    case RECEIVE_GROUP_ENROLLMENT:
    const newEvent = {[action.enrollment.id]: action.enrollment};
    return merge({}, state, newEvent);
    case REMOVE_GROUP_ENROLLMENT:
      newState = merge({}, state);
      delete newState[action.enrollment.id];
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

export default GroupEnrollmentReducer;
