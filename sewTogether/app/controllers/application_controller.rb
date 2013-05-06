class ApplicationController < ActionController::Base
	protect_from_forgery
	
	private
	
	def current_user
		@current_user ||= User.find_by_id(session[:session_id]) if session[:session_id]
	end
	helper_method :current_user
end
