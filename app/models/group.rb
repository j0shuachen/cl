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
#

class Group < ApplicationRecord
  validates :user_id, :name, :info, :location, presence: true




end
