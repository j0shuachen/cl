class CreateTagGroupEnrollments < ActiveRecord::Migration[5.1]
  def change
    create_table :tag_group_enrollments do |t|
      t.integer :tag_id
      t.integer :group_id
      t.timestamps
    end
    add_index :tag_group_enrollments, :tag_id
    add_index :tag_group_enrollments, :group_id
  end
end
