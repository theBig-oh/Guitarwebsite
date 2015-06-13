



$(document).ready(function(){
	


	$("#gselect").click(function(){
		$(".guitarsel").toggle("slow");

	});

	$(".slide").click(function(){
		$("#menu").slideToggle("fast");
	});

/*
This makes it so when the mouse hovers over the IMAGE in the TABLE/MENU, it will 
display the SELECT class. However, I need it to respond to that only when I have it in 
that 1 PARTICULAR IMAGE, it should display the SELECT class.
*/

	$("#menu").mouseenter(function(){
		$(".select").slideDown('fast');
	});

	$("td img").mouseleave(function(){
		$(".select").slideUp('fast');
	});




});
	

	