class ProjectSelection < ActiveRecord::Base
  attr_accessible :current_step, :project_id, :user_id
  belongs_to :user
  belongs_to :project
  #if completed, current_step = num_steps

end
