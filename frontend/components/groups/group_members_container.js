import {connect} from 'react-redux';
import {fetchGroup, fetchGroups} from '../../actions/groups_actions';
import {fetchGroupEnrollments, createGroupEnrollment, deleteGroupEnrollment} from '../../actions/group_enrollment_actions';
import {selectGroup} from '../../reducers/selectors';
import GroupMembers from './group_members';
import {fetchEvent, fetchEvents} from '../../actions/event_actions';
import {selectEvents, selectAll} from '../../reducers/selectors';

const mapStateToProps = (state, {match}) => {
  // console.log(state);
  const eventId = parseInt(match.params.eventId);
  // console.log(state);
  // console.log(match);
  const evento = selectEvents(state, match.params.eventId);

  // console.log(state);
  const groupId = parseInt(match.params.groupId);
  const group = selectGroup(state, match.params.groupId);
  const event = selectEvents(state, match.params.groupId);
// console.log(group);
// console.log(group.members);
  // console.log(state);
  return {

    currentUser: state.session.currentUser,
    events: selectAll(state.events),
    // currentUser,
    eventId,
    evento,
    // name: mod[name],
    groupId,
    group: group,
    memb: group.members,
    enrollments: state.group_enrollments.enrolls,
    memboz: state.group_enrollments.members
    // memberz: selectAll(state.group_enrollments.enrolls)
    // enrollments: state.group_enrollments,
    // mod: state.groups.groupId.mod

  };

};

const mapDispatchToProps = dispatch => ({
  fetchGroup: id => dispatch(fetchGroup(id)),
  // fetchGroups: filters => dispatch(fetchGroups(filters)),
  fetchEvents: filters => dispatch(fetchEvents(filters)),
  fetchGroupEnrollments: (groupId) => dispatch(fetchGroupEnrollments(groupId)),
  createGroupEnrollment: (enrollment) => dispatch(createGroupEnrollment(enrollment)),
  deleteGroupEnrollment: (id) => dispatch(deleteGroupEnrollment(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupMembers);
