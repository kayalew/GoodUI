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
//todo cream roll link needs to be corrected
var searchItems;
var filterItems;
function start(){
	filterCosts = [10,20,30,50]
	filterItems = { cost: ["$10 and under","$20 and under","$30 and under","$50 and under"], difficulty: ["&#9733;","&#9733;&#9733;","&#9733;&#9733;&#9733;","&#9733;&#9733;&#9733;&#9733;","&#9733;&#9733;&#9733;&#9733;&#9733;"],
						fabric: ["any","cotton","felt","fleece","linen","polyester","silk"]
						 };
						
						// TODO: change materials to "fabric by weight"??
						// Also separate notions
	setupFilters();
	var roll = {name:"Strawberry Cream Roll", cost:10, fabric:"felt", difficulty:"&#9733;&#9734;&#9734;&#9734;&#9734;", link:'../projects/5?part=overview&name=Strawberry+Cream+Roll', image:"/projects/strawberry-cream-roll/roll.JPG",
				tags:["Strawberry Cream Roll", 10, "felt","&#9733;"], diff:"diff1"};
	var bear = { name:"Bear", cost:10, fabric:"cotton", difficulty:"&#9733;&#9733;&#9733;&#9734;&#9734;", link:'../projects/5?part=overview&name=Bear', image:'/projects/bear/bear.jpg',
				tags:["Bear",10,"cotton","&#9733;&#9733;&#9733;","buttons"], diff:"diff3"};		// Bear image taken from here: http://www.canadianliving.com/crafts/sewing/cute_bears_to_sew_from_felt.php
	var sundress = {name:"Sundress", cost:30, fabric:"cotton",difficulty:"&#9733;&#9733;&#9733;&#9733;&#9734;", link:'../projects/5?part=overview&name=Sundress', image:"/projects/sundress/greydress.jpg",
				tags:["Sundress", 30,"cotton","&#9733;&#9733;&#9733;&#9733;"], diff:"diff4"};	// dresss image from http://sewing.patternreview.com/patterns/1652
	var pillow = {name:"Pillow", cost:20, fabric:"silk",difficulty:"&#9733;&#9733;&#9734;&#9734;&#9734;", link:'../projects/5?part=overview&name=Pillow', image:"/projects/pillow/pillow.jpg",
				tags:["Pillow", 20,"silk","&#9733;&#9733;"], diff:"diff2"}; 					// pillow image from http://www.hgtv.com/living-rooms/easy-to-sew-pillows/index.html
	searchItems = [bear,pillow,roll,sundress];
	refreshResults([]);
	$("#query").autocomplete({
		source: ["Bear","Pillow","Strawberry Cream Roll","Sundress"],
	});
	
}

function refreshResults(){
	var selectedFilters = $(".selected");
	var selectedCostFilters = [];
	var selectedDiffFilters = [];
	var selectedFabricFilters = [];
	
	for (var z = 0; z < selectedFilters.length; z++) {
		if (selectedFilters[z].children[1].classList.contains("number")) {
			selectedCostFilters.push(selectedFilters[z].children[1].id);
		}
		else if ((selectedFilters[z].children[1].classList.contains("diff"))) {
			selectedDiffFilters.push(selectedFilters[z].children[1].id);
		}
		else {
			selectedFabricFilters.push(selectedFilters[z].children[1].innerHTML);
		}
	}
	
	$("#results").empty();
	var $selectDiv = $('<div/>');
	for (var i=0;i<searchItems.length;i++){
		$selectDiv.autocomplete({
			minLength: 0,
			source: searchItems[i].tags,
			response: function( event, ui ) {
				var costMatch = 0;
				var diffMatch = 1;
				var fabricMatch = 1;
				

				if (selectedCostFilters.length > 0) {
					for (var x = 0; x < selectedCostFilters.length; x++) {
						if (searchItems[i].cost <= selectedCostFilters[x]) {
							costMatch = 1;
						}
					}
				}
				
				else {
					costMatch = 1;
				}
				
				if ($.inArray(searchItems[i].diff,selectedDiffFilters) == -1 && selectedDiffFilters.length > 0) {
					diffMatch = 0;
				}
				
				if ($.inArray(searchItems[i].fabric,selectedFabricFilters) == -1 && selectedFabricFilters.length > 0 && $.inArray("any",selectedFabricFilters) == -1) {
					fabricMatch = 0;
				}
				
				
				if (ui.content.length > 0 && costMatch == 1 && diffMatch == 1 && fabricMatch == 1){
					$("#results").append('<div class="searchResult" id="search-result-roll">' +
						'<div class="searchResultText">' +
						//'<h3><a href='+ searchItems[i].link + ' class="searchResultName">' + searchItems[i].name + '</a></h3>' +
						'<h3><a href='+ searchItems[i].link +'>' + searchItems[i].name + '</a></h3>' +
						'<p>Estimated Cost: <span>$' + searchItems[i].cost + '</span></p>' +
						'<p>Difficulty: <span class="difficulty">' + searchItems[i].difficulty + '</span></p>' +
						'<p>Required Materials: <span>' + searchItems[i].fabric + '</span></p>' +
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
		l = 1+k;
		if (filterCategories[j] == "difficulty"){
			$tempDivVar.append("<div class='filter bodyText'><input type='checkbox' class='checkBox'><span class='diff' id='diff"+l+"'>"+filterItems[filterCategories[j]][k]+"</span></div>");
		}
		else if (filterCategories[j] == "cost"){
			$tempDivVar.append("<div class='filter bodyText'><input type='checkbox' class='checkBox'><span class='number' id='"+filterCosts[k]+"'>"+filterItems[filterCategories[j]][k]+"</span></div>");
		}
		else {
			$tempDivVar.append("<div class='filter bodyText'><input type='checkbox' class='checkBox'><span class='fabric'>"+filterItems[filterCategories[j]][k]+"</span></div>");
		}
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
	$(this).children().prop("checked",!$(this).children().prop("checked"));
	
	refreshResults();
	return false;
  });
  
  jQuery(".checkBox").click(function(event) {
	event.stopPropagation();
	$(this).parent().toggleClass("selected");
	refreshResults();
  });
  
  
  //TODO: tehre should be no gap above
  //cost shouldn't justs search
}

