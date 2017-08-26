
json.rsvp do
@event_enrollments.each do |enrollment|
  json.set! enrollment.id do
    json.extract! enrollment, :id, :group_id, :user_id, :event_id
end
end
end

json.rsvpd do
  @users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :username, :name, :email
    end
  end
end 
