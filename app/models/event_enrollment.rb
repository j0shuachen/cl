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
end
