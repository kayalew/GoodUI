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
	filterItems = { techniques: ["Basting","Cut","Darning"],
					stitches: ["Backstitch","Bar tack","Blanket"],
					closures: ["Buckle","Button","Buttonhole"],
					tools: ["Bobbin", "Dress form", "Needle threader"]
					};
	setupFilters();
	
	var basting = { name:"Basting", 
				tags:["Basting"] };
	var cut = { name:"Cut", 
				tags:["Cut"] };
	var darning = { name:"Darning", 
				tags:["Darning"] }
	var blanket = { name:"Blanket", 
				tags:["Blanket"] };

	helpItems = [basting,cut,darning,blanket];
	refreshResults([]);
}

function refreshResults(selectedFilters){
	if (selectedFilters[0].innerHTML === "Blanket") {
		$("#glossary-blanket-stitch-tabs").tabs();
		$("#results").css("display","inline");
	}
	
	else {
		$("#results").css("display","none");
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
	$(this).next().slideToggle(400);
	
	return false;
  }).next().hide();
  //hides the next element (which in my code is the div containing the filter options)
  jQuery(".filter").click(function()
  {
	console.log($(this).val());
	//TODO: double check use of text
	//$("#query").val($(this).text());
	
	$(".selected").toggleClass("selected");
	$(this).toggleClass("selected");
	
	var selectedFilters = $(".selected");
	
	refreshResults(selectedFilters);
	return false;
  });
  //TODO: tehre should be no gap above
  //cost shouldn't justs search
}
