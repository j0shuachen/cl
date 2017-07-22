import * as APIUtil from '../util/group_api_util';
export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const RECEIVE_GROUP = "RECEIVE_GROUP";

export const receiveGroups = groups => ({
  type: RECEIVE_GROUPS,
  groups
});

export const receiveGroup = group =>({
  type: RECEIVE_GROUP,
  group
});

export const fetchGroups = filters => dispatch =>(
  APIUtil.fetchGroups(filters).then(groupes =>(
    dispatch(receiveGroups(groupes))
  ))
);

export const fetchGroup = id => dispatch=>(
  APIUtil.fetchGroup(id).then(groupe =>(
    dispatch(receiveGroup(groupe))
  ))
);

export const createGroup = group => dispatch => (
  APIUtil.createGroup(group).then(groupe => (
    dispatch(receiveGroup(groupe))
  ))
);
