class ChangePost < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :liker_id
    remove_column :posts, :comment_id
    rename_column :posts, :titel, :title
  end
end
