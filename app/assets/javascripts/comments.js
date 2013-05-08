//http://stackoverflow.com/questions/7151491/restrict-the-slidetoggle-animation-at-once-when-click-the-radiobutton
//http://api.jquery.com/slideDown/
function resetCommentBox() {
  $("#commentBox").hide();
  jQuery("#commentSubmit").click(function()
  {
	//note: putting comment box into a span does weird things, 
	//in chrome will make it default hidden (and not in firefox). 
	//which is fine for this code, but will be good
	//to remeber if this js evolves
	if ($("#commentBox").is(':hidden') || $("#commentBox").val()==""){
		$("#commentBox").slideDown(400,function(){
			$("#commentSubmit").val("Post new note");
		});
		return false;
	}
	else{
		return true;
	}
  });
}