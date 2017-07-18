class CreatePublicProfiles < ActiveRecord::Migration[5.1]
  def change
    create_table :public_profiles do |t|
      t.string  :fname
      t.string  :lname
      t.integer :age
      t.date    :bdate
      t.integer :location_id
      t.integer :user_id, null: false
      t.text :bio
      t.string :photo
      t.integer :tag_id
      t.timestamps
    end
    add_index :public_profiles, :user_id, unique: true
  end
end
