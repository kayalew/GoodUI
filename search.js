/*http://www.w3schools.com/js/js_datatypes.asp
http://www.w3schools.com/js/js_loop_for.asp
http://api.jquery.com/append/
http://www.w3schools.com/tags/tag_input.asp
http://www.w3schools.com/tags/tag_label.asp*/
function start(){ 
	setupFilters();
	var searchItems = new Array();
	var tagsA = ["<10$","Fiber","5 stars"];
	var itemA = {name:"Bear", tags:tagsA, cost:"<10$", material:"Fiber",difficulty:"5 stars"};
	searchItems[0] = itemA;
	var tagsB = ["<50$","Silk","4 stars"];
	var itemB = {name:"Cat", tags:tagsB, cost:"<50$", material:"Silk",difficulty:"4 stars"};
	searchItems[1] = itemB;
	//var selector = $('.selector');
	/*selector.autocomplete({
		
	});*/
	for (var i=0;i<searchItems.length;i++){
		var $tempResultDiv = $('<div class="result">' + searchItems[i].name + '<div>');
		$("#results").append($tempResultDiv);
		/*$("#results").autocomplete({
			source: tagsB
		});*/
	}
}

//hide filter categories and set up their toggleable nature
//Note, the element right after a category should be
//everything immediately under it
function setupFilters() {
  //can use $(".filter").hide(); if .next().hide() isn't 
  //specific enough for future purposes
  jQuery(".filterCategory").click(function()
  {
	//can use 'slow' 'fast' instead of millisecond value
	//can use $(this).next(".filter").slideToggle(400); if bugs come up
	$(this).next().slideToggle(400);
	
	return false;
  }).next().hide();
  //hides the next element (which in my code is the div containing the filter options)
}
