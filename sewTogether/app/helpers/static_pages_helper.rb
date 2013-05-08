module StaticPagesHelper
	def curr_step(user, project)
		#returns projsel (because it is the value of last line)
		projsel = ProjectSelection.find_by_project_id_and_user_id(project.id, user.id)
		if (projsel != nil) and (projsel.current_step != nil)
			result = projsel.current_step
		else
			result = -1
		end
		result
	end
	def nav_to_step(step, max_step)
		if (step > 0)
			final_step = "step"+[max_step,step].min.to_s
		else
			final_step = "instructions"
		end
		final_step
	end
end
