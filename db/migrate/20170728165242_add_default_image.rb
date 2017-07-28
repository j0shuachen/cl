class AddDefaultImage < ActiveRecord::Migration[5.1]
  def change
    change_column_default :groups, :image_url,"https://res.cloudinary.com/dxeyfggji/image/upload/v1501260586/default-event-image_twehlf.gif"
    change_column_default :events, :image_url, "https://res.cloudinary.com/dxeyfggji/image/upload/v1501260586/default-event-image_twehlf.gif"
  end
end
