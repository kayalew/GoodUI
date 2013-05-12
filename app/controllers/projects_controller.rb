#http://guides.rubyonrails.org/active_record_querying.html
#http://stackoverflow.com/questions/10220280/undefined-local-variable-or-method-blog
#http://stackoverflow.com/questions/4769483/rails-3-form-how-to-change-the-text-on-the-submit-button
#http://www.aptana.com/reference/html/api/CSS.element.Text%20Area.html
#http://stackoverflow.com/questions/195632/how-to-change-an-input-button-image-using-css
#http://guides.rubyonrails.org/form_helpers.html
#http://stackoverflow.com/questions/4528074/getting-a-substring-in-ruby-by-x-number-of-chars
#http://ruby-doc.org/core-2.0/String.html
#http://tryruby.org/levels/1/challenges/0 (for a ruby ide)
#http://stackoverflow.com/questions/5135852/rails-is-this-safe-taking-a-url-param-to-query-the-db whether to trust find_by_project_id
#http://stackoverflow.com/questions/5733222/rails-how-to-use-find-or-create
#http://stackoverflow.com/questions/49274/safe-integer-parsing-in-ruby string to integer
#http://stackoverflow.com/questions/1986386/check-if-value-exists-in-array-in-ruby for selection sidebar partial
class ProjectsController < ApplicationController
  # GET /projects
  # GET /projects.json
  def index
    @projects = Project.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @projects }
    end
  end

  # GET /projects/1
  # GET /projects/1.json
  def show
	current_user = User.new
	name = params[:name]
	if (params[:name].present? and Project.where("name = ?", name).exists?)
		@project = Project.find_by_name(name)
	else
		@project = Project.find(params[:id])
	end

	if (params[:part].present?)
		@part = params[:part]
	else
		@part = "overview"
	end
	
    render "show"
  end

  def select
	@part = params[:part]
	@project = Project.find(params[:id])
	if (current_user != nil)
		if @part[0] == "x"
			new_sel = @project.num_steps
			@part = @part[1..-1]
		else
			if @part[0..3] == "step"
				#NOTE: even if part is nil, new_sel will be 0
				#NOTE: so if you save on a step that means you completed all the
				#steps before and are currently on this step
				new_sel = [Integer(@part.to_s[4..-1],10)-1,0].max + 1
			else
				new_sel = 0
			end
		end
		projsel = ProjectSelection.find_or_create_by_project_id_and_user_id(@project.id,current_user.id)
		projsel.current_step = new_sel
		projsel.save
	end
	render "show"
  end
  
  # GET /projects/new
  # GET /projects/new.json
  def new
    @project = Project.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @project }
    end
  end

  # GET /projects/1/edit
  def edit
    @project = Project.find(params[:id])
  end

  # POST /projects
  # POST /projects.json
  def create
    @project = Project.new(params[:project])

    respond_to do |format|
      if @project.save
        format.html { redirect_to @project, notice: 'Project was successfully created.' }
        format.json { render json: @project, status: :created, location: @project }
      else
        format.html { render action: "new" }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /projects/1
  # PUT /projects/1.json
  def update
    @project = Project.find(params[:id])

    respond_to do |format|
      if @project.update_attributes(params[:project])
        format.html { redirect_to @project, notice: 'Project was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /projects/1
  # DELETE /projects/1.json
  def destroy
    @project = Project.find(params[:id])
    @project.destroy

    respond_to do |format|
      format.html { redirect_to projects_url }
      format.json { head :no_content }
    end
  end
  before_filter :authenticate_user
  skip_before_filter :authenticate_user, :only => [:show]
end
