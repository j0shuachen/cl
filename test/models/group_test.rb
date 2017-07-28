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

require 'test_helper'

class GroupTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
