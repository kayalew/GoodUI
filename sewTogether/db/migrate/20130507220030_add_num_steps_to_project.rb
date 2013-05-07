class AddNumStepsToProject < ActiveRecord::Migration
  def change
    add_column :projects, :num_steps, :integer
  end
end
