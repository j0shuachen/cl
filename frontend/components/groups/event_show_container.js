import {connect} from 'react-redux';
import {fetchEvents, fetchEvent} from '../../actions/event_actions';
import {selectEvents} from '../../reducers/selectors';
import EventShow from './event_show';

const mapStateToProps = ( state, {match}) => {
  const eventId = parseInt(match.params.eventId);
  // console.log(state);
  // console.log(match);
  const evento = selectEvents(state, match.params.eventId);
  // console.log(evento);
  // console.log(selectEvents(state.events));
  // console.log(evento);
  // let showz = `/groups/${this.props.evento.group_id}/events/${this.props.evento.id}/update`;
  const groupId = evento.group_id;
  return {
    groupId,
    currentUser: state.session.currentUser,
    eventId,
    evento,

    // events: selectEvents(state.events)
    // events: state.events
  };
};

const mapDispatchToProps = dispatch => ({
  fetchEvent: id => dispatch(fetchEvent(id)),
  fetchEvents: filters => dispatch(fetchEvents(filters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventShow);
