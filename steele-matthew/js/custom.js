jQuery(document).ready(function ($) {

    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1004,
        menuLabel: '<span>Menu</span>',
        phoneBtn: '817-731-5330',
        locationBtn: 'https://goo.gl/maps/P6wyw6oL9Wtokmef6'
    });

    $(window).on('scroll', function(){
        if ( $(this).scrollTop() > 250 ) {
            $('#logo img').css('height', '96px');
        } else {
            $('#logo img').css('height', '144px');
        } 
    });

    $('.video-overlay').on('click', function() {
        $(this).fadeOut();
        $('#dr-vid')[0].play();
    });

    $('.bxa-slider').flexslider({
        animation: 'fade',
        directionNav: true,
        controlNav: true,
        prevText: '',
        nextText: ''
    });

    $('.bxa-slider').magnificPopup({
		delegate: '.bxa-img',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
		}
	});

    /* $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false
    }); */

});
