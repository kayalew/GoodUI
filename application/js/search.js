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
http://www.w3schools.com/cssref/pr_class_visibility.asp
http://www.w3schools.com/Js/tryit.asp?filename=try_dom_event_keycode*/

var searchItems;
var filterItems;
function start(){ 
	filterItems = { cost: ["scraps!","$10 and under","$20 and under ","$30 and under","$50 and under"], 
						difficulty: ["&#9733;&#9733;&#9733;&#9733;&#9733;","&#9733;&#9733;&#9733;&#9733;","&#9733;&#9733;&#9733;","&#9733;&#9733;","&#9733;"],
						fabric: ["any","cotton","felt","fleece","linen","polyester","silk"],
						 };
						
						// TODO: change materials to "fabric by weight"??
						// Also separate notions
	setupFilters();
	var roll = {name:"Strawberry Cream Roll",cost:"$10 and under", fabric:"felt", difficulty:"&#9733;", link:'"../../Steps/overview.html"', image:'"../images/roll.jpg"',
				tags:["Strawberry Cream Roll", "$10 and under", "felt","&#9733;"]};
	var bear = { name:"Bear", cost:"$10 and under", materials:"cotton", difficulty:"&#9733;&#9733;&#9733;", link:'""', image:'""',
				tags:["Bear","$10 and under","cotton","&#9733;&#9733;&#9733;","buttons"] };
	var sundress = {name:"Sundress", cost:"$30 and under", materials:"cotton",difficulty:"&#9733;&#9733;&#9733;&#9733;", link:'""', image:'""',
				tags:["Sundress", "$30 and under","cotton","&#9733;&#9733;&#9733;&#9733;"]};
	var pillow = {name:"Pillow",cost:"$20 and under", material:"silk",difficulty:"&#9733;&#9733;", link:'""', image:'""',
				tags:["Pillow", "$20 and under","silk","&#9733;&#9733;"]};
	searchItems = [bear,pillow,roll,sundress];
	refreshResults([]);
}

function refreshResults(){
	var selectedFilters = $(".selected");
	$("#results").empty();
	var $selectDiv = $('<div/>');
	for (var i=0;i<searchItems.length;i++){
		$selectDiv.autocomplete({
			minLength: 0,
			source: searchItems[i].tags,
			response: function( event, ui ) {
				var match = 0;
				//note it does this before updating val $("#query").val() so it's a step behind);
				if (selectedFilters.length != 0) {
					for (var x = 0; x < selectedFilters.length; x++) {
						for (var y = 0; y < searchItems[i].tags.length; y++) {
							if (selectedFilters[x].innerHTML === (searchItems[i].tags[y])) {
								match = 1;
								break;
							}
						}
					}
				}
				
				else {
					match = 1;
				}
				
				if (ui.content.length > 0 && match == 1){
					$("#results").append('<div class="searchResult" id="search-result-roll">' +
						'<div class="searchResultText">' +
						'<h3><a href='+ searchItems[i].link + ' class="searchResultName">' + searchItems[i].name + '</a></h3>' +
						'<p>Difficulty: <span class="difficulty">' + searchItems[i].difficulty + '</span></p>' +
						'</div>' +
						'<div class="thumbnail searchResultImg"><img src=' + searchItems[i].image + '/></div>' +
						'<div class="clearFloat"></div>' +
					'</div>');
				}
				return false;
			}
		});
		$selectDiv.autocomplete("search", $("#query").val());
		
		//NOTE the below line should be heere but without it and with minLength
		//there are visual bugs (this code interferes with setupFilters I think
		// but confirm)
		$selectDiv.remove();
		
		
		//$("#query").val(""); SHOULD WE DO THIS????
	}
}

function searchIfEnter(event){
	if(event.keyCode == 13){//keycode 13 is enter
		refreshResults();
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
	$(".filter").css( "visibility", "visible" );//counters the default hidden characteristic
	//can use 'slow' 'fast' instead of millisecond value
	//can use $(this).next(".filter").slideToggle(400); if bugs come up
	$(this).children().toggleClass("ui-icon-plusthick ui-icon-minusthick");
	$(this).next().slideToggle(400);
	
	return false;
  }).next().hide();
  //hides the next element (which in my code is the div containing the filter options)
  jQuery(".filter").click(function()
  {
	console.log($(this).val());
	//TODO: double check use of text
	//$("#query").val($(this).text());
	$(this).toggleClass("selected");
	
	refreshResults();
	return false;
  });
  //TODO: tehre should be no gap above
  //cost shouldn't justs search
}
