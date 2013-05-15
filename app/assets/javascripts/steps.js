//http://stackoverflow.com/questions/967096/using-jquery-to-test-if-an-input-has-focus
$(document).ready(function() {

	$(document).keydown(function(e){
		if ($("#commentBox").is(':hidden') || $("#commentBox").val()=="" || !$("#commentBox").is(':focus')){
			// navigation between steps w/  arrow keys	
			// left arrow
			if (e.which==37){
				// step back if you can.
				if ($("#stepBack").length!=0)
					$("#stepBack").click();
			}
			// right arrow
			else if (e.which==39){
				// step next if you can.
				if ($("#stepNext").length!=0)
					$("#stepNext").click();
				// or if you have the begin button instead
				else if ($("#begin").length!=0)
					$("#begin").click();
			}
			
			/*
			// pressing "/" on the keyboard opens up help and
			// goes through them, maybe?
			else if (e.which==191){
				$(".glossaryTerm").each(function(i){
					$(this).addClass("glossaryTermFocus");
				});
			}
			*/
		}
		
	});	
	
	// if we are on an instructions/steps page, then put in 
	// the extra side navigation (and change the tab thing)
	if (($("#stepBack").length==0)&&($("#begin").length==0)){
		// in overview page, "Overview" is active tab
		// and the extra navigation stuff shouldn't show up
		$("#instructionsExtras").hide();
		$("#tabInstructions").removeClass("projectActiveTab");
		$("#tabOverview").addClass("projectActiveTab");
	}
	else{
		// in instructions/steps. Add the extra navigational content
		// and add the tip about using arrow key navigation
		$("#instructionsAccordion").accordion({
			collapsible: true,
			active:false,
			heightStyle:"content"
		});
	}
});