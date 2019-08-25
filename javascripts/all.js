//= require_tree .

// Add smooth scroll to anchor links

$(document).ready(function(){
  $.localScroll();
});

// Countdown timer

$(document).ready(function() {
	$("#countdown").countdown({
		date: "june 17, 2019",
		offset: -6,
		leadingZero: true,
		htmlTemplate: "<p class=\"starts-in\">FrizBee starts in</p><div class=\"counter\"><p class=\"dash days\"><span class=\"digits\">%{d}</span> <span class=\"title\">days</span></p> <p class=\"dash\"><span class=\"digits\">%{h}</span> <span class=\"title\">hours</span></p> <p class=\"dash\"><span class=\"digits\">%{m}</span> <span class=\"title\">minutes</span></p></div>"
	});
});
