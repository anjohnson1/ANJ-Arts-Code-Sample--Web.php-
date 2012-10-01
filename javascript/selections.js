$(function(){
	$("#left").hover(function() {
		$("input#left").fadeTo(100,0.90);
	});
	$("#left").mouseout(function() {
		$("#left").fadeTo(100,0.50);
	});
	$("#left").click(function() {
		$("a.screenshots:last").prependTo("#projects");
   	});
   	$("#right").click(function() {
		$("a.screenshots:first").appendTo("#projects");
   	});
	$("#right").hover(function() {
		$("input#right").fadeTo(100,0.90);
	});
	$("#right").mouseout(function() {
		$("input#right").fadeTo(100,0.50);
	});
});