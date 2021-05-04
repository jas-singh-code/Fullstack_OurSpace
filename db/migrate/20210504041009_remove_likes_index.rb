class RemoveLikesIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :likes, name: "index_likes_on_likeable_type_and_likeable_id"
  end
end
