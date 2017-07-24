import * as APIUtil from '../util/event_api_util';
export const RECEIVE_EVENT= "RECEIVE_EVENT";
export const RECEIVE_EVENTS = "RECEIVE_EVENTS";

export const receiveEvent = eventt =>({
    type: RECEIVE_EVENT,
    eventt
});

export const receiveEvents = events =>({
  type: RECEIVE_EVENTS,
  events
});

export const createEvent = eventt => dispatch =>(
  APIUtil.createEvent(eventt).then(evento => (
    dispatch(receiveEvent(evento))
  ))
);