export const fetchEvents = data => (
  $.ajax({
    method: "GET",
    url: '/api/groups/events',
    data
  })
);

export const fetchEvent = (groupId, id) => (
  $.ajax({
    method: "GET",
    url: `/api/events/${id}`
  })
);

export const createEvent =data => (
  $.ajax({
    method: "POST",
    url: "api/events"
  })
);
