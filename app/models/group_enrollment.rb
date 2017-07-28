# == Schema Information
#
# Table name: group_enrollments
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  group_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class GroupEnrollment < ApplicationRecord
  validates :user_id, :group_id, presence: true

  belongs_to :user, optional: true,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :group, optional: true,
    primary_key: :id,
    foreign_key: :group_id,
    class_name: :Group



end
