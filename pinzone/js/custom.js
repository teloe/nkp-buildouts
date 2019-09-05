jQuery(document).ready(function ($) {

    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 767,
        menuLabel: 'Menu',
        phoneBtn: '',
        locationBtn: ''
    });

    var navTop = $('nav').offset().top;
    $(window).scroll(function() {
        if ( $(this).scrollTop() > navTop ) {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });

    $('.testimonials-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false
    });

    /* $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false
    }); */


});
