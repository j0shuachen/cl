export const fetchGroups = data => (
  $.ajax({
    method: "GET",
    url: '/api/groups',
    data
  })
);

export const fetchGroup = id => (
  $.ajax({
    method: "GET",
    url: `/api/groups/${id}`
  })
);


export const createGroup = data => (
  $.ajax({
    method: "POST",
    url: "api/groups",
    data
  })
);

export const updateGroup = group =>(
  $.ajax({
    method: 'PATCH',
    url: `/api/groups/${group.id}`,
    data: group
  })
);
