# users
id                  int     not null, primary key
username            string  not null, index, unique
email               string  not null, index, unique
name                string  not null
location            string  not null
password_digest     string  not null
session_token       string  not null, index, unique

#publicProfile
id                  int not null, primary key
fname               string  not null
lname               string  not null
age                 int     not null
bdate               date    not null

# groupTags
id                  int   not null, primary key
group_id            int   not null
tag_id              int   not null

# tags
tag_id          int     not null, primary key
tag_name        string  

# groupEnrollments
group_enrollments_id  int  not null, primary key
user_id               int
group_id              int

# group
id            int     not null, primary key
mod_id        int     not null
group_name    string  not null
group_info    text    not null
location      string  not null

# comments
id            int     not null, primary key
user_id       int     not null  
body          text    not null
event_id      int     not null
group_id      int     not null

# events
id            int     not null, primary key
group_id      int     not null
creator_id    int     not null
name          string  not null
start         date    not null
end           date    not null
description   text    not null
location      int     not null

# eventEnrollment
id          int     not null, primary key
user_id     int     not null
event_id    int     not null

# locationGroups
id            int     not null, primary key
group_id      int     not null
location_id   int     not null

# location
id                 int     not null, primary key
name               string  not null
state_province     string  not null
country            string  not null
