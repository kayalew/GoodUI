class ProjectsController < ApplicationController
  #for now building everything as a static page
  #http://stackoverflow.com/questions/10220280/undefined-local-variable-or-method-blog
  def index
	if (params[:part].present?)
		part = params[:part]
	else
		part = "overview"
	end
	render "index", :locals => {:part => part}
  end
  def step
  end
end
