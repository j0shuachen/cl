import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import GroupsReducer from './groups_reducers';
import EventsReducer from './events_reducer';
import GroupEnrollmentReducer from './group_enrollment_reducer';
import EventEnrollmentReducer from './event_enrollment_reducer';
import SponsorReducer from './sponsor_reducer';
const RootReducer = combineReducers({
  session: SessionReducer,
  groups: GroupsReducer,
  events: EventsReducer,
  group_enrollments: GroupEnrollmentReducer,
  event_enrollments: EventEnrollmentReducer,
  sponsors: SponsorReducer

});


export default RootReducer;
