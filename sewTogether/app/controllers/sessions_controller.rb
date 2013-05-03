class SessionsController < ApplicationController
	def new
	end
	
	def create
		user = User.find_by_email(params[:email])
		if user && User.authenticate(params[:user_name], params[:password])
			session[:current_user_id] = user.id
			redirect_to root_url
		else
			flash.now.alert = 'Invalid email or password'
			render 'new'
		end
	end
	def destroy
		@_current_user = session[:current_user_id] = nil
		redirect_to root_url
	end
end
