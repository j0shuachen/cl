json.extract! event, :id, :image_url, :organizer, :group_id, :user_id, :name, :description, :location, :created_at, :updated_at, :start_time, :end_time

json.rsvpp do
  json.array! event.members
end

json.random do
  json.array! event.members.shuffle.take(8)
end
