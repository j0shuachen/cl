class CreateEventEnrollments < ActiveRecord::Migration[5.1]
  def change
    create_table :event_enrollments do |t|
      t.integer :user_id, null: false
      t.integer :event_id, null: false
      t.timestamps
    end
    add_index :event_enrollments, :user_id
    add_index :event_enrollments, :event_id
  end
end
