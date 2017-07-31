# json.array! @group_enrollments do |enrollment|
#   json.partial! 'api/group_enrollments/group_enrollment', group: enrollment
# end


@group_enrollments.each do |enrollment|
  json.set! enrollment.id do
    json.extract! enrollment, :id, :user_id, :group_id
  end
end
