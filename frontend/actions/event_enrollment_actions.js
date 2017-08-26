export const RECEIVE_EVENT_ENROLLMENTS = "RECEIVE_EVENT_ENROLLMENTS";
export const RECEIVE_EVENT_ENROLLMENT = "RECEIVE_EVENT_ENROLLMENT";
import * as APIUtil from '../util/event_enrollment_api_util';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_EVENT_ENROLLMENT = "REMOVE_EVENT_ENROLLMENT";

export const receiveEventEnrollments = enrollments => ({
  type: RECEIVE_EVENT_ENROLLMENTS,
  enrollments
});

export const receiveEventEnrollment = enrollment => ({
  type: RECEIVE_EVENT_ENROLLMENT,
  enrollment
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const removeEventEnrollment = enrollment => ({
  type: REMOVE_EVENT_ENROLLMENT,
  enrollment
});

export const fetchEventEnrollment = id => (dispatch) => {
  return APIUtil.fetchEventEnrollment(id).then(enrollment => {
    dispatch(receiveEventEnrollment(enrollment));
  });
};

export const fetchEventEnrollments = (eventId) => (dispatch) => {
  return APIUtil.fetchEventEnrollments(eventId).then(
    enrollments => {
      dispatch(receiveEventEnrollments(enrollments));
    }
  );
};

export const createEventEnrollment = enrollment => dispatch => {
  return APIUtil.createEventEnrollment(enrollment).then(
    resp => {
      dispatch(receiveEventEnrollment(resp));
    }
  );
};

// export const deleteEventEnrollment = (userId, eventId) => dispatch => {
//   return APIUtil.deleteGroupEnrollment(userId, eventId).then(
//     resp => {
//       dispatch(removeGroupEnrollment(resp));
//     }
//   );
// };



export const deleteEventEnrollment = enrollment => dispatch => {
  return APIUtil.deleteEventEnrollment(enrollment).then(
    resp => {
      dispatch(removeEventEnrollment(resp));
    }
  );
};
