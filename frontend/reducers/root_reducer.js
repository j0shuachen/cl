import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import GroupsReducer from './groups_reducers';
import EventsReducer from './events_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  groups: GroupsReducer,
  events: EventsReducer

});


export default RootReducer;
