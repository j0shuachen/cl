
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
import GroupMembersContainer from './groups/group_members_container';
import UserShowContainer from './users/users_container';
import About from './info/about';
import Resume from './info/resume';
import Privacy from './info/privacy';
import Terms from './info/terms';
// <Route exact path='/users/:userId' component={UserShowContainer}></Route>
import UserUpdateContainer from '../components/session_form/user_update_container';
import ProfileShowContainer from './users/profile_container';
const App = () => (

  <div>
    <header>
      <nav>

        <HeaderBarContainer/>
        </nav>
    </header>
    <Switch>
      <Route exact path="/" component={GroupIndex}/>
      <Route exact path="/about" component={About}/>
      <Route exact path='/resume' component={Resume}/>
      <Route exact path='/privacy' component={Privacy}/>
      <Route exact path = '/terms' component = {Terms}/>
      <Route exact path='/users/:userId' component ={ProfileShowContainer}/>
        <Route exact path="/groups/:groupId/events/:eventId" component={EventShowContainer}/>
        <Route exact path="/groups/:groupId/members" component={GroupMembersContainer}/>
          <Route exact path='/groups/:groupId/users/:userId/update' component={UserUpdateContainer}/>
          <Route exact path='/users/:userId/update' component={UserUpdateContainer}/>
        <Route exact path='/groups/:groupId/users/:userId' component={UserShowContainer}/>

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
        <a className='ll' href= 'https://www.linkedin.com/in/joshuaschen/'><img className='linkedinlogo' src='http://res.cloudinary.com/dxeyfggji/image/upload/v1507054510/In-White-41px-R_iuuifi.png'/> </a>

      <Link to="/about" className= "l">About</Link>
      <Link to='/resume' className='l'>Resume</Link>


      </div>
      <div className="footcopy">
        <span className= "l"> ©2017 cliqueUp</span>
        <Link to="/privacy" className= "l">Privacy</Link>
        <Link to="/terms" className= "l">Terms</Link>
      </div>
    </footer>




  </div>
);

export default App;
// <Link to="/madeincali" className= "l">Made in the Bay</Link>
// <Link to="/blog" className= "l">Blog</Link>
//       <Link to="/topics" className= "l">Topics</Link>
// <Link to="/contact" className= "l">Contact</Link>
// <Link to="/techblog" className= "l">Tech Blog</Link>
// <Link to="/jobs" className= "l">Jobs</Link>
// <Link to="/apps" className= "l">Apps</Link>
//   <Link to="/cities" className= "l">Cities</Link>


// <Link to="/pro" className= "l">MeetUp Pro</Link>
// <Link to="/api" className= "l">Api</Link>
