import { connect } from 'react-redux';

import { login, logout, signup} from '../../actions/session_actions';
import HeaderBar3 from './header_bar3';

const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
    currentUser: session.currentUser,
    modalIsOpen: false
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: ()=> dispatch(logout()),
  login: user => dispatch(login(user))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(HeaderBar3);
