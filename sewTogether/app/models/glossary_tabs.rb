class GlossaryTabs < ActiveRecord::Base
  attr_accessible :glossary_entry_id, :tab_contents, :tab_type
  belongs_to :glossary_entry
end
