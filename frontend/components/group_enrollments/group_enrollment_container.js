import { connect} from 'react-redux';
import GroupEnrollment from './group_enrollment';
import {createGroupEnrollment, fetchGroupEnrollments, fetchGroupEnrollment} from '../../actions/group_enrollment_actions';
import {selectAll, selectGroupEnrollment, selectGroup} from '../../reducers/selectors';
import {fetchGroup, fetchGroups} from '../../actions/groups_actions';

// const mapStateToProps = state => ({
//   events: selectAll(state.events)
// });

const mapStateToProps = (state, {match}) => {
  // const enrollmentId = parseInt(match.params.id);
  // const groupId = parseInt(match.params.groupId);
  // const group = selectGroup(state, match.params.groupId);
// console.log(state);
  return {
    member: false

    // enrollments: selectAll(state.enrollments),
    // errors: state.enrollments.errors,
    // groupId,
    // group


  };

};

const mapDispatchToProps = dispatch => ({
  createGroupEnrollment: (enrollment) => dispatch(createGroupEnrollment(enrollment)),
  fetchGroupEnrollments: () => dispatch(fetchGroupEnrollments()),
  fetchGroup: id => dispatch(fetchGroup(id)),
  fetchGroupEnrollment: (id) => dispatch(fetchGroupEnrollment(id))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps

)(GroupEnrollment);
