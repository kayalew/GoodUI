class UsersController < ApplicationController
	def new
		@user = User.new
	end
	def create
		if @user = User.new(params[:user])
			redirect_to root_url
		else
			render 'new'
		end
	end
end
