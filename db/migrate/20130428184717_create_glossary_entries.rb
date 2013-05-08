class CreateGlossaryEntries < ActiveRecord::Migration
  def change
    create_table :glossary_entries do |t|
      t.string :name
      t.text :type

      t.timestamps
    end
  end
end
