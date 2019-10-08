/*!
 * awax v0.1.0
 * 
 * (c) 2019 Daniil Zhilin
 * MIT License
 * https://github.com/LaserMoai/awax
 */

$(document).ready((function() {
	$(".hero-carousel").slick({
		arrows: false,
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 500,
		slidesToShow: 1
	});

	$(".team__carousel").slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		speed: 400,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$(".clients__carousel").slick({
		arrows: false,
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: "ease-in-out",
		slidesToShow: 1
	});

	AOS.init({
		easing: "ease-in-out-back",
		once: true,
		duration: 1000,
		disable: window.innerWidth < 1200
	});

	// Animate numbers
	function isScrolledIntoView(el) {
		var elemTop = el.getBoundingClientRect().top;
		var elemBottom = el.getBoundingClientRect().bottom;

		isVisible = elemTop < window.innerHeight && elemBottom >= 0;
		return isVisible;
	}
}));

function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("projects__image-list-item");
	if (c == "all") {
		c = "";
	}
	// Add the "projects__image-list-item--show" class (display:block) to the filtered elements, and remove the "projects__image-list-item--show" class from the elements that are not selected
	for (i = 0; i < x.length; i++) {
		removeItemClass(x[i], "projects__image-list-item--show");
		if (x[i].className.indexOf(c) > -1) {
			addItemClass(x[i], "projects__image-list-item--show");
		}
	}
}

// Add filtering to project gallery

filterSelection("all");

// Show filtered elements
function addItemClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += " " + arr2[i];
		}
	}
}

// Hide elements that are not selected
function removeItemClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementsByClassName("projects__panel")[0];
var btns = btnContainer.getElementsByClassName("projects__button");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", (function() {
		var current = document.getElementsByClassName("projects__button--active");
		current[0].className = current[0].className.replace(
			" projects__button--active",
			""
		);
		this.className += " projects__button--active";
	}));
}
