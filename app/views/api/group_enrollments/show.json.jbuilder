json.partial! '/api/group_enrollments/group_enrollment', group: @group_enrollment
# , user: @user
# json.partial! '/api/users/user', user: @user

# @group_enrollments.each do |enrollment|
#   json.set! enrollment.id do
#     json.extract! enrollment, :id, :user_id, :group_id
#   end
# end
#
# json.membe do
#   json.array! @group.members
# end
