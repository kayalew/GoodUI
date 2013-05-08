class StaticPagesController < ApplicationController
  def home
    if current_user == 'nil'
		@user = User.new
	else 
	    redirect_to dashboard_static_pages_path
    end		
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
