import {connect} from 'react-redux';
import {fetchGroup, fetchGroups} from '../../actions/groups_actions';
import {fetchGroupEnrollments, createGroupEnrollment, deleteGroupEnrollment, fetchGroupEnrollment} from '../../actions/group_enrollment_actions';
import {selectGroup} from '../../reducers/selectors';
import {fetchUser} from '../../actions/session_actions';
import {fetchEvent, fetchEvents} from '../../actions/event_actions';

import UserShow from './user_show';
import {fetchGroupNew, fetchGroupNews, createGroupNew} from '../../actions/group_news_actions';

const mapStateToProps = (state, {match}) => {
  // console.log('state', state);
  // console.log('match', match);
  // console.log(state);

  const groupId = parseInt(match.params.groupId);
  const userId = parseInt(match.params.userId);
  const group = selectGroup(state, match.params.groupId);

  const user = selectGroup(state, match.params.userId);
// console.log(userId);
  return {
    currentUser: state.session.currentUser,
    user:state.session,
    groupId,
    group,
    memb: group.members,
    x: state.session[match.params.userId]

  };

};

const mapDispatchToProps = dispatch => ({
  fetchGroup: id => dispatch(fetchGroup(id)),
  fetchGroupEnrollments: (groupId) => dispatch(fetchGroupEnrollments(groupId)),
  fetchGroupEnrollment: id => dispatch(fetchGroupEnrollment(id)),
  createGroupEnrollment: (enrollment) => dispatch(createGroupEnrollment(enrollment)),
  deleteGroupEnrollment: (id) => dispatch(deleteGroupEnrollment(id)),
  fetchUser: id => dispatch(fetchUser(id)),
  fetchGroupNews: (groupId) => dispatch(fetchGroupNews(groupId)),
  fetchEvents: filters => dispatch(fetchEvents(filters))


});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
