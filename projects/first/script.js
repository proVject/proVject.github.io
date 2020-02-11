// video

$('.list-item').click( function () {
	// to choose video
	$('iframe').attr('src', $('.list-item.active').data('src'));

	// to change title over video 
	$('.video_title h3').text($('.list-item.active').data('title'));
});

// carousel
$('.carousel').carousel({
	interval: 11000
});

