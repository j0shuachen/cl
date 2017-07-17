API Endpoints


HTML API

Root
  GET / -loads React web app

JSON API

Users
  POST /api/users
  PATCH /api/users

Session
  POST /api/session
  DELETE /api/session

MeetUps
  GET /api/meetup -index/search page
  POST /api/meetup -create group
  GET /api/meetup/meetupname -goes to group page/can use meetup name instead of id
  PATCH /api/meetup/meetupname/edit
  DELETE /api/meetup/meetupname/delete

Events
  GET /api/meetup/meetupname/eventid -goes to group event
  POST /api/meetup/meetupname/eventid/create
  PATCH /api/meetup/meetupname/eventid/edit
  DELETE /api/meetup/meetupname/eventid/delete

Tags
  GET /api/tags -allows groups to be organized into categories and users to search    based on tags
  POST /api/meetup/meetupname/tags
  PATCH /api/meetup/meetupname/tags/edit
  DELETE /api/meetup/meetupname/tags/delete

  [ Members
    Sponsors
    Photos
    Pages/About
    Message Board
    Mailing List/Archive
    More ]

    Each of these sections will be nested in the meetups like events and have their own GET, POST, PATCH, and DELETE. I am currently unsure how much of each one will be fully built out. Will probably consult with Robert first.
