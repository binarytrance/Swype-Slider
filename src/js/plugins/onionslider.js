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
console.log(slideWidth);
// var slidVal = 0;
$(".c-top-villa").css("width", slideWidth + "%")
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
	var maxTranslationRounded = Math.round(maxTranslation * 100) / 100;
	console.log( slideNumber, slideWidth, maxTranslation);
	if($(this).hasClass("round-arrow--left") && $(window).width() > 769) {
		console.log("left clicked");
		var attrVal = $(this).siblings(".slider-gran").children(".slider-parent").attr("data-translate");
		console.log(attrVal);
		var newAttrVal = parseFloat(attrVal)+slideWidth;
		translateVal = newAttrVal;
		var translateValRounded = Math.round(translateVal * 100) / 100;
		$(this).siblings(".slider-gran").children(".slider-parent").attr("data-translate", translateVal);
	}
	else if($(this).hasClass("round-arrow--right") && $(window).width() > 769) {
		console.log("right clicked");
		var attrVal = $(this).siblings(".slider-gran").children(".slider-parent").attr("data-translate");
		console.log(attrVal);
		var newAttrVal = parseFloat(attrVal)+ (-slideWidth);
		translateVal = newAttrVal;
		var translateValRounded = Math.round(translateVal * 100) / 100;
		$(this).siblings(".slider-gran").children(".slider-parent").attr("data-translate", translateVal);
	}
	console.log(translateVal, maxTranslationRounded);
	if(translateValRounded === 0) {
		if($(this).hasClass("round-arrow--left")) {
			$(this).css("display", "none")
		}
		// $(".round-arrow--left").css("display", "none");
	}
	else {
		$(this).siblings(".round-arrow--left").css("display", "flex");
	}
	if(translateValRounded <= -maxTranslationRounded) {
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
	// controls visibility of navigation arrows
	if($(window).width() > 768) {
		$(".round-arrow--right").css("display", "flex");
		$(".round-arrow--left").css("display", "none");
	}
	else {
		$(".round-arrow--right").css("display", "none");
		$(".round-arrow--left").css("display", "none");
	}
	
})

