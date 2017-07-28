import {connect} from 'react-redux';
import {fetchGroup, fetchGroups} from '../../actions/groups_actions';
import {fetchGroupEnrollments} from '../../actions/group_enrollment_actions';
import {selectGroup} from '../../reducers/selectors';
import GroupShow from './group_show';
import {fetchEvent, fetchEvents} from '../../actions/event_actions';
import {selectEvents, selectAll} from '../../reducers/selectors';

const mapStateToProps = (state, {match}) => {
  const eventId = parseInt(match.params.eventId);
  // console.log(state);
  // console.log(match);
  const evento = selectEvents(state, match.params.eventId);
  // console.log(state);
  const groupId = parseInt(match.params.groupId);
  const group = selectGroup(state, match.params.groupId);
  const event = selectEvents(state, match.params.groupId);

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
  return {
    currentUser: state.session.currentUser,
    events: selectAll(state.events),
    // currentUser,
    eventId,
    evento,
    // name: mod[name],
    groupId,
    group,
    enrollments: state.group_enrollments
    // mod: state.groups.groupId.mod

  };

};

const mapDispatchToProps = dispatch => ({
  fetchGroup: id => dispatch(fetchGroup(id)),
  // fetchGroups: filters => dispatch(fetchGroups(filters)),
  fetchEvents: filters => dispatch(fetchEvents(filters)),
  fetchGroupEnrollments: (groupId) => dispatch(fetchGroupEnrollments(groupId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupShow);
