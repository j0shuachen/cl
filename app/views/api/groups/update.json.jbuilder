json.partial! '/api/groups/group', group: @group


json.events do
  json.array! @group.events
end
