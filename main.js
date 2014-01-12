$(document).ready(function(){
	$("#gselect").click(function(){
		$("#guitarsel").toggle("slow");

	});

	$(".slide").click(function(){
		$("#menu").slideToggle("fast");
	});

	$("td img").hover(function(){
		$(".select").slideToggle('fast');
	})

});
	

	