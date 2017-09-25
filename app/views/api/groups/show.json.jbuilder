json.partial! '/api/groups/group', group: @group

json.creator @creator
json.number @numembers
# json.events do
#   json.array! @group.events
# end

# json.events do
#   @group.events.each do |event|
#     json.set! event.id do
#       json.extract! event, :id, :name, :group_id, :organizer, :image_url
#       json.rsvp do
#         event.members.each do |member|
#           json.set! member.id do
#             json.extract! member, :id, :name, :email
#           end
#         end
#       end
#     end
#   end
# end

json.eventboth do
  json.array! @eventboth.each do |e|
    json.extract! e, :id, :name, :group_id, :organizer, :image_url, :description, :location, :start_time, :end_time
    json.rsvp do
      e.members.each do |m|
        json.set! m.id do
          json.extract! m, :id, :name, :email, :image_url
        end
      end
      json.rando e.members.shuffle.take(5)
      json.num e.members.length
    end
  end
end
json.eventeither do
  json.array! @eventeither.each do |e|
    json.extract! e, :id, :name, :group_id, :organizer, :image_url, :description, :location, :start_time, :end_time
    json.rsvp do
      e.members.each do |m|
        json.set! m.id do
          json.extract! m, :id, :name, :email, :image_url
        end
      end
      json.rando e.members.shuffle.take(5)
      json.num e.members.length
    end
  end
end

json.eventnot do
  json.array! @eventd.each do |e|
    json.extract! e, :id, :name, :group_id, :organizer, :image_url, :description, :location, :start_time, :end_time
    json.rsvp do
      e.members.each do |m|
        json.set! m.id do
          json.extract! m, :id, :name, :email, :image_url
        end
      end
      json.rando e.members.shuffle.take(5)
      json.num e.members.length
    end
  end
end

json.events do
  json.array! @events.each do |event|
    # json.set! event.id do
      json.extract! event, :id, :name, :group_id, :organizer, :image_url, :description, :location, :start_time, :end_time
        json.rsvp do
          event.members.each do |member|
            json.set! member.id do
            json.extract! member, :id, :name, :email, :image_url
          # end
        end
      end
      json.num event.members.length
    end
  end
end

# json.members do
#   json.array! @group.members
# end
#
# json.enrollments do
#   json.array! @group.group_enrollments
# end



json.members do
  json.array! @members
end

json.randos @randos

json.enrollments do
  json.array! @enrollments
end

json.user @user

json.news do
  json.array! @groo.each do |ne|
    json.extract! ne, :id, :news, :user_id, :oid, :typo
    json.date ne.created_at.strftime('%b %e, %Y %T')
    json.use User.find(ne.user_id)
  end
  # json.date @
end
# json.members do
#   json.array! @group.members, partial: 'api/users/user', as: :member
# end

json.pastevents do
  json.array! @pastevents.each do |e|
    json.extract! e, :id, :name, :group_id, :organizer, :image_url, :description, :location, :start_time, :end_time
    json.rsvp do
      e.members.each do |m|
        json.set! m.id do
          json.extract! m, :id, :name, :email, :image_url
        end
      end
      json.rando e.members.shuffle.take(5)
      json.num e.members.length
    end
  end
end

json.upcomingevents do
  json.array! @upcomingevents.each do |e|
    json.extract! e, :id, :name, :group_id, :organizer, :image_url, :description, :location, :start_time, :end_time
    json.rsvp do
      e.members.each do |m|
        json.set! m.id do
          json.extract! m, :id, :name, :email, :image_url
        end
      end
      json.rando e.members.shuffle.take(5)
      json.num e.members.length
    end
  end
end
