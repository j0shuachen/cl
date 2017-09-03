class AddNewsNumber < ActiveRecord::Migration[5.1]
  def change
    add_column :group_news, :oid, :integer
  end
end
