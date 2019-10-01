$(document).ready(function() {
	$(".hero-carousel").slick({
		arrows: false,
		dots: true,
		infinite: true,
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
		speed: 400,
		slidesToShow: 1
	});
});
