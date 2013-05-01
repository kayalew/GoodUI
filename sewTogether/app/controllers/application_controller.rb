class ApplicationController < ActionController::Base
	protect_from_forgery
	
	private
<<<<<<< HEAD
		def current_user
			@current_user ||= session[:user_id] && User.find_by_id(session[:user_id])
		end
		helper_method :current_user
	
=======
	def current_user
		@current_user ||= session[:user_id] && User.find_by_id(session[:user_id])
	end
	helper_method :current_user
>>>>>>> 553c98555a4732ea21b6169a0eb1fbdb9ac073a5
end
