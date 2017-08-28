export const fetchGroupNews = (group_id) => (
  $.ajax({
    method: "GET",
    url: '/api/group_news',
    dataType: 'JSON',
    data: {
      group_news: {
        group_id: group_id
      }
    }
  })
);

export const fetchGroupNew = id => (
  $.ajax({
    method: "GET",
    url: `/api/group_news/${id}`,
    data: id
  })
);

export const createGroupNew = data => (
  $.ajax({
    method: "POST",
    url: "api/group_news",
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
