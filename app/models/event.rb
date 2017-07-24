# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  group_id    :integer          not null
#  user_id     :integer          not null
#  name        :string           not null
#  description :text             not null
#  start_time  :date             not null
#  end_time    :date             not null
#  location    :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Event < ApplicationRecord
  validates :group_id, :user_id, :name, :description, :start_time, :end_time,
            :location, presence: true
end
