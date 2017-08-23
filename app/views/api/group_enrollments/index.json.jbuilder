# json.array! @group_enrollments do |enrollment|
#   json.partial! 'api/group_enrollments/group_enrollment', group: enrollment
# end

# json.enrolls do
# @group_enrollments.each do |enrollment|
#   json.set! enrollment.id do
#     json.extract! enrollment, :id, :user_id, :group_id
#   end
# end
# end
#
json.members do
@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :name, :email
  end
end
end
json.enrolls do
@group_enrollments.each do |enrollment|
  json.set! enrollment.id do
    json.extract! enrollment, :id, :user_id, :group_id
  end
end
end
# json.enrolls do
#   json.array! @group_enrollments
# end

# json.members do
# @users.each do |user|
#   json.set! user.id do
#     json.extract! user, :id, :username, :name, :email
#   end
# end
# end

# json.members do
#   json.array! @users
# end
