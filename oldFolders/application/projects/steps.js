$(document).ready(function() {

	$(document).keydown(function(e){

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
		
	});	
});