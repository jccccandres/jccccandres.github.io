$(function(){
	let nav_visible = 0;

	$(document).scroll(function() {
		if (!$(".navbar").hasClass('change-bg') && $(this).scrollTop() >= $("header").height()) {
			$(".navbar").addClass('change-bg');
		}
		else if (nav_visible == 0 && $(this).scrollTop() <= $("header").height()) {
			$(".navbar").removeClass('change-bg');
		}
	});
	
	$(".navbar-toggle").on("click", () => {
		$(".main-nav").animate({
			height: 'toggle'
		}, "slow");

		if (nav_visible == 0) {
			nav_visible = 1;
			$(".navbar").addClass('change-bg');
		}
		else {
			nav_visible = 0;
			if ($(this).scrollTop() < $("header").height()) {
				$(".navbar").removeClass('change-bg');
			}
		}

		
	});


	const sliders = $(".sliders");
	let slider_index = 1;
	showSlider(slider_index);

	$(".prev-slide").on("click", () => {
		slider_index = slider_index - 1;
		if ( slider_index <= 0) {
			slider_index = sliders.length;
		}
		showSlider(slider_index);
	});

	$(".next-slide").on("click", () => {
		slider_index = slider_index + 1;
		if ( slider_index > sliders.length) {
			slider_index = 1;
		}
		showSlider(slider_index);
	});

	function showSlider(index) {
		$(".sliders").removeClass("show");
		$(".sliders:nth-child(" + index + ")").addClass("show");
	}

	$(".main-nav li a").on("click", function(){
		const attr_val = $(this).attr('href');
		// const position = $(attr_val).offset().top;
		$('html, body').animate({scrollTop: $(attr_val).offset().top - 70 }, 100);
	});
});