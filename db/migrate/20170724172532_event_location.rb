class EventLocation < ActiveRecord::Migration[5.1]
  def change
    change_column :events, :location_id, :string

  end
end
