// slider in home page

// slider initialisation
var translateVal = 0;
// number of slider
var slideNumber = 0;
// number of clicks required to see entire slider slides
var clicks = 0;
// number of clicks required
var clickNumber = slideNumber - 3;
// number of slides visible on screen at any given time
var visibleSlides = 3;
// calculates the width of slides based on the number of slides that are to be visible
var slideWidth = Math.round((100 / visibleSlides) * 100) / 100;
// var slidVal = 0;
// 
console.log(slideNumber);
//var maxTranslation = visibleSlides * slideWidth;
var maxTranslation = 0;
$(".swypeSlider-wrapper").attr("data-translate", 0);
var clickedParent = $(this).siblings(".slider-gran").children(".slider-parent");

// slider arrow click events
$(".js-round-arrow").on("click", function() {
	// initialise the number of slides on the clicked panel
	slideNumber = $(this).siblings($(".swypeSlider-container")).children(".swypeSlider-wrapper").children(".c-top-villa").length;
	clicks = slideNumber - visibleSlides;
	maxTranslation = clicks * slideWidth;
	console.log( slideNumber, slideWidth, maxTranslation);
	if($(this).hasClass("round-arrow--left") && $(window).width() > 769) {
		var attrVal = $(this).siblings(".slider-gran").children(".slider-parent").attr("data-translate");
		console.log(typeof(attrVal));
		var newAttrVal = parseFloat(attrVal)+slideWidth;
		translateVal = newAttrVal;
		$(this).siblings(".slider-gran").children(".slider-parent").attr("data-translate", translateVal);
	}
	else if($(this).hasClass("round-arrow--right") && $(window).width() > 769) {
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

$(window).on("load resize", function() {
	$(".slider-parent").attr("data-translate", 0);
	$(".slider-parent").css("transform", "translateX(0)")
	if($(window).width() > 768) {
		$(".round-arrow--right").css("display", "flex");
		$(".round-arrow--left").css("display", "none");
	}
	else {
		$(".round-arrow--right").css("display", "none");
		$(".round-arrow--left").css("display", "none");
	}
	
})



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
// $(window).on("load resize", function() {
// 	if($(window).width() < 768) {
// 		$(".js-search-form-container").insertAfter($(".section-villa-links"))
		
// 	}
// 	else {
// 		$(".js-search-form-container").insertAfter($(".mobile-nav"))
// 	}
// })
