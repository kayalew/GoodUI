class Comment < ActiveRecord::Base
  attr_accessible :part, :project_id, :text, :user_id
  belongs_to :user
  belongs_to :project
  validates :text, presence: true
  default_scope order('created_at ASC')
end
