import { connect} from 'react-redux';
import EventForm from './event_form';
import {createEvent, fetchEvents} from '../../actions/event_actions';
import {selectAll, selectEvents} from '../../reducers/selectors';

const mapStateToProps = state => ({
  events: selectAll(state.events)
});

const mapDispatchToProps = dispatch => ({
  createEvent: (evento) => dispatch(createEvent(evento)),
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps

)(EventForm);
