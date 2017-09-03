import {connect} from 'react-redux';
import {fetchEvents, fetchEvent} from '../../actions/event_actions';
// import {selectEvents} from '../../reducers/selectors';
// import EventShow from './event_show';
import EventShowDos from '.././events/event_show_dos';
import {fetchGroup, fetchGroups} from '../../actions/groups_actions';
import {fetchGroupEnrollments, createGroupEnrollment, deleteGroupEnrollment, fetchGroupEnrollment} from '../../actions/group_enrollment_actions';
import {selectGroup} from '../../reducers/selectors';
import GroupShow from './group_show';
// import {fetchEvent, fetchEvents} from '../../actions/event_actions';
import {selectEvents, selectAll} from '../../reducers/selectors';
import {fetchGroupNew, fetchGroupNews, createGroupNew} from '../../actions/group_news_actions';
import {createEventEnrollment, deleteEventEnrollment} from '../../actions/event_enrollment_actions';
const mapStateToProps = ( state, {match}) => {
  const eventId = parseInt(match.params.eventId);
  // console.log(state);
  // console.log(match);
  const evento = selectEvents(state, match.params.eventId);
  const groupId = parseInt(match.params.groupId);
  const group = selectGroup(state, match.params.groupId);
  // console.log(evento);
  // console.log(selectEvents(state.events));
  // console.log(evento);
  // let showz = `/groups/${this.props.evento.group_id}/events/${this.props.evento.id}/update`;
  // const groupId = evento.group_id;
  return {
    groupId,
    currentUser: state.session.currentUser,
    eventId,
    evento,
    group

    // events: selectEvents(state.events)
    // events: state.events
  };
};

const mapDispatchToProps = dispatch => ({
  fetchEvent: id => dispatch(fetchEvent(id)),
  fetchEvents: filters => dispatch(fetchEvents(filters)),
  fetchGroup: id => dispatch(fetchGroup(id)),
  // fetchGroups: filters => dispatch(fetchGroups(filters)),
  // fetchEvents: filters => dispatch(fetchEvents(filters)),
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
)(EventShowDos);
// )(EventShow);
