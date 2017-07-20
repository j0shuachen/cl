import { connect } from 'react-redux';

import { login, logout, signup} from '../../actions/session_actions';
import SignUpFormModal from './sign_up_form';

const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
    modalIsOpen: false
  };
};

const mapDispatchToProps = (dispatch, {location}) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)), formType

  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(SignUpFormModal);
