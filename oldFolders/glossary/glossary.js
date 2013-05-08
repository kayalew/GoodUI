// references: http://stackoverflow.com/questions/9240180/jquery-ui-dialog-widget-with-tabs


$(function() {
	
	// make draggable things draggable
	$(".draggable").each(function(){
		$(this).draggable();
	});
	
	glossaryEntryStuff("blanket-stitch");
	glossaryEntryStuff("running-stitch");
	glossaryEntryStuff("thread-needle");
	glossaryEntryStuff("tie-off");

	
});

var glossaryEntryStuff = function(term){
			
	$( "#glossary-"+term ).dialog({
		autoOpen:false,
		width:550,
		resizable:false,
		create: function(){
			$("#glossary-"+term+"-tabs").tabs({
			
				create: function(e,ui){
					$("#glossary-"+term+"-close").click(function(){
						$("#glossary-"+term).dialog("close");
					});
				}
			});
		}
	});
	
	$("."+term+"-click").each(function(){
		$(this).click(function(){
			$("#glossary-"+term).dialog("open");
		});
	});
		
}


