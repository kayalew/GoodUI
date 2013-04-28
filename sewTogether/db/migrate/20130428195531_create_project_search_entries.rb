class CreateProjectSearchEntries < ActiveRecord::Migration
  def change
    create_table :project_search_entries do |t|
      t.string :name
      t.string :cost
      t.integer :difficulty
      t.string :fabric

      t.timestamps
    end
  end
end
