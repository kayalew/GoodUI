module ProjectsHelper
	def saved_step(user, project)
		#returns projsel (because it is the value of last line)
		projsel = ProjectSelection.find_by_project_id_and_user_id(project.id, user.id)
		if (projsel != nil) and (projsel.current_step != nil)
			result = projsel.current_step
		else
			result = 0
		end
		result
	end
	def curr_step(part)
		if part[0..3] == "step"
			step = [Integer(@part.to_s[4..-1],10)-1,0].max
		else
			step = 1
		end
		step
	end
	def is_tracking?(user, project)
		#returns projsel (because it is the value of last line)
		projsel = ProjectSelection.find_by_project_id_and_user_id(project.id, user.id)
		if (projsel != nil) and (projsel.current_step < project.num_steps)
			result = true
		else
			result = false
		end
		result
	end
end
