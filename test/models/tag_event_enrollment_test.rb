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

require 'test_helper'

class TagEventEnrollmentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
