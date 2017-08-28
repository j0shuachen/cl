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

json.events do
  json.array! @group.events.each do |event|
    # json.set! event.id do
      json.extract! event, :id, :name, :group_id, :organizer, :image_url, :description, :location
        json.rsvp do
          event.members.each do |member|
            json.set! member.id do
            json.extract! member, :id, :name, :email
          # end
        end
      end
      json.num event.members.length
    end
  end
end

json.members do
  json.array! @group.members
end

json.enrollments do
  json.array! @group.group_enrollments
end

json.user @user

json.news do
  json.array! @group.news
end
# json.members do
#   json.array! @group.members, partial: 'api/users/user', as: :member
# end
