class Project < ActiveRecord::Base
  attr_accessible :name, :num_steps
  has_many :comments
  has_many :project_selections
  has_many :users, :through => :project_selections
  #TODO: if steps moves to db count
  #them instead of having num_steps
end
