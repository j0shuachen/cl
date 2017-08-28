export const RECEIVE_GROUP_NEWS = "RECEIVE_GROUP_NEWS";
export const RECEIVE_GROUP_NEW = "RECEIVE_GROUP_NEW";
import * as APIUtil from '../util/group_news_api_util';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_GROUP_NEW = "REMOVE_GROUP_NEW";

export const receiveGroupNews = enrollments => ({
  type: RECEIVE_GROUP_NEWS,
  enrollments
});

export const receiveGroupNew = enrollment => ({
  type: RECEIVE_GROUP_NEW,
  enrollment
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const removeGroupNew = enrollment => ({
  type: REMOVE_GROUP_NEW,
  enrollment
});

export const fetchGroupNew = id => (dispatch) => {
  return APIUtil.fetchGroupNew(id).then(enrollment => {
    dispatch(receiveGroupNew(enrollment));
  });
};

export const fetchGroupNews = (groupId) => (dispatch) => {
  return APIUtil.fetchGroupNews(groupId).then(
    enrollments => {
      dispatch(receiveGroupNews(enrollments));
    }
  );
};

export const createGroupNew = enrollment => dispatch => {
  return APIUtil.createGroupNew(enrollment).then(
    resp => {
      dispatch(receiveGroupNew(resp));
    }
  );
};

// export const deleteGroupNew = (userId, groupId) => dispatch => {
//   return APIUtil.deleteGroupNew(userId, groupId).then(
//     resp => {
//       dispatch(removeGroupNew(resp));
//     }
//   );
// };



// export const deleteGroupNew = enrollment => dispatch => {
//   return APIUtil.deleteGroupNew(enrollment).then(
//     resp => {
//       dispatch(removeGroupNew(resp));
//     }
//   );
// };
