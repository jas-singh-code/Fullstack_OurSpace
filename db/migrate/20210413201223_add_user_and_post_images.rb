class AddUserAndPostImages < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :profile_pic, :string
    add_column :posts, :post_img, :string
  end
end
