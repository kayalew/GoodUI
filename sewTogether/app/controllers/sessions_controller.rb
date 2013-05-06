class SessionsController < ApplicationController
	def new
	end
	
	def create
		user = User.find_by_user_name(params[:user_name])
		if user && user.authenticate(params[:password])
			session[:session_id] = user.id
			@current_user = current_user 
			redirect_to dashboard_static_pages_path, :notice => 'Welcome back, '+@current_user.user_name+'!'
		else
			redirect_to root_url, :notice => 'Could not log in: error message'
		end
	end
	def destroy
		@current_user = session[:session_id] = nil
		redirect_to root_url, :notice => 'Logged out!'
	end
end
