class Comment < ApplicationRecord
  validates :body, :user_id, :group_id, :event_id, presence: true
   

end
