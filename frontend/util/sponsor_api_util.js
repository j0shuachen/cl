export const fetchSponsors = (sponsor_id) => (
  $.ajax({
    method: "GET",
    url: '/api/sponsors',
    dataType: 'JSON',
    data: {
      sponsor: {
        sponsor_id: sponsor_id
      }
    }
  })
);

export const fetchSponsor = id => (
  $.ajax({
    method: "GET",
    url: `/api/sponsors/${id}`,
    data: id
  })
);

export const createSponsor = data => (
  $.ajax({
    method: "POST",
    url: "api/sponsors",
    data
  })
);


export const deleteSponsor = (sponsor) => (
  $.ajax({
    method: 'DELETE',
    url: `api/sponsors/${sponsor.id}`,
    dataType: 'JSON',
    data: sponsor

  })
);

export const updateSponsor = (sponsor) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/events/${sponsor.id}`,
    data: {sponsor}

  })
);
