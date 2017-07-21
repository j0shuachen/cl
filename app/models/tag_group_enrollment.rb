# == Schema Information
#
# Table name: tag_group_enrollments
#
#  id         :integer          not null, primary key
#  tag_id     :integer
#  group_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TagGroupEnrollment < ApplicationRecord
end
