$(document).ready(function() {
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

	// Add filtering to project gallery
	// init Isotope
	var $grid = $(".projects__image-list").isotope({});
	// filter items on button click
	$(".projects__panel").on("click", "button", function() {
		$(".projects__button--active").removeClass("projects__button--active");
		$(this).addClass("projects__button--active");

		var filterValue = $(this).attr("data-filter");
		$grid.isotope({
			filter: filterValue
		});
	});

	$(window).on("scroll", function() {
		if (isScrolledIntoView(document.getElementById("facts-card-list"))) {
			$(".fact-card__number").each(function() {
				$(this)
					.prop("Counter", 0)
					.animate(
						{
							Counter: $(this).data("value")
						},
						{
							duration: 2000,
							easing: "swing",
							step: function(now) {
								$(this).text(this.Counter.toFixed());
							}
						}
					);
			});

			// Unbind scroll event
			$(window).off("scroll");
		}
	});
});
