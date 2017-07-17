{
  currentUser: {
    id: 1,
    username: "meetupmod"
  },

  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createGroup: {errors: []},
    createGroupEvent: {errors: []}
  },

  groups: {
    1: {
      groupName: "bay area hiking",
      tags: {
        1:{
          id: 1,
          name: "sports"
        },
        2:{
          id: 2,
          name: "social"
        }
      }
      groupEvents:{
        1: {
          eventId: 1,
          eventTitle: "mission peak",
          description: "day hike"
          startDate: "7/21/17 6:00am"
          endDate: "7/21/17 3:00pm"
          comments: {
            1:{
              id: 1,
              userId: 102,
              userName: "Johhnyboy",
              body: "gonna be fun!"
            },
            2:{
              id: 2,
              userId: 98,
              username: "kidblue",
              body: "I'll be there!"  
            }
          }
        }
      }
    }
  }












}
