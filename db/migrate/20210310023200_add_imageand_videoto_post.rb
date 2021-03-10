class AddImageandVideotoPost < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :image_url, :string
    add_column :posts, :video_url, :string
  end
end
