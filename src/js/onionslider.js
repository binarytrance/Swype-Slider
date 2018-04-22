// slider in home page

// slider initialisation
var translateVal = 0;
var slideNumber = 6;
var clickNumber = slideNumber - 3;
var visibleSlides = 3;
var slideWidth = Math.round((100 / visibleSlides) * 100) / 100;
var slidVal = 0;
var maxTranslation = visibleSlides * slideWidth;
$(".slider-parent").attr("data-translate", 0);
var clickedParent = $(this).siblings(".slider-gran").children(".slider-parent");

// slider arrow click events
$(".js-round-arrow").on("click", function() {
	if($(this).hasClass("round-arrow--left")) {
		var attrVal = $(this).siblings(".slider-gran").children(".slider-parent").attr("data-translate");
		console.log(typeof(attrVal));
		var newAttrVal = parseFloat(attrVal)+slideWidth;
		translateVal = newAttrVal;
		$(this).siblings(".slider-gran").children(".slider-parent").attr("data-translate", translateVal);
	}
	else if($(this).hasClass("round-arrow--right")) {
		var attrVal = $(this).siblings(".slider-gran").children(".slider-parent").attr("data-translate");
		console.log(typeof(attrVal));
		var newAttrVal = parseFloat(attrVal)+ (-slideWidth);
		translateVal = newAttrVal;
		$(this).siblings(".slider-gran").children(".slider-parent").attr("data-translate", translateVal);
	}
	console.log(translateVal);
	if(translateVal === 0) {
		if($(this).hasClass("round-arrow--left")) {
			$(this).css("display", "none")
		}
		// $(".round-arrow--left").css("display", "none");
	}
	else {
		$(this).siblings(".round-arrow--left").css("display", "flex");
	}
	if(translateVal <= -maxTranslation) {
		if($(this).hasClass("round-arrow--right")) {
			$(this).css("display", "none")
		}
		// $(".round-arrow--right").css("display", "none");
	}
	else {
		$(this).siblings(".round-arrow--right").css("display", "flex");
	}
	// console.log($(this).siblings(".slider-gran").children(".slider-parent"));
	// $(this).siblings().children(".slider-parent");
	$(this).siblings(".slider-gran").children(".slider-parent").attr("data-translate", translateVal);
	$(this).siblings(".slider-gran").children(".slider-parent").css("transform", "translateX(" + translateVal + "%)");
});

// adaptive background
// get dominant color of background image and add color overlay
$(document).ready(function(){
  $.adaptiveBackground.run();
});

$(window).on("load resize", function() {
	if($(window).width() > 768) {
		$(".c-heading-wrapper--top").insertBefore($(".c-heading-wrapper--top").parent(".landing-cards"));
		$(".c-heading-wrapper--premium").insertBefore($(".c-heading-wrapper--premium").parent(".landing-cards"));
		$(".c-heading-wrapper--curated").insertBefore($(".c-heading-wrapper--curated").parent(".landing-cards"));
		$(".c-heading-wrapper--destinations").insertBefore($(".c-heading-wrapper--destinations").parent(".landing-cards"));
	}
	else {
		$(".c-heading-wrapper--top").insertBefore($(".c-heading-wrapper--top").siblings(".landing-cards").children(".c-villa-wrapper"));
		$(".c-heading-wrapper--premium").insertBefore($(".c-heading-wrapper--premium").siblings(".landing-cards").children(".c-villa-wrapper"));
		$(".c-heading-wrapper--curated").insertBefore($(".c-heading-wrapper--curated").siblings(".landing-cards").children(".c-villa-wrapper"));
		$(".c-heading-wrapper--destinations").insertBefore($(".c-heading-wrapper--destinations").siblings(".landing-cards").children(".c-villa-wrapper"));
	}
});
$(window).on("load resize", function() {
	if($(window).width() < 1200) {
		$(".js-search-form-container").insertAfter($(".section-villa-links"))
		
	}
	else {
		$(".js-search-form-container").insertAfter($(".mobile-nav"))
	}
})
