class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.references :likeable, polymorphic: true, null: false 
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :likes, [:likeable_id, :likeable_type, :user_id], unique: true
  end
end
