class Page < ApplicationRecord
  validates :title, :body, :group_id, :author_id, presence: true

  belongs_to :group,
  primary_key: :id,
  foreign_key: :group_id,
  class_name: :Group

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User

end
