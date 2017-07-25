class PublicProfileLocation < ActiveRecord::Migration[5.1]
  def change
    change_column :public_profiles, :location_id, :string
    
  end
end
