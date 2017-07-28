import {connect} from 'react-redux';
import GroupEnrollment from './group_enrollment';
import {selectAll, selectGroup, selectGroupEnrollment} from '../../reducers/selectors';

import {receiveGroups, fetchGroups, fetchGroup} from '../../actions/groups_actions';
import { receiveGroupEnrollments, fetchGroupEnrollments,
  fetchGroupEnrollment, createGroupEnrollment, deleteGroupEnrollment} from '../../actions/group_enrollment_actions';

const mapStateToProps = (state) => {
  // console.log(state);
  // console.log(state);
  // const groupId = parseInt(match.params.groupId);
  // const group = selectGroup(state, match.params.groupId);

  return {
    group: state.groups,
    currentUser: state.session.currentUser,

    // groupId,
    // group,
    // groups: selectAll(state.groups),
    // errors: state.errors
    // isMember: Boolean(fetchGroupEnrollment(state.session.currentUser.id)),

    group_enrollments: selectAll(state.group_enrollments)
  };
};

const mapDispatchToProps = dispatch =>( {
  fetchGroups: () => dispatch(fetchGroups()),
  fetchGroupEnrollments: () => dispatch(fetchGroupEnrollments()),
  fetchGroupEnrollment: (id) => dispatch(fetchGroupEnrollment(id)),
  deleteGroupEnrollment: (id) => dispatch(deleteGroupEnrollment(id)),
  fetchGroup: id => dispatch(fetchGroup(id)),
  createGroupEnrollment: (data) => dispatch(createGroupEnrollment(data))

});

export default connect(

  mapStateToProps,
  mapDispatchToProps
)(GroupEnrollment);
