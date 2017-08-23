export const fetchGroupEnrollments = (group_id) => (
  $.ajax({
    method: "GET",
    url: '/api/group_enrollments',
    dataType: 'JSON',
    data: {
      group_enrollment: {
        group_id: group_id
      }
    }
  })
);

export const fetchGroupEnrollment = id => (
  $.ajax({
    method: "GET",
    url: `/api/group_enrollments/${id}`,
    data: id
  })
);

export const createGroupEnrollment = data => (
  $.ajax({
    method: "POST",
    url: "api/group_enrollments",
    data
  })
);

// export const deleteGroupEnrollment = (id) => (
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

export const deleteGroupEnrollment = (enroll) => (
  $.ajax({
    method: 'DELETE',
    url: `api/group_enrollments/${enroll.id}`,
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
