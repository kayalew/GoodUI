class CreateGlossaryTabs < ActiveRecord::Migration
  def change
    create_table :glossary_tabs do |t|
      t.integer :glossary_entry_id
      t.text :tab_type
      t.text :tab_contents

      t.timestamps
    end
  end
end
