# == Schema Information
#
# Table name: public_profiles
#
#  id          :integer          not null, primary key
#  fname       :string
#  lname       :string
#  age         :integer
#  bdate       :date
#  location_id :integer
#  user_id     :integer          not null
#  bio         :text
#  photo       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class PublicProfileTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
