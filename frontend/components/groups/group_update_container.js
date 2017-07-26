import {connect } from 'react-redux';
import UpdateGroup from './group_update';
import {fetchGroup, updateGroup} from '../../actions/groups_actions';

// import {fetchEvent, updateEvent} from '../../actions/event_actions';
import {Link, withRouter} from 'react-router-dom';
import {selectEvents, selectGroup} from '../../reducers/selectors';

const mapStateToProps = (state, {match}) => {
  const groupId = parseInt(match.params.groupId);
  // const eventId = parseInt(match.params.eventId);
  // const group = selectGroup(state, match.params.groupId);
  // const events = selectEvents(state, match.params.eventId);
  return {
    groupId,
  group: selectGroup(state, match.params.groupId),
  // eventId

  };
};


const mapDispatchToProps = dispatch => ( {
  fetchGroup: id => dispatch(fetchGroup(id)),
  // fetchEvent: id => dispatch(fetchEvent(id)),
  updateGroup: data => dispatch(updateGroup(data))

  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateGroup);
