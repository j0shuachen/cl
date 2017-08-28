class GroupNews < ApplicationRecord
  belongs_to :group,
  primary_key: :id,
  foreign_key: :group_id

end
