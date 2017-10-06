import * as APIUtil from '../util/sponsor_api_util';
export const RECEIVE_SPONSOR= "RECEIVE_SPONSOR";
export const RECEIVE_SPONSORS = "RECEIVE_SPONSORS";
export const UPDATE_SPONSOR = "UPDATE_SPONSOR";
export const RECEIVE_ERRORS ="RECEIVE_ERRORS";
export const REMOVE_SPONSOR = 'REMOVE_SPONSOR';

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});


export const removeSponsor = sponsor => ({
  type: REMOVE_SPONSOR,
  sponsor
});

export const receiveSponsor = sponsor =>({
    type: RECEIVE_SPONSOR,
    sponsor
});

export const receiveSponsors = events =>({
  type: RECEIVE_SPONSORS,
  events
});

export const createSponsor = sponsor => dispatch =>(
  APIUtil.createSponsor(sponsor).then(resp => (
    dispatch(receiveSponsor(resp))
  ))
);

export const deleteSponsor = sponsor => dispatch => {
  return APIUtil.deleteSponsor(sponsor).then(
    resp => {
      dispatch(removeSponsor(resp));
    }
  );
};



export const fetchSPONSOR = id => dispatch =>(
  APIUtil.fetchEvent(id).then(sponsor =>(
    dispatch(receiveSponsor(sponsor))
  ))
);

export const fetchSponsors = filters => dispatch => (
  APIUtil.fetchEvents(filters).then(sponsors =>(dispatch(receiveSponsors(sponsors))
  ))
);

export const updateSponsor = data => dispatch => {
  return APIUtil.updateSponsor(data).then(
    resp => {
      dispatch(receiveSponsor(resp));
    }
  );
};
