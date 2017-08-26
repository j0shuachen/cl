export const fetchEventEnrollments = (event_id) => (
  $.ajax({
    method: "GET",
    url: '/api/event_enrollments',
    dataType: 'JSON',
    data: {
      event_enrollment: {
        // group_id: group_id,
        event_id: event_id
      }
    }
  })
);

export const fetchEventEnrollment = id => (
  $.ajax({
    method: "GET",
    url: `/api/event_enrollments/${id}`,
    data: id
  })
);

export const createEventEnrollment = data => (
  $.ajax({
    method: "POST",
    url: "api/event_enrollments",
    data
  })
);

// export const deleteEventEnrollment = (id) => (
//   $.ajax({
//     method: 'DELETE',
//     url: `api/group_enrollments/${id.cur}`,
//     dataType: 'JSON',
//     data: {id}
//     // data: {
//     //   user: {
//     //     user_id: userId,
//     //     group_id: groupId
//     //   }
//     // }
//   })
// );

export const deleteEventEnrollment = (enroll) => (
  $.ajax({
    method: 'DELETE',
    url: `api/event_enrollments/${enroll.id}`,
    dataType: 'JSON',
    data: enroll
    // data: {
    //   user: {
    //     user_id: userId,
    //     group_id: groupId
    //   }
    // }
  })
);
