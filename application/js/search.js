/*http://www.w3schools.com/js/js_datatypes.asp
http://www.w3schools.com/js/js_loop_for.asp
http://api.jquery.com/append/
http://www.w3schools.com/tags/tag_input.asp
http://www.w3schools.com/tags/tag_label.asp
http://www.w3schools.com/jsref/event_onkeypress.asp
http://stackoverflow.com/questions/4088467/get-value-in-input-text-box
http://api.jquery.com/val/
http://www.bloggingdeveloper.com/post/KeyPress-KeyDown-KeyUp-The-Difference-Between-Javascript-Key-Events.aspx
http://stackoverflow.com/questions/3090662/jquery-empty-vs-remove
http://stackoverflow.com/questions/537690/getting-the-value-of-a-form-field-after-keypress-event
http://www.w3schools.com/json/
http://api.jquery.com/append/
http://api.jquery.com/after/
http://www.w3schools.com/cssref/pr_class_visibility.asp*/

var searchItems;
var filterItems;
function start(){ 
	filterItems = { cost: ["<10$","<50$","<100$"], 
						materials: ["Fiber","Silk","Cotton"], 
						difficulty: ["5 stars","4 stars","3 stars","2 stars","1 star"] };
	setupFilters();
	var bear = { name:"Bear", cost:"<10$", materials:"Fiber", difficulty:"5 stars", 
				tags:["Bear","<10$","Fiber","5 stars"] };
	var cat = {name:"Cat", cost:"<50$", materials:"Silk",difficulty:"4 stars",
				tags:["Cat", "<50$","Silk","4 stars"]};
	var pillow = {name:"Pillow",cost:"<10$", material:"Cotton",difficulty:"1 star",
				tags:["Pillow", "<10$","Cotton","1 stars"]};
	searchItems = [bear,cat,pillow];
	refreshResults();
}

function refreshResults(){
	$("#results").empty();
	var $selectDiv = $('<div/>');
	for (var i=0;i<searchItems.length;i++){
		$selectDiv.autocomplete({
			minLength: 0,
			source: searchItems[i].tags,
			response: function( event, ui ) {
				//note it does this before updating val $("#query").val() so it's a step behind);
				if(ui.content.length > 0){
					$("#results").append('<div class="result">' + searchItems[i].name 
					+ "<br>Tags: " + searchItems[i].tags.toString() +'<div>');
				}
				return false;
			}
		});
		$selectDiv.autocomplete("search", $("#query").val());
		//NOTE the below line should be heere but without it and with minLength
		//there are visual bugs (this code interferes with setupFilters I think
		// but confirm)
		$selectDiv.remove();
	}
}

//filter Items must be defined
//create filter categories and filters, hide filter options and set up toggleability
//Note, the element right after a category should be
//everything immediately under it
function setupFilters() {
	//beginning create filter html
  var filterCategories = Object.keys(filterItems);
  for (var i = 0; i < filterCategories.length; i++){
	$("#filterCollection").append("<h2 id='ID_"+filterCategories[i]+"' class='filterCategory'>"
	+"<div class = 'ui-icon ui-icon-plusthick'></div> "+filterCategories[i]+" </h2>");
  }
  for (var j = 0; j < filterCategories.length; j++){
	var $tempDivVar = $("<div></div>");
	for (var k = 0; k < filterItems[filterCategories[j]].length; k++){
		$tempDivVar.append("<div class='filter bodyText'>"+filterItems[filterCategories[j]][k]+"</div>");
	}
	$("#ID_"+filterCategories[j]).after($tempDivVar);
  }
  //end of create filter html
  
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
  jQuery(".filter").click(function()
  {
	console.log($(this).val());
	//TODO: double check use of text
	$("#query").val($(this).text());
	refreshResults();
	return false;
  });
  //TODO: tehre should be no gap above
  //cost shouldn't justs search
}
