class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :last_name
      t.string :first_name
      t.integer :age
      t.text :gender
      t.string :location
      t.string :occupation
      t.string :email
      t.string :password_digest
      t.string :session_token
    end
    add_index :users, :email, unique: true
    add_index :users, :session_token
    add_index :users, :password_digest
  end
end
