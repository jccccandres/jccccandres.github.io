$(function(){
	$(document).scroll(function() {
		$(".navbar").toggleClass('change-bg', $(this).scrollTop() > $("header").height());
	});
});