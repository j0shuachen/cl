export const fetchEvents = data => (
  $.ajax({
    method: "GET",
    url: '/api/events',
    data
  })
);

export const fetchEvent = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/events/${id}`
  })
);

export const createEvent =data => (
  $.ajax({
    method: "POST",
    url: "api/events",
    data
  })
);

export const updateEvent = event => (
  $.ajax({
    method: 'PATCH',
    url: `/api/events/${event.id}`,
    data: {event}

  })
);
