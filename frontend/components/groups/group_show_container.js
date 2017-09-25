import {connect} from 'react-redux';
import {fetchGroup, fetchGroups} from '../../actions/groups_actions';
import {fetchGroupEnrollments, createGroupEnrollment, deleteGroupEnrollment, fetchGroupEnrollment} from '../../actions/group_enrollment_actions';
import {selectGroup} from '../../reducers/selectors';
// import GroupShow from './group_show';
import GroupShowDos from './groupshowdos';
import {fetchEvent, fetchEvents} from '../../actions/event_actions';
import {selectEvents, selectAll} from '../../reducers/selectors';
import {fetchGroupNew, fetchGroupNews, createGroupNew} from '../../actions/group_news_actions';
import {createEventEnrollment, deleteEventEnrollment} from '../../actions/event_enrollment_actions';
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
  const membaz = fetchGroupEnrollments(groupId);
// console.log(group);
// console.log(group.members);
  // console.log(state);
  return {
    currentUser: state.session.currentUser,
    events: selectAll(state.events),
    group_enrollments: selectAll(state.group_enrollments),
    // group_members: selectAll(state.group_enrollments.members),
    // currentUser,
    // eventId,
    // evento,
    // name: mod[name],
    groupId,
    group,
    memb: group.members,
    // membo: membaz
    enrollments: state.group_enrollments.enrolls,
    memboz: state.group_enrollments.members

    // mod: state.groups.groupId.mod

  };

};

const mapDispatchToProps = dispatch => ({
  fetchGroup: id => dispatch(fetchGroup(id)),
  // fetchGroups: filters => dispatch(fetchGroups(filters)),
  fetchEvents: filters => dispatch(fetchEvents(filters)),
  fetchGroupEnrollments: (groupId) => dispatch(fetchGroupEnrollments(groupId)),
  fetchGroupEnrollment: id => dispatch(fetchGroupEnrollment(id)),
  createGroupEnrollment: (enrollment) => dispatch(createGroupEnrollment(enrollment)),
  deleteGroupEnrollment: (id) => dispatch(deleteGroupEnrollment(id)),
  createEventEnrollment: (enrollment) => dispatch(createEventEnrollment(enrollment)),
    deleteEventEnrollment: (id) => dispatch(deleteEventEnrollment(id)),
    fetchGroupNews: (groupId) => dispatch(fetchGroupNews(groupId)),
    fetchGroupNew: id => dispatch(fetchGroupNew(id)),
    createGroupNew: (enrollment) => dispatch(createGroupNew(enrollment)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupShowDos);


// console.log(group);
// console.log(events);
// const currentUser = () => {(
//   state.session.currentUser ? state.session.currentUser : {id: 0}
// );};
// console.log(groupId);
// const mod = state.groups[groupId];
// console.log(mod);
// const name= mod.name;
// console.log(name);
// console.log(groupId);
// console.log(state);
// console.log(state.groups[groupId]);
// const userinfo= (state.groups[groupId]);
// const modd = () => {
//   if (userinfo){
//     return userinfo.mod.mod.name;
//   }
// };
// console.log(modd);

// const modd = mod.name;

// console.log("mods");
// console.log(mods);
// const modaa = mods.mod;
// console.log(modaa);
