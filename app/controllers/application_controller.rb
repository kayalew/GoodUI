class ApplicationController < ActionController::Base
	protect_from_forgery
	
	private
	
	def current_user
		@current_user ||= User.find_by_id(session[:session_id]) if session[:session_id]
	end
	helper_method :current_user
	
	def authenticate_user
		current_user.authenticate(params[:password])
	end
	helper_method :authenticate_user
	
	before_filter :authenticate_user
	skip_before_filter :authenticate_user, :only => [:home, :dashboard, :project_search, :sewing_help, :lounge, :about, :create]
end
