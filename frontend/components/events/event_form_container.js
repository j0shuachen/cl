import { connect} from 'react-redux';
import EventForm from './event_form';
import {createEvent, fetchEvents} from '../../actions/event_actions';
import {selectAll, selectEvents} from '../../reducers/selectors';

// const mapStateToProps = state => ({
//   events: selectAll(state.events)
// });

const mapStateToProps = (state, {match}) => {
  const groupId = parseInt(match.params.id);
// console.log(state);
  return {
    events: selectAll(state.events),
    groupId,
    errors: state.events.errors


  };

};

const mapDispatchToProps = dispatch => ({
  createEvent: (evento) => dispatch(createEvent(evento)),
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps

)(EventForm);
