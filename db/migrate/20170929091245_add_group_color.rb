class AddGroupColor < ActiveRecord::Migration[5.1]
  def change
    add_column :groups, :color, :string, :default => '#FFFFFF'
  end
end
