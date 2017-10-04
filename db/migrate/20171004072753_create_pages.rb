class CreatePages < ActiveRecord::Migration[5.1]
  def change
    create_table :pages do |t|
      t.string :title
      t.string :body
      t.integer :group_id
      t.integer :author_id
      t.timestamps
    end
    add_index :pages, :group_id
    add_index :pages, :author_id
  end
end
