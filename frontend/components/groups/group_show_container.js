import {connect} from 'react-redux';
import {fetchGroup} from '../../actions/groups_actions';
import {selectGroup} from '../../reducers/selectors';
import GroupShow from './group_show';

const mapStateToProps = (state, {match}) => {
  const groupId = parseInt(match.params.groupId);
  const group = selectGroup(state, match.params.groupId);
  return {
    groupId,
    group
  };

};

const mapDispatchToProps = dispatch => ({
  fetchGroup: id => dispatch(fetchGroup(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupShow);
