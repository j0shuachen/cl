import {connect } from 'react-redux';
import UpdateEvent from './update_event';
// import {fetchGroup} from '../../actions/groups_actions';

import {fetchEvent, updateEvent} from '../../actions/event_actions';
import {Link, withRouter} from 'react-router-dom';
import {selectEvents, selectGroup} from '../../reducers/selectors';
import {fetchGroup} from '../../actions/groups_actions';
import {createGroupNew} from '../../actions/group_news_actions';

const mapStateToProps = (state, {match}) => {
  const groupId = parseInt(match.params.groupId);
  const eventId = parseInt(match.params.eventId);
  // const group = selectGroup(state, match.params.groupId);
  // const events = selectEvents(state, match.params.eventId);
  const o = selectGroup(state, match.params.groupId);
  // console.log(o);

  return {
    groupId,
  group: selectGroup(state, match.params.groupId),
  events: selectEvents(state, match.params.eventId),
  eventId
  };
};


const mapDispatchToProps = dispatch => ( {
  // fetchGroup: id => dispatch(fetchGroup(id)),
  fetchEvent: id => dispatch(fetchEvent(id)),
  updateEvent: data => dispatch(updateEvent(data)),
  fetchGroup: id => dispatch(fetchGroup(id)),
  createGroupNew: (enrollment) => dispatch(createGroupNew(enrollment)),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateEvent);
