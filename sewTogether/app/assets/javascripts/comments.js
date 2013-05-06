//http://stackoverflow.com/questions/7151491/restrict-the-slidetoggle-animation-at-once-when-click-the-radiobutton
//http://api.jquery.com/slideDown/
function setupCommentBox() {
	$("#commentBox").hide();
	setupCommentBoxToggle();
}
function setupCommentBoxToggle() {
  jQuery("#commentSubmit").click(function()
  {
	$("#commentBox").slideDown(400,function(){
		$("#commentSubmit").val("Post new note");
	});
	return false;
  });
}

