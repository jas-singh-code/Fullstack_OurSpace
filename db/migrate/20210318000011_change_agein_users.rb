class ChangeAgeinUsers < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :age, :birthday
  end
end
