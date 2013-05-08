class CommentsController < ApplicationController
  # GET /comments
  # GET /comments.json
  def index
    @comments = Comment.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @comments }
    end
  end

  # GET /comments/1
  # GET /comments/1.json
  def show
    @comment = Comment.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @comment }
    end
  end

  # GET /comments/new
  # GET /comments/new.json
  def new
	project_id = params[:project_id]
	part = params[:part]
    if (Project.where("id = ?", 
    project_id).exists?)
      @comment = current_user.
      comments.new(:project_id => project_id, :part => part)
    end
  end

  # GET /comments/1/edit
  def edit
    @comment = Comment.find(params[:id])
  end
  
  def refresh
	
    respond_to do |format|
      format.js
    end
  end
  
  # POST /comments
  # POST /comments.json
  def create
	#TODO: the below line (through testing b/c timeframe) will ignore inputted
	#user and only use the cucrrent user.
	@comment = current_user.comments.new(params[:comment])
	#TODO: unsafe code because it trusts the user 
	#not to modify @comment.project and @comment.part
	@project = @comment.project
	@part = @comment.part
    respond_to do |format|
      if @comment.save
        format.js { render "refresh", :layout => false }
      else
        format.js { render "refresh", :layout => false }
      end
    end
  end

  # PUT /comments/1
  # PUT /comments/1.json
  def update
    @comment = Comment.find(params[:id])

    respond_to do |format|
      if @comment.update_attributes(params[:comment])
        format.html { redirect_to @comment, notice: 'Comment was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /comments/1
  # DELETE /comments/1.json
  def destroy
    @comment = Comment.find(params[:id])
	#TODO: unsafe code because it trusts the user 
	#not to modify @comment.project and @comment.part
	@project = @comment.project
	@part = @comment.part
	
	@comment.destroy
    respond_to do |format|
      format.js { render "refresh", :layout => false }
    end
  end
end
