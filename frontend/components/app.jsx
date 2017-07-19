
import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SessionFormContainer from '../components/session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>WHO WILL YOU MEET?</h1>
      </Link>
    </header>
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer}/>
      <AuthRoute path="/signup" component={SessionFormContainer}/>
    </Switch>



  </div>
);

export default App;
