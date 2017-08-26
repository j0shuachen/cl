@events.each do |event|
  json.set! event.id do
    json.extract! event, :id, :name, :group_id, :organizer, :image_url
    json.rsvp do
      # json.array! event.members
      event.members.each do |member|
        json.set! member.id do
          json.extract! member, :id, :name, :email
        end
      end
    end
  end
end
