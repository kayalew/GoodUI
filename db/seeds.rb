# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
scr = Project.create( :name => "Strawberry Cream Roll", :num_steps => 5 )
Project.create( :name => "Bear", :num_steps => 2 )
Project.create( :name => "Sundress", :num_steps => 2 )
Project.create( :name => "Pillow", :num_steps => 2 )
sew = User.create(:email => "sewphia@sewphia.net", :password => "sewphia", 
			:password_confirmation => "sewphia", :user_name => "Sewphia")
ali = User.create(:email => "alice@alice.net", :password => "alice", 
			:password_confirmation => "alice", :user_name => "Alice")
bob = User.create(:email => "bob@bob.net", :password => "bob", 
			:password_confirmation => "bob", :user_name => "Bob")
cat = User.create(:email => "cathy@cathy.net", :password => "cathy", 
			:password_confirmation => "cathy", :user_name => "Cathy")
#for the "parts", non-capitalization matters
Comment.create( :part => "overview", :project_id => scr.id, :user_id => sew.id, 
				:text => "There is an error in the supply listings! You forgot 
				to mention that we also need white thread :)")
Comment.create( :part => "overview", :project_id => scr.id, :user_id => ali.id, 
				:text => "Wow, thanks for catching that! I'll fix that
				as soon as possible.")
				
Comment.create( :part => "step1", :project_id => scr.id, :user_id => ali.id, 
				:text => "On the swirls-- stuff shows up on white felt very easily, 
				and sometimes THROUGH the felt depending on how you cut it.\n
				Also, instead of tracing two cake fronts and cutting them it would 
				probably be easier to trace one and cut them both together.")
				
Comment.create( :part => "step2", :project_id => scr.id, :user_id => bob.id, 
				:text => "Can we use a different stitch if we don't want to 
				have the thread show on the outside?")
				
Comment.create( :part => "step4", :project_id => scr.id, :user_id => cat.id, 
				:text => "How big of an opening do I need to leave??")
Comment.create( :part => "step4", :project_id => scr.id, :user_id => ali.id, 
				:text => "Whatever's big enough for you to comfortably stuff 
				the roll with, but small enough that the stufing stays in! For 
				this pattern, you don't have to worry too much about the size of 
				the opening, since you're sewing everything on the outside anyway.")