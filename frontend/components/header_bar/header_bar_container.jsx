import { connect } from 'react-redux';

import { login, logout, signup} from '../../actions/session_actions';
import HeaderBar2 from './header_bar2';

const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: ()=> dispatch(logout())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(HeaderBar2);
