import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if(window.currentUser){
    const preloadedState = { session: { currentUser: window.currentUser}};
    store = configureStore(preloadedState);
    delete window.currentUser;
  }else{
    store=configureStore();
  }
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});

import {createEventEnrollment, deleteEventEnrollment, fetchEventEnrollment,  fetchEventEnrollments} from './util/event_enrollment_api_util';
import { signup, login, logout, fetchUser } from './util/session_api_util';
import {createGroup, fetchGroup, fetchGroups} from './util/group_api_util';
import {createEvent, fetchEvent, fetchEvents} from './util/event_api_util';
import {deleteGroupEnrollment, createGroupEnrollment, fetchGroupEnrollment, fetchGroupEnrollments } from './util/group_enrollment_api_util';
import {  } from './actions/group_enrollment_actions';
import {createGroupNew, fetchGroupNew, fetchGroupNews} from './util/group_news_api_util';


window.signup = signup;
window.login = login;
window.logout = logout;
window.createGroup = createGroup;
window.createGroupEnrollment = createGroupEnrollment;
window.fetchGroupEnrollment = fetchGroupEnrollment;
window.fetchGroupEnrollments = fetchGroupEnrollments;
window.deleteGroupEnrollment = deleteGroupEnrollment;
window.fetchGroup = fetchGroup;
window.fetchGroups = fetchGroups;
window.fetchEvents = fetchEvents;
window.fetchEvent = fetchEvent;
window.createEvent = createEvent;
window.createEventEnrollment = createEventEnrollment;
window.deleteEventEnrollment = deleteEventEnrollment;
window.fetchEventEnrollment = fetchEventEnrollment;
window.fetchEventEnrollments = fetchEventEnrollments;
window.fetchGroupNews = fetchGroupNews;
window.fetchGroupNew = fetchGroupNew;
window.createGroupNew = createGroupNew;
window.fetchUser = fetchUser;
