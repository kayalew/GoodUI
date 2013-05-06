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


http://stackoverflow.com/questions/5619102/lowercase-and-uppercase-with-jquery
http://www.w3schools.com/jsref/jsref_tolowercase.asp*/

var searchItems;
var filterItems;
function start(){ 
	filterItems = { techniques: ["threading a needle","tying off"],
					stitches: ["blanket stitch","running stitch"],
					tools: ["needle threader"]
					};
	setupFilters();
	
	var threadNeedle = { name:"threading a needle"};
	var tieOff = { name:"tying off"};
	var blanketStitch = { name:"blanket stitch"};
	var runningStitch = { name:"running stitch"};
	var needleThreader = { name:"needle threader"};

	helpItems = [threadNeedle,tieOff,blanketStitch,runningStitch,needleThreader];
	//refreshResults([]);
	
	// sets up the tabs for the glossary entries
	
	glossaryEntryStuff("blanket-stitch");
	glossaryEntryStuff("running-stitch");
	glossaryEntryStuff("thread-needle");
	glossaryEntryStuff("needle-threader");
	glossaryEntryStuff("tie-off");
	
	
	$("#query").autocomplete({
		source:glossaryEntryList,
		select:function(event,ui){
			// not yet working
			console.log("hi");
			refreshResults([]);
		}
	});
}

function refreshResults(selectedFilters){
	var queryTerm = $("#query").val().toLowerCase();
	var partMatches = [];	
	for (var i=0; i<glossaryEntryList.length; i++){
		if (queryTerm==glossaryEntryList[i]){	
			// if exact match, open up appropriate dialog box
			$("#glossary-"+glossaryRef[queryTerm]).dialog("open");
			return;
		} else if (glossaryEntryList[i].match(queryTerm)){
			// get partial matches--
			partMatches.push(glossaryEntryList[i]);
		}
	}
	
	$("#sewingBasicsPlaceholder").html("Were you looking for any of these?<ul>");	
	for (var i=0; i<partMatches.length; i++){
		$("#sewingBasicsPlaceholder").append("<li><span class=\"glossaryTerm "+glossaryRef[partMatches[i]]+"-click\">"+partMatches[i]+"</span></li>");
		glossaryEntryStuff(glossaryRef[partMatches[i]]);
	}
}

function searchIfEnter(event){
	if(event.keyCode == 13){//keycode 13 is enter
		refreshResults([]);
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
		$tempDivVar.append('<div class="filter bodyText"><span class="glossaryTerm '+glossaryRef[filterItems[filterCategories[j]][k]]+'-click">'+filterItems[filterCategories[j]][k]+'</span></div>');
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
  
  /*
  jQuery(".filter").click(function()
  {
	console.log($(this).val());
	//TODO: double check use of text
	//$("#query").val($(this).text());
	
	$(".selected").toggleClass("selected");
	$(this).toggleClass("selected");
	$(":radio").prop("checked",false);
	$(this).children().prop("checked",true);
	
	var selectedFilters = $(".selected");
	
	//refreshResults(selectedFilters);
	return false;
  });
  //TODO: tehre should be no gap above
  //cost shouldn't justs search
  */
  
}




