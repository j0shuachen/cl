class CreateGroupEnrollments < ActiveRecord::Migration[5.1]
  def change
    create_table :group_enrollments do |t|
      t.integer :user_id, null: false
      t.integer :group_id, null: false
      t.timestamps
    end
    add_index :group_enrollments, :user_id
    add_index :group_enrollments, :group_id
  end
end
