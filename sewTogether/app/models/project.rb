class Project < ActiveRecord::Base
  attr_accessible :name, :num_steps
  has_many :comments
  has_many :users, :through => :project_selections
end
