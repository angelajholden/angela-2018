jQuery(document).ready(function($) {

	var menu = $('.module__primary-menu');
	$('.menu-open').on('click', function(event) {
		menu.show();
	})
	$('.menu-close').on('click', function(event) {
		menu.hide();
	})

});