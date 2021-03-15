class AddColFriendsAndEmail < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :friends, :text, array:true, default: []
    add_column :users, :email, :string
    add_index :users, :email, unique: true
  end
end
