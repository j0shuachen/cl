# == Schema Information
#
# Table name: public_profiles
#
#  id         :integer          not null, primary key
#  fname      :string
#  lname      :string
#  age        :integer
#  bdate      :date
#  location   :string
#  user_id    :integer          not null
#  bio        :text
#  photo      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class PublicProfile < ApplicationRecord
  validates :user_id, presence: true
end
