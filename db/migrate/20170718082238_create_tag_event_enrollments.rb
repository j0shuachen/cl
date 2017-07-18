class CreateTagEventEnrollments < ActiveRecord::Migration[5.1]
  def change
    create_table :tag_event_enrollments do |t|
      t.integer :tag_id, null: false
      t.integer :event_id, null: false
      t.timestamps
    end
    add_index :tag_event_enrollments, :tag_id
    add_index :tag_event_enrollments, :event_id
  end
end
