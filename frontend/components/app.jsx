
import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import GroupUpdateContainer from '../components/groups/group_update_container';
import GroupForm from '../components/groups/group_form_container';
import GroupIndex from '../components/groups/group_index_container';
import LogInFormContainer from '../components/session_form/log_in_form_container';
import SignUpFormContainer from '../components/session_form/sign_up_form_container';
import HeaderBarContainer from '../components/header_bar/header_bar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Dummy from './dummy';
import EventShowContainer from '../components/groups/event_show_container';
import EventIndex from '../components/groups/events_index_container';
import GroupShowContainer from "./groups/group_show_container";
import EventFormContainer from "./events/event_form_container";
import UpdateEventContainer from '../components/events/update_event_container';
const App = () => (
  <div>
    <header>
      <nav>
        
        <HeaderBarContainer/>
        </nav>
    </header>
    <Switch>
      <Route exact path="/" component={Dummy}/>
        <Route exact path="/groups/:groupId/events/:eventId" component={EventShowContainer}/>

        <ProtectedRoute exact path="/groups/:id/create/event" component={EventFormContainer}/>
          <ProtectedRoute exact path="/groups/:groupId/events/:eventId/update" component={UpdateEventContainer}/>
          <ProtectedRoute exact path="/groups/:groupId/update" component={GroupUpdateContainer}/>
      <AuthRoute path="/login" component={LogInFormContainer}/>
      <AuthRoute path="/signup" component={SignUpFormContainer}/>
      <Route path="/groups/:groupId" component={GroupShowContainer}/>
      <Route path="/groups" component={GroupIndex}/>
        <Route path="/events" component={EventIndex}/>
    <ProtectedRoute exact path="/create/group" component={GroupForm}/>

    </Switch>

    <footer>
      <div className="footertop">
        <Link to="/create/group" className="footercreate">Start a MeetUp Group</Link>
        <Link to="/login" className="footerlogin">Log in</Link>

      </div>
      <div className="foot">
      <Link to="/help" className= "l">Help</Link>
      <Link to="/about" className= "l">About Us</Link>
      <Link to="/pro" className= "l">MeetUp Pro</Link>
      <Link to="/jobs" className= "l">Jobs</Link>
      <Link to="/apps" className= "l">Apps</Link>
      <Link to="/api" className= "l">Api</Link>
      <Link to="/topics" className= "l">Topics</Link>
      <Link to="/cities" className= "l">Cities</Link>
      <Link to="/blog" className= "l">Blog</Link>
      <Link to="/techblog" className= "l">Tech Blog</Link>
      <Link to="/madeincali" className= "l">Made in SF</Link>
      </div>
      <div className="footcopy">
        <span className= "l"> ©2017 MeetUp</span>
        <Link to="/privacy" className= "l">Privacy</Link>
        <Link to="/terms" className= "l">Terms</Link>
      </div>
    </footer>




  </div>
);

export default App;
