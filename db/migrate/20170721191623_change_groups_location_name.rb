class ChangeGroupsLocationName < ActiveRecord::Migration[5.1]
  def change
    rename_column :groups, :location_id, :location
  end
end
