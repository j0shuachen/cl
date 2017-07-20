
import React from 'react';
import { Link, withRouter} from 'react-router-dom';


const sessionLinks = () => (
  <div className="login-signup">
    <Link to="/login"
      className="sign-in-button">Login
    </Link>
    <Link to="/signup"
     className="sign-up-button">Signup
    </Link>
  </div>
);

const personalGreeting = (currentUser, logout) => (
  <div>
    <h1 className="header-name">Hi, {currentUser.username}!</h1>
    <Link to="/"className="header-button">Log Out
    </Link>
</div>
);

const HeaderBar2= ({ currentUser, logout})=>(

  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default HeaderBar2;
