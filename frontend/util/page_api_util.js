export const fetchPages = (page_id) => (
  $.ajax({
    method: "GET",
    url: '/api/pages',
    dataType: 'JSON',
    data: {
      page: {
        page_id: page_id
      }
    }
  })
);

export const fetchPage = id => (
  $.ajax({
    method: "GET",
    url: `/api/pages/${id}`,
    data: id
  })
);

export const createPage = data => (
  $.ajax({
    method: "POST",
    url: "api/pages",
    data
  })
);


export const deletePage = (page) => (
  $.ajax({
    method: 'DELETE',
    url: `api/pages/${page.id}`,
    dataType: 'JSON',
    data: page

  })
);

export const updatePage = (page) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/events/${event.id}`,
    data: {event}

  })
);
