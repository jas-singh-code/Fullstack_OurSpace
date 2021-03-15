class RemoveImgandVideo < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :image_url
    remove_column :posts, :video_url
    rename_column :comments, :commenter_id, :author_id
    add_column :comments, :likes, :text, array: true, default: []
    add_column :likes, :comment_id, :integer
    add_column :friends, :pending, :boolean
    rename_column :friends, :friend_id, :sender_id
    rename_column :friends, :assoicated_friend_id, :receiver_id
  end
end
