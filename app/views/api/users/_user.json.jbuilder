# json.user do
#   json.id user.id
#   json.username user.username
#   json.name user.name
#   json.email user.email
#
# end
json.extract! user, :id, :username, :name, :email, :location, :image_url, :created_at
