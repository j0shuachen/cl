import { connect} from 'react-redux';
import EventForm from './event_form';
import {createEvent, fetchEvents} from '../../actions/event_actions';
import {selectAll, selectEvents} from '../../reducers/selectors';
import {selectGroup} from '../../reducers/selectors';

import {createGroupNew} from '../../actions/group_news_actions';
import {fetchGroup} from '../../actions/groups_actions';
// const mapStateToProps = state => ({
//   events: selectAll(state.events)
// });

const mapStateToProps = (state, {match}) => {
  const groupId = parseInt(match.params.id);
console.log(state);
const group = selectGroup(state, match.params.id);
console.log(group);
  return {
    events: selectAll(state.events),
    groupId,
    errors: state.events.errors,
    group


  };

};

const mapDispatchToProps = dispatch => ({
  createEvent: (evento) => dispatch(createEvent(evento)),
  fetchEvents: () => dispatch(fetchEvents()),
  createGroupNew: (enrollment) => dispatch(createGroupNew(enrollment)),
  fetchGroup: id => dispatch(fetchGroup(id))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps

)(EventForm);
