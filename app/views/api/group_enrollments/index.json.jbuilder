json.array! @group_enrollments do |enrollment|
  json.partial! 'group_enrollments/group_enrollment', group: enrollment
end
