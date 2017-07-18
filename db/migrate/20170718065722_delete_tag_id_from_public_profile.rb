class DeleteTagIdFromPublicProfile < ActiveRecord::Migration[5.1]
  def change
    remove_column :public_profiles, :tag_id
  end
end
