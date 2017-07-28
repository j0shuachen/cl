# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  group_id    :integer          not null
#  user_id     :integer          not null
#  name        :string           not null
#  description :text             not null
#  location    :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  image_url   :string           default("http://res.cloudinary.com/dxeyfggji/image/upload/v1501260586/default-event-image_twehlf.gif")
#

class Event < ApplicationRecord
  validates :group_id, :user_id, :name, :description,
            :location, presence: true


  belongs_to :group, optional: true,
  primary_key: :id,
  foreign_key: :group_id,
  class_name: :Group

  belongs_to :organizer, optional: true,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :event_enrollments,
  primary_key: :id,
  foreign_key: :event_id,
  class_name: :EventEnrollment

  has_many :members,
  through: :event_enrollments,
  source: :user

  def organizer_username
    @event.organizer.username
  end

end
