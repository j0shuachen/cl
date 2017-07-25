# == Schema Information
#
# Table name: event_enrollments
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  event_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class EventEnrollment < ApplicationRecord

  validates :user_id, :event_id, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id


  belongs_to :event,
  primary_key: :id,
  foreign_key: :event_id
end
