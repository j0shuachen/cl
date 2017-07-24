import {connect} from 'react-redux';
import {fetchGroup, fetchGroups} from '../../actions/groups_actions';
import {selectGroup} from '../../reducers/selectors';
import GroupShow from './group_show';
import {fetchEvent, fetchEvents} from '../../actions/event_actions';
import {selectEvents} from '../../reducers/selectors';
const mapStateToProps = (state, {match}) => {
  const groupId = parseInt(match.params.groupId);
  const group = selectGroup(state, match.params.groupId);
  const events = selectEvents(state, match.params.groupId);
  return {
    groupId,
    group,
    events
  };

};

const mapDispatchToProps = dispatch => ({
  fetchGroup: id => dispatch(fetchGroup(id)),
  fetchGroups: filters => dispatch(fetchGroups(filters)),
  fetchEvents: filters => dispatch(fetchEvents(filters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupShow);
