$(document).ready(function(){
	var sel = true

	$("#gselect").click(function()
	{	
		if (sel==true) {
		$("#guitarsel").show("slow")
		sel = false

	}
		else {
			$("guitarsel").hide("slow")
			 sel = true
		}
	});
});