class CreateSponsors < ActiveRecord::Migration[5.1]
  def change
    create_table :sponsors do |t|
      t.string :name
      t.string :contribution
      t.integer :group_id
      t.string :image_url
      t.timestamps
    end
    add_index :sponsors, :group_id
  end
end
