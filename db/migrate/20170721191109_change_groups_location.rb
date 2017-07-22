class ChangeGroupsLocation < ActiveRecord::Migration[5.1]
  def change
    change_column :groups, :location_id, :string
  end
end
