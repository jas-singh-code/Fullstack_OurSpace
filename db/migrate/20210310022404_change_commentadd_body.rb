class ChangeCommentaddBody < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :body, :string
  end
end
