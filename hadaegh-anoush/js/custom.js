jQuery(document).ready(function ($) {

    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 960,
        menuLabel: 'Menu',
        phoneBtn: '',
        locationBtn: ''
    });

    $(window).on('scroll', function() {
        if ( $(this).scrollTop() > 0 ) {
            $('#main-nav').addClass('sticky');
        } else {
            $('#main-nav').removeClass('sticky');
        }
    });

    $('.testimonials-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false
    });

    // $('#slider').flexslider({
    // animation: 'fade',
    // directionNav: false,
    // controlNav: false
    // });

});
