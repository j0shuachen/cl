@events.each do |event|
  json.set! event.id do
    json.extract! event, :id, :name, :group_id, :organizer, :image_url
  end
end
