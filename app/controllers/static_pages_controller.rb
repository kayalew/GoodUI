class StaticPagesController < ApplicationController
  def home
	@user = User.new
  end
  def dashboard
	if flash[:notice] == nil
		flash[:notice] = current_user.user_name
	end
  end
  def project_search
  end
  def sewing_help
  end
  def lounge
  end
  def about
  end
end
