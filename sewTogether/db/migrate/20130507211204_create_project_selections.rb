class CreateProjectSelections < ActiveRecord::Migration
  def change
    create_table :project_selections do |t|
      t.integer :user_id
      t.integer :project_id
      t.string :status

      t.timestamps
    end
  end
end
