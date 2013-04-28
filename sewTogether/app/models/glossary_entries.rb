class GlossaryEntries < ActiveRecord::Base
  attr_accessible :name, :type
  has_many :glossary_tabs
end
