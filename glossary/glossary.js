	$(function() {
		
		// make draggable things draggable
		$(".draggable").each(function(){
			$(this).draggable();
		});
		
		// stuff for each of the entries
		
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
		
	});