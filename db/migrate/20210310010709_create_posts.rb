class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :titel
      t.string :message
      t.integer :poster_id
      t.integer :liker_id
      t.integer :comment_id

      t.timestamps
    end
  end
end
