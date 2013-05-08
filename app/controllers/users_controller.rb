class UsersController < ApplicationController
	def index
		@users = User.all
	end
	def show
	end
	def new
		@user = User.new
	end
	def create
		@user = User.new(params[:user])
		session[:session_id] = @user.id
		if @user.save
			session[:session_id] = @user.id
			@current_user = current_user 
			redirect_to dashboard_static_pages_path, :notice => 'Welcome, '+@current_user.user_name+'!'
		else
			redirect_to root_url, :notice => 'Did not create account. Make sure all entries are correct.'
		end
	end
	def destroy
		@user = nil
		redirect_to root_url, :notice => 'Account deleted: WE HOPE YOU COME BACK :-('		
	end
	
	before_filter :authenticate_user
	skip_before_filter :authenticate_user, :only => [:new, :create, :destroy]
end
