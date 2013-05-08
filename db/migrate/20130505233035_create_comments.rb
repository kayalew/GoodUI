class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :text
      t.integer :user_id
      t.integer :project_id
      t.string :part

      t.timestamps
    end
  end
end
