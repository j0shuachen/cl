class RenamePublicProfileLocation < ActiveRecord::Migration[5.1]
  def change
    rename_column :public_profiles, :location_id, :location
  end
end
