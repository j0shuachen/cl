export const fetchGroupEnrollments = data => (
  $.ajax({
    method: "GET",
    url: '/api/group_enrollments',
    data
  })
);

export const fetchGroupEnrollment = id => (
  $.ajax({
    method: "GET",
    url: `/api/group_enrollments/${id}`
  })
);

export const createGroupEnrollment = data => (
  $.ajax({
    method: "POST",
    url: "api/group_enrollments",
    data
  })
);

export const deleteGroupEnrollment = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/group_enrollments/${id}`
  })
);
