class AddLocationToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :location, :string, null: false
  end
end
