class AddGroupNewsTypo < ActiveRecord::Migration[5.1]
  def change
    add_column :group_news, :typo, :string
  end
end
