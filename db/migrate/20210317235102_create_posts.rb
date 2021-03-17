class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.text :message
      t.integer :poster_id
      t.integer :wall_id

      t.timestamps
    end
    add_index :posts, :poster_id
    add_index :posts, :wall_id
  end
end
