$(document).ready(function() {
	$(".hero-carousel").slick({
		arrows: false,
		dots: true,
		draggable: false,
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
		disable: window.innerWidth < 991
	});

	// Animate numbers
	function isScrolledIntoView(el) {
		var elemTop = el.getBoundingClientRect().top;
		var elemBottom = el.getBoundingClientRect().bottom;

		isVisible = elemTop < window.innerHeight && elemBottom >= 0;
		return isVisible;
	}

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
