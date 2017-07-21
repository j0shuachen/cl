# == Schema Information
#
# Table name: tag_event_enrollments
#
#  id         :integer          not null, primary key
#  tag_id     :integer          not null
#  event_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TagEventEnrollment < ApplicationRecord
end
