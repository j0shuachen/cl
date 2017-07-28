json.array! @group_enrollments do |enrollment|
  json.partial! 'api/group_enrollments/group_enrollment', group: enrollment
end
