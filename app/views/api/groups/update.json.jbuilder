json.partial! '/api/groups/group', groupe: @group


json.events do
  json.array! @group.events
end
