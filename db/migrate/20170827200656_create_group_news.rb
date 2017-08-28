class CreateGroupNews < ActiveRecord::Migration[5.1]
  def change
    create_table :group_news do |t|
      t.integer :group_id
      t.text :news
      t.timestamps
    end
    add_index :group_news, :news
  end
end
