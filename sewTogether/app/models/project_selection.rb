class ProjectSelection < ActiveRecord::Base
  attr_accessible :project_id, :status, :user_id
  belongs_to :user
  belongs_to :project
  #Possible statuses "step0, step1, step2, ..." (up to max project.num_steps)
end
