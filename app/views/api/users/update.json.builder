json.partial! './api/users/user', user: @user


json.usermems @user.groups

json.usermods @user.group_mod

json.eventswent @eventswent

json.eventrsvps @eventrsvps
