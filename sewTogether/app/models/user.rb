class User < ActiveRecord::Base
  attr_accessible :email, :password, :password_confirmation, :user_name
  has_secure_password
  has_many :comments
  validates_presence_of :email, :on => :create
  validates_presence_of :password, :on => :create
  validates_presence_of :user_name, :on => :create
end
