json.extract! event, :id, :image_url, :organizer, :group_id, :user_id, :name, :description, :location, :created_at, :updated_at, :start_time, :end_time

json.rsvpp do
  json.array! event.members
end

json.membersnum event.members.length

json.rsvpph do
  event.members.each do |mem|
    json.set! mem.id do
      json.extract! mem, :id
    end
  end
end

json.random do
  json.array! event.members.shuffle.take(5)
end

json.news @news
