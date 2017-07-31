# MeetUp Clone
CliqueUp is a MeetUp clone allowing users to create groups and events to interact with like-minded people!

## Heroku Link
https://cliqueup.herokuapp.com/#/

## Users
On the database side, users are stored in a table with columns for id, username, name, email, location, hashed password, created_at, update_at, and session token.

## Groups
Groups are stored in the database with columns for id, user_id, name, info, created_at, update_at, image_url, and, location.


## Events
Events are stored in a table in the database with id, name, description, location, group_id, image_url,  created_at, update_at, and user_id.

# Site Functionality

## Log in/ Signup
Sign up form allowing users to sign up with the site an log in. Upon successful sign in, users will be directed to the group index page.
![alt text](https://github.com/j0shuachen/MeetUp/blob/master/docs/screenshots/signup.png)

## Demo
Demo option which automatically signs user into a demo account

## Group Search Bar
Search bar feature that allows users to search through groups
![alt text](https://github.com/j0shuachen/MeetUp/blob/master/docs/screenshots/search.png)

## Create Group/Event Form
Allows users to create their own group or events within a group!
![alt text](https://github.com/j0shuachen/MeetUp/blob/master/docs/screenshots/createevent.png)

## Edit Group/Event Form
If a user is the creator of a group or event, a button will render to allow the user to update the group/event


## Picture uploads
Users can upload their own pictures for their groups/events. If no picture is provided, a default picture will be rendered instead
![alt text](https://github.com/j0shuachen/MeetUp/blob/master/docs/screenshots/uploadpic.png)

# Future Direction For Project
+ Add google maps api
+ Add calendar widget
+ Create profiles for users
