class ChangeLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.references :imageable, polymorphic: true
      t.timestamps
    end
  end
end
