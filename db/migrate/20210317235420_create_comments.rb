class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :body
      t.integer :author_id
      t.integer :post_id

      t.timestamps
    end
    add_index :comments, :author_id
    add_index :comments, :post_id
  end
end
