class Sponsor < ApplicationRecord
  validates :name, :group_id, presence: true


  belongs_to :group,
  primary_key: :id,
  foreign_key: :group_id,
  class_name: :Group


end
