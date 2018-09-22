// "use strict";
// IIFE to keep things modular and nice
(function() {

	// define constructor which is public
	this.SwypeSlider = function() {
		// create global references
		var arrow;
		this.arrowsinTouch = null;
		this.visibleSlides = null;
		this.slidesToSwype = null;
		this.slideOnScroll = null;
		this.slideOnMouseScroll = null;
		
		// console.log(this.arrowsArray, typeof this.arrowArray, Array.isArray(this.arrowsArray), this.arrowsArray instanceof Array, this.arrows);
		// this.arrowsArray.forEach(function(d, i) {
		// 	d.addEventListener("click", this.changeSlide());
		// 	console.log(i);
		// })
		
		
		// define default options
		var defaults = {
			arrowsinTouch: false,
			className: "swypeContainer",
			visibleSlides: 3,
			slidesToSwype: 1,
			slideOnScroll: false,
			slideOnMouseScroll: false
		}

		// check to see if user has provided options object
		if(arguments[0] && typeof arguments[0] === "object") {
			this.options = extendDefaults(defaults, arguments[0]);
		}
	}
	SwypeSlider.prototype.initSwype = () => {
		console.log(this.arrows);
		this.temp = "temp";
		this.slidesArray = document.getElementsByClassName("swypeSlide");
		this.swypeSliderWrapper = document.getElementsByClassName("swypeSlider-wrapper");
		console.log(this.swypeSliderWrapper);
		// buildSlider
		buildSlider();
		// manageEvents
		manageEvents.handleSlideChange();
	}

	// private method that build the slider initially
	buildSlider = () => {
		
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
		console.log(this.swypeSliderWrapper);
		Array.from(this.swypeSliderWrapper).forEach(function(item) {
			item.dataset.translate = 0;
		})
		// this.swypeSliderWrapper.dataset.icon = "0";
		
		
		
		Array.from(this.slidesArray).forEach(function(item) {
			item.style.width = slideWidth + "%";
		});
	}

	// attach events to the slider
	// (PRIVATE OR PUBLIC object???)
	var manageEvents = {
		// event to handle arrow keys which change slides
		// method inside manageEvents (PRIVATE OR PUBLIC???)
		handleSlideChange() {
			this.arrowsArray = document.getElementsByClassName("js-round-arrow");
			this.arrows = this.arrowsArray; // correct
			console.log(this.arrows, "this.arrows");
			console.log(this.arrows, this.arrowsArray);
			// looping over a HTML collection
			for(var i = 0; i < this.arrows.length; i++) {
				console.log("adding event listener");
				this.arrows[i].addEventListener("click", changeSlide);
			}
		} 
		
	}

	//private method to change slides on clicking of arrow key
	changeSlide = () => {
		console.log(909);
		// slider initialisation
		var translateVal = 0;
		var maxTranslation = 0;

	};
	// Private method to extend default options with user options
	function extendDefaults(source, userObject) {
		// check to see if arguments[0] has properties
		var property;
		for(property in userObject) {
			if(source.hasOwnProperty(property)) {
				source[property] = userObject[property];
			}
		}
		return source;
	}
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
	// console.log(slideWidth);
	// var slidVal = 0;
	$(".swypeSlide").css("width", slideWidth + "%");
	/// converted to js ==================================================================================================
	// console.log(slideNumber);
	//var maxTranslation = visibleSlides * slideWidth;
	var maxTranslation = 0;
	// $(".swypeSlider-wrapper").attr("data-translate", 0);
	var clickedParent = $(this).siblings(".slider-gran").children(".slider-parent");

	// slider arrow click events
	$(".js-round-arrow").on("click", function() {
		// initialise the number of slides on the clicked panel
		slideNumber = $(this).siblings($(".swypeSlider-container")).children(".swypeSlider-wrapper").children(".swypeSlide").length;
		clicks = slideNumber - visibleSlides;
		maxTranslation = clicks * slideWidth;
		var maxTranslationRounded = Math.round(maxTranslation * 100) / 100;
		// console.log( slideNumber, slideWidth, maxTranslation);
		if($(this).hasClass("round-arrow--left") && $(window).width() > 769) {
			// console.log("left clicked");
			var attrVal = $(this).siblings(".slider-gran").children(".slider-parent").attr("data-translate");
			// console.log(attrVal);
			var newAttrVal = parseFloat(attrVal)+slideWidth;
			translateVal = newAttrVal;
			var translateValRounded = Math.round(translateVal * 100) / 100;
			$(this).siblings(".slider-gran").children(".slider-parent").attr("data-translate", translateVal);
		}
		else if($(this).hasClass("round-arrow--right") && $(window).width() > 769) {
			// console.log("right clicked");
			var attrVal = $(this).siblings(".slider-gran").children(".slider-parent").attr("data-translate");
			// console.log(attrVal);
			var newAttrVal = parseFloat(attrVal)+ (-slideWidth);
			translateVal = newAttrVal;
			var translateValRounded = Math.round(translateVal * 100) / 100;
			$(this).siblings(".slider-gran").children(".slider-parent").attr("data-translate", translateVal);
		}
		// console.log(translateVal, maxTranslationRounded);
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
		
	});
})();

// var initSlider = new SwypeSlider({
// 	arrowsinTouch: true,
// })

// slide on scroll functionality


// if($(window).width() > 1200) {
// 	console.log(">1024");
// 	$('.text-slider').slick(textObj).on("mousewheel", function(event) {
	
// 	  // console.log("testt");
// 	  // if($(window).width() > 1024) {
// 		  // console.log("testt1024");
// 		  event.preventDefault();
// 		  if (event.deltaX > 0 || event.deltaY < 0) {
// 				$(this).slick("slickNext");
// 			} else if (event.deltaX < 0 || event.deltaY > 0) {
// 				$(this).slick("slickPrev");
// 			}
// 	  // }
// 	});

// 	$('.image-slider').slick(imageObj).on("mousewheel", function(event) {
// 	  // console.log("scroll");
	  
// 	  // if($(window).width() > 1024)  {
// 		  // console.log("testt1024");
// 		  event.preventDefault();
// 		  if (event.deltaX > 0 || event.deltaY < 0) {
// 				$(this).slick("slickNext");
// 			} else if (event.deltaX < 0 || event.deltaY > 0) {
// 				$(this).slick("slickPrev");
// 			}
// 	  // }
// 	});
// }

