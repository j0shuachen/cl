import {connect} from 'react-redux';
import GroupForm from './group_form';
import { createGroup, fetchGroups } from '../../actions/groups_actions';
import { selectGroup, selectAll } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  groups: selectAll(state.groups),
  errors: state.groups.errors
  // errors: state.errors
  // errors: state.errors

});

const mapDispatchToProps = dispatch => ({
  createGroup: (group) => dispatch(createGroup(group)),
  fetchGroups: () => dispatch(fetchGroups())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupForm);
