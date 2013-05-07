class Project < ActiveRecord::Base
  attr_accessible :name
  has_many :comments
  has_many :users, :through => :project_selections
end
