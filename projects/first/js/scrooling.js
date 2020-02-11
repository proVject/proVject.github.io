/* ---------------------------------------------- /*
 * Smooth scroll / Scroll To Top
/* ---------------------------------------------- */

$(document).ready(function() {
	$('a[href*=#]').bind("click", function(e){         
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 500);
		e.preventDefault();
	});
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.scroll-up').fadeIn();
		} else {
			$('.scroll-up').fadeOut();
		}
	});
});
