$(function(){
// Random-e Thumbnails
	$("a#rena").click(function() {
		$("div#rena").css("display","block");

		$("div#renb").css("display","none");
		$("div#renc").css("display","none");
		$("div#rend").css("display","none");
	});
	$("a#renb").click(function() {
		$("div#renb").css("display","block");
		
		$("div#rena").css("display","none");
		$("div#renc").css("display","none");
		$("div#rend").css("display","none");
	});
	$("a#renc").click(function() {
		$("div#renc").css("display","block");
		
		$("div#rena").css("display","none");
		$("div#renb").css("display","none");
		$("div#rend").css("display","none");
	});
	$("a#rend").click(function() {
		$("div#rend").css("display","block");
		
		$("div#rena").css("display","none");
		$("div#renb").css("display","none");
		$("div#renc").css("display","none");
	});
		
// Franklin institute Thumbnails
	$("a#fia").click(function() {
		$("div#fia").css("display","block");

		$("div#fib").css("display","none");
	});
	$("a#fib").click(function() {
		$("div#fib").css("display","block");
		
		$("div#fia").css("display","none");
	});
	
// Insight Thumbnails
	$("a#isa").click(function() {
		$("div#isa").css("display","block");

		$("div#isb").css("display","none");
		$("div#isc").css("display","none");
		$("div#isd").css("display","none");
	});
	$("a#isb").click(function() {
		$("div#isb").css("display","block");
		
		$("div#isa").css("display","none");
		$("div#isc").css("display","none");
		$("div#isd").css("display","none");
	});
	$("a#isc").click(function() {
		$("div#isc").css("display","block");
		
		$("div#isa").css("display","none");
		$("div#isb").css("display","none");
		$("div#isd").css("display","none");
	});
	$("a#isd").click(function() {
		$("div#isd").css("display","block");
		
		$("div#isa").css("display","none");
		$("div#isb").css("display","none");
		$("div#isc").css("display","none");
	});
			
// ANJ Arts Thumbnails
	$("a#anja").click(function() {
		$("div#anja").css("display","block");

		$("div#anjb").css("display","none");
	});
	$("a#anjb").click(function() {
		$("div#anjb").css("display","block");
		
		$("div#anja").css("display","none");
	});
});