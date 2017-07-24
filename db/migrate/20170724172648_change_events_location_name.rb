class ChangeEventsLocationName < ActiveRecord::Migration[5.1]
  def change
    rename_column :events, :location_id, :location

  end
end
