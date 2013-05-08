module ProjectsHelper
	def curr_step(user, project)
		#returns projsel (because it is the value of last line)
		projsel = ProjectSelection.find_by_project_id_and_user_id(project.id, user.id)
		if (projsel != nil) and (projsel.current_step != nil)
			result = projsel.current_step
		else
			result = 0
		end
		result
	end
end
