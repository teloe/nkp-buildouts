jQuery(document).ready(function ($) {

    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 960,
        menuLabel: 'Menu',
        phoneBtn: '',
        locationBtn: ''
    });

    let nav = $('nav').offset().top;
    $(window).scroll(function () {
        if ($(this).scrollTop() > nav) {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });

    /* $('#slider').flexslider({
	    animation: "fade",
	    directionNav: false,
	    controlNav: false
	}); */

});
