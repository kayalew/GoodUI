$(function() {
	
	// make draggable things draggable
	$(".draggable").each(function(){
		$(this).draggable();
	});
	
	// stuff for each of the entries
	/*
	$( "#glossary-blanket-stitch" ).dialog({
		autoOpen:false,
		width:500,
		resizable:false,
		create: function(){
			$("#glossary-blanket-stitch-tabs").tabs({
				create: function(e,ui){
					$("#glossary-blanket-stitch-close").click(function(){
						$("#glossary-blanket-stitch").dialog("close");
					});
				}
			});
		}
	});
	
	$(".blanket-stitch-click").each(function(){
		$(this).click(function(){
			$("#glossary-blanket-stitch").dialog("open");
		});
	});
	*/
	
	glossaryEntryStuff("blanket-stitch");
	glossaryEntryStuff("running-stitch");
	glossaryEntryStuff("thread-needle");
	glossaryEntryStuff("tie-off");

	/*
	$( "#glossary-running-stitch" ).dialog({
		autoOpen:false
	});
	$(".running-stitch-click").each(function(){
		$(this).click(function(){
			$("#glossary-running-stitch").dialog("open");
		});
	});	

	$( "#glossary-thimble" ).dialog({
		autoOpen:false
	});
	$(".thimble-click").each(function(){
		$(this).click(function(){
			$("#glossary-thimble").dialog("open");
		});
	});	

	$( "#glossary-thread-needle" ).dialog({
		autoOpen:false
	});
	$(".thread-needle-click").each(function(){
		$(this).click(function(){
			$("#glossary-thread-needle").dialog("open");
		});
	});

	$( "#glossary-tie-knot" ).dialog({
		autoOpen:false
	});
	$(".tie-knot-click").each(function(){
		$(this).click(function(){
			$("#glossary-tie-knot").dialog("open");
		});
	});
	
	$( "#glossary-tie-off" ).dialog({
		autoOpen:false
	});
	$(".tie-off-click").each(function(){
		$(this).click(function(){
			$("#glossary-tie-off").dialog("open");
		});
	});
	*/
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
