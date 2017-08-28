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
#  image_url  :string           default("https://res.cloudinary.com/dxeyfggji/image/upload/v1501260586/default-event-image_twehlf.gif")
#

class Group < ApplicationRecord
  validates :user_id, :name, :info, :location, presence: true

  belongs_to :mod, optional: true,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  has_many :group_enrollments, dependent: :destroy,
  primary_key: :id,
  foreign_key: :group_id,
  class_name: :GroupEnrollment

  has_many :members, dependent: :destroy,
  through: :group_enrollments,
  source: :user

  has_many :events, dependent: :destroy,
  primary_key: :id,
  foreign_key: :group_id,
  class_name: :Event

  has_many :news, dependent: :destroy,
  primary_key: :id,
  foreign_key: :group_id,
  class_name: :GroupNews

def events_hash
  events_hash = {}
  events.each { |event| events_hash[event.id] = event }
  events_hash
end

end
