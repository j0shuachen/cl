users

id                  int     not null, primary key
username            string  not null, index, unique
email               string  not null, index, unique
fname               string  not null
lname               string  not null
age                 int     not null
bdate               date    not null
password_digest     string  not null
session_token       string  not null, index, unique

group tags
grouptagsid       int   not null, primary key
groupid           int   not null
tagid             int   not null

tags
tagid         int     not null, primary key
tagname       string  

group enrollments
groupenrollmentsid  int  not null, primary key
userid              int
groupid             int

group
id        int     not null, primary key
modid     int     not null
groupname string  not null
groupinfo text    not null
location  string  not null

comments
id        int     not null, primary key
userId    int     not null  
body      text    not null
eventid   int     not null

events
id          int     not null, primary key
groupid     int     not null
creatorid   int     not null
name        string  not null
start       date    not null
end         date    not null
description text    not null
location    string  not null

eventenrollment
id        int     not null, primary key
userid    int     not null
evenid    int     not null

locationgroups
id          int     not null, primary key
groupid     int     not null
locationid  int     not null

location
id                 int     not null, primary key
name               string  not null
state/province     string  not null
country            string  not null
