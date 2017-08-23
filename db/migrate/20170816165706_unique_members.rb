class UniqueMembers < ActiveRecord::Migration[5.1]
  def change
    add_index :group_enrollments, [:user_id, :group_id], unique: true
  end
end
