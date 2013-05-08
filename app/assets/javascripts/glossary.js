/* references: 	http://stackoverflow.com/questions/9240180/jquery-ui-dialog-widget-with-tabs

*/


//glossary entries here
var glossaryEntryList = [
	"blanket stitch",
	"running stitch",
	"threading a needle",
	"needle threader",
	"tying off"
];

var glossaryRef = {
	"blanket stitch":"blanket-stitch",
	"running stitch":"running-stitch",
	"threading a needle":"thread-needle",
	"needle threader":"needle-threader",
	"tying off":"tie-off"
};

// deals with dialog boxes that come up when you click on a glossary term
$(document).ready(function() {
	
	// make draggable things draggable (ie, dialog boxes)
	$(".draggable").each(function(){
		$(this).draggable();
	});
	
	// make a dialog box for every entry that's there.
	glossaryEntryStuff("blanket-stitch");
	glossaryEntryStuff("running-stitch");
	glossaryEntryStuff("thread-needle");
	glossaryEntryStuff("needle-threader");
	glossaryEntryStuff("tie-off");
	
});

// makes the tabbed dialog box that has each glossary entry
// There is a definition tab and a video tag
var glossaryEntryStuff = function(term){
			
	$( "#glossary-"+term ).dialog({
		autoOpen:false,
		width:550,
		resizable:false,
		create: function(){
			$("#glossary-"+term+"-tabs").tabs({

				// close the dialog box by clicking on little x in corner
				create: function(e,ui){
					$("#glossary-"+term+"-close").click(function(){
						$("#glossary-"+term).dialog("close");
					});
					
					
				},
				
				// don't embed the youtube video until/unless you actually need it
				activate: function(e,ui){
					if ($("#videoPlaceholder-"+term).length){
						var url = $("#videoPlaceholder-"+term).html();
						var toEmbed = "<iframe id=\"iframe-"+term+"\" width=\"420\" height=\"315\" src=\""+url+"\"frameborder=\"0\" allowfullscreen></iframe>";
						console.log(toEmbed);
						$("#glossary-"+term+"-video").html(toEmbed);						
						
						
						// stop the video if you close the dialog box						
						// actually pausing the video would be better, but. Maybe later :P
						$("#glossary-"+term+"-close").click(function(){
							$("#glossary-"+term+"-video").html(toEmbed);
						});
						
					}
					else{
					}
				}
			});
			
		} 
	});
	
	// open dialog box if you click on the term
	$("."+term+"-click").each(function(){
		$(this).click(function(){
			$("#glossary-"+term).dialog("open");
		});
	});
	
}
