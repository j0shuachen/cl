export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user
  })
);

export const signup = user => {
  // console.log(user);

  const req = $.ajax({
    method: 'POST',
    url: 'api/users',
    data: user
  });

  // console.log(req);

  return req;
};

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);

export const fetchUser = id =>(
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  })
);

export const updateUser = user => (
  $.ajax({
    method: "PATCH",
    url: `/api/users/${user.id}`,
    data: user
  })
);
