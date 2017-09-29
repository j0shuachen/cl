class AddGroupBanner < ActiveRecord::Migration[5.1]
  def change
    add_column :groups, :banner_url, :string
  end
end
