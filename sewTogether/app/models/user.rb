class User < ActiveRecord::Base
  attr_accessible :email, :password, :password_confirmation, :user_name
  has_secure_password
  validates_presence_of :password, :on => :create
  has_many :comments 
end
