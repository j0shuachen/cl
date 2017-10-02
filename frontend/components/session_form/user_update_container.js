import { connect } from 'react-redux';
import {selectGroup} from '../../reducers/selectors';

import { login, logout, signup, updateUser, fetchUser} from '../../actions/session_actions';
import updateUserForm from './update_user_form';

const mapStateToProps = (state, {match  }) => {
  // console.log(match);
  // console.log(state);
  // const groupId = parseInt(match.params.groupId);
  // const userId = parseInt(match.params.userId);
  // console.log(state);
  // const group = selectGroup(state, groupId);
  //
  // const user = selectGroup(state, match.params.userId);
  return {
    // loggedIn: Boolean(session.currentUser),
    // errors: session.errors
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, {location}) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)), formType,
    fetchUser: user => dispatch(fetchUser(user)),
    updateUser: user => dispatch(updateUser(user))
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(updateUserForm);
