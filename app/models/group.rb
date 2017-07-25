# == Schema Information
#
# Table name: groups
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  name       :string           not null
#  info       :text             not null
#  location   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Group < ApplicationRecord
  validates :user_id, :name, :info, :location, presence: true

  belongs_to :mod,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  has_many :group_enrollments,
  primary_key: :id,
  foreign_key: :group_id,
  class_name: :GroupEnrollment

  has_many :members,
  through: :group_enrollments,
  source: :user

  has_many :events,
  primary_key: :id,
  foreign_key: :group_id,
  class_name: :Event

def events_hash
  events_hash = {}
  events.each { |event| events_hash[event.id] = event }
  events_hash
end

end
