class CreateGroups < ActiveRecord::Migration[5.1]
  def change
    create_table :groups do |t|
      t.integer :user_id, null: false
      t.string  :name, null: false
      t.text    :info, null: false
      t.integer :location_id, null: false
      t.timestamps
    end
    add_index :groups, :user_id
    add_index :groups, :name
    add_index :groups, :location_id
  end
end
