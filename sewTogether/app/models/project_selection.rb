class ProjectSelection < ActiveRecord::Base
  attr_accessible :project_id, :status, :user_id
  belongs_to :user
  belongs_to :project
end
