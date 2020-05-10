$(function(){
	$(document).scroll(function() {
		$(".navbar").toggleClass('change-bg', $(this).scrollTop() > $("header").height());
	});

	$(".navbar-toggle").on("click", () => {
		$(".main-nav").toggleClass("active");
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
});