class AddGroupBannerDefault < ActiveRecord::Migration[5.1]
  def change
    change_column :groups, :banner_url, :string, :default => 'default'
  end
end
