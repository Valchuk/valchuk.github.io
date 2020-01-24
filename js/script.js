var $html = $('html'),
	$body = $('body');

(function($) {

  	$mainSlider = $('.main-slider');
	$bgSlider = $('.slider-background');
	$menuBtn = $('.header__menu-btn');
	$menu = $('.header-bottom')

	if ($mainSlider.length) {
		$mainSlider.slick({
			dots: true,
			arrow: true,
			fade: true,
			infinite: true,
			speed: 700,
			asNavFor: '.slider-background',
			prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="icon-arrow"></i></button>',
			nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="icon-arrow"></i></button>'
		});

		$bgSlider.slick({
			dots: false,
			arrow: false,
			fade: true,
			infinite: true,
			speed: 700,
			asNavFor: '.main-slider',
		});
	}

	$menuBtn.on('click', function () {
		$(this).toggleClass('open');
		$menu.toggleClass('open');
		$($menu.find('li')[0]).toggleClass('active');
	})


})(jQuery);

