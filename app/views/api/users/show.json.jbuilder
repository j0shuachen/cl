json.partial! './api/users/user', user: @user


json.usermems @user.groups

json.usermods @user.group_mod

json.membergroups do
  json.array! @user.groups.each do |gr|
    json.extract! gr, :id, :user_id, :name, :info, :location, :mod, :image_url, :created_at, :updated_at
    json.enrollmentinfo gr.group_enrollments.where('user_id =?',@user.id)

  end
end
json.eventswent @eventswent
json.eventsdos @eventsdos
json.eventrsvps @eventrsvps


json.epoc @epoc
