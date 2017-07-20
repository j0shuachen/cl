
import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import LogInFormContainer from '../components/session_form/log_in_form_container';
import SignUpFormContainer from '../components/session_form/sign_up_form_container';
import HeaderBarContainer from '../components/header_bar/header_bar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Dummy from './dummy';

const App = () => (
  <div>
    <header>
      <nav>
        <div className="create-header">
          <Link to="/create" className="create-header-button">Create a Meetup</Link>
          <Link to="/app" className="get-app-button">Get the App</Link>
        </div>
        <div className="logo">
          <Link to="/" className="header-link"></Link>
        </div>
        <HeaderBarContainer/>
        </nav>
    </header>
    <Switch>
      <Route exact path="/" component={Dummy}/>
      <AuthRoute path="/login" component={LogInFormContainer}/>
      <AuthRoute path="/signup" component={SignUpFormContainer}/>
    </Switch>



  </div>
);

export default App;
