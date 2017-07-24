import { connect } from 'react-redux';
import EventIndex from './event_index';
import {selectAll} from '../../reducers/selectors';

import {receiveEvents, fetchEvents} from '../../actions/event_actions';

const mapStateToProps = state => {
  return {
    events: selectAll(state.events)
  };
};


const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(
    mapStateToProps,
  mapDispatchToProps

)(EventIndex);
