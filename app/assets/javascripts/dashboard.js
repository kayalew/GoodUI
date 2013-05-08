$(function() {
    jQuery( ".progressbar" ).each(function() {
		$(this).progressbar({
			value: $(this).data('percent')*100
		});
  });
});