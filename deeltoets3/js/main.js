var originalNavHtml;

$(function() {
	originalNavHtml = $("nav").html();
	
	init();
	if($("html").hasClass("touch")) {
		$(".touch a").addClass("main-color");
	}
	$(window).resize(function() { init (); });
});


function init () {
	if($(window).width()<570 && $("html").hasClass("touch")) {
		var navhtml = originalNavHtml;
		navhtml = "<div id=\"nav-holder\">"+navhtml+"</div>";
		$("nav").html(navhtml);
		
		$("#nav-holder").css("height", 0);
		$("#nav-holder").css("overflow", "hidden");
		
		$("nav").prepend("<span id=\"nav-link\">Navigatie</span>");
		$("#nav-link").css({
			"padding": "1em",
			"margin": "1em",
			"border-radius": "0.5em",
			"background": "#ddd",
			"border": "1px solid #bbb",
			"display": "block",
			"text-align": "center"
		});
		
		$("#nav-link").on("touchend", function(){
			var navHeight = parseFloat($("#nav-holder").css("height"));
			if(navHeight > 0) {
				$("#nav-holder").css("height", 0);
			} else {
				$("#nav-holder").css("height", "auto");
			}
			
		});
	} else {
		$("nav").html(originalNavHtml);
	}
}