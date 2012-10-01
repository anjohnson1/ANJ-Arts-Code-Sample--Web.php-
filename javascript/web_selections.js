$(function(){
// Web Page
	$("a#ren").click(function() {
		$("tr#ren").css("display","block");
		$("tr#fi").css("display","none");
		$("tr#is").css("display","none");
		$("tr#anj").css("display","none");
	});
	$("a#fi").click(function() {
		$("tr#ren").css("display","none");
		$("tr#fi").css("display","block");
		$("tr#is").css("display","none");
		$("tr#anj").css("display","none");
	});
	$("a#is").click(function() {
		$("tr#ren").css("display","none");
		$("tr#fi").css("display","none");
		$("tr#is").css("display","block");
		$("tr#anj").css("display","none");
	});
	$("a#anj").click(function() {
		$("tr#ren").css("display","none");
		$("tr#fi").css("display","none");
		$("tr#is").css("display","none");
		$("tr#anj").css("display","block");
	});
});