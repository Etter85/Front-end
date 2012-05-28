$(function() {
	if($("html").hasClass("touch")) {
		$(".touch a").addClass("main-color");
	}
	
	if($(window).width()<501 /*&& $("html").hasClass("touch")*/) {
	// DO HTML REPLACEMENT HERE (TAKE NAV AND PUT IT BACK WITH WRAPPER
		$("nav").prepend("<div id=\"nav-holder\">");
		$("nav ul").append("</div>");
		$("#nav-holder").css({
			"height": 0,
			"overflow": "hidden"
		});
		$("nav").prepend("<a href=\"#\" id=\"nav-link\">Navigatie</a>");
		$("#nav-link").click(function(){
			
		});
	}
});
