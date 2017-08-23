json.partial! '/api/groups/group', group: @group


json.events do
  json.array! @group.events
end



json.members do
  json.array! @group.members
end

json.enrollments do
  json.array! @group.group_enrollments
end


# json.members do
#   json.array! @group.members, partial: 'api/users/user', as: :member
# end
