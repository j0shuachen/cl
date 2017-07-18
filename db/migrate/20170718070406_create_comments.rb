class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :user_id, null: false
      t.integer :group_id, null: false
      t.integer :event_id, null: false
      t.timestamps
    end
    add_index :comments, :user_id
    add_index :comments, :group_id
    add_index :comments, :event_id
  end
end
