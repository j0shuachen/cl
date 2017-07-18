class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.integer :group_id, null: false
      t.integer :user_id, null: false
      t.string :name, null: false
      t.text :description, null: false
      t.date :start_time, null: false
      t.date :end_time, null: false
      t.integer :location_id, null: false
      t.timestamps
    end
    add_index :events, :group_id
    add_index :events, :user_id
    add_index :events, :location_id
    add_index :events, :name
  end
end
