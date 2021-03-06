export const RECEIVE_GROUP_ENROLLMENTS = "RECEIVE_GROUP_ENROLLMENTS";
export const RECEIVE_GROUP_ENROLLMENT = "RECEIVE_GROUP_ENROLLMENT";
import * as APIUtil from '../util/group_enrollment_api_util';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_GROUP_ENROLLMENT = "REMOVE_GROUP_ENROLLMENT";

export const receiveGroupEnrollments = enrollments => ({
  type: RECEIVE_GROUP_ENROLLMENTS,
  enrollments
});

export const receiveGroupEnrollment = enrollment => ({
  type: RECEIVE_GROUP_ENROLLMENT,
  enrollment
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const removeGroupEnrollment = enrollment => ({
  type: REMOVE_GROUP_ENROLLMENT,
  enrollment
});

export const fetchGroupEnrollment = id => (dispatch) => {
  return APIUtil.fetchGroupEnrollment(id).then(enrollment => {
    dispatch(receiveGroupEnrollment(enrollment));
  });
};

export const fetchGroupEnrollments = (groupId) => (dispatch) => {
  return APIUtil.fetchGroupEnrollments(groupId).then(
    enrollments => {
      dispatch(receiveGroupEnrollments(enrollments));
    }
  );
};

export const createGroupEnrollment = enrollment => dispatch => {
  return APIUtil.createGroupEnrollment(enrollment).then(
    resp => {
      dispatch(receiveGroupEnrollment(resp));
    }
  );
};

// export const deleteGroupEnrollment = (userId, groupId) => dispatch => {
//   return APIUtil.deleteGroupEnrollment(userId, groupId).then(
//     resp => {
//       dispatch(removeGroupEnrollment(resp));
//     }
//   );
// };



export const deleteGroupEnrollment = enrollment => dispatch => {
  return APIUtil.deleteGroupEnrollment(enrollment).then(
    resp => {
      dispatch(removeGroupEnrollment(resp));
    }
  );
};
