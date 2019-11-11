jQuery(document).ready(function ($) {

    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1023,
        position: 'right',
        menuLabel: '<span>Menu</span>',
        phoneBtn: '925-930-0888',
        locationBtn: 'https://goo.gl/maps/YHBPvgk7da8ngbzq8'
    });

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 150) {
            $('#main-nav').addClass('sticky');
        } else {
            $('#main-nav').removeClass('sticky');
        }
    });

    $('.video').magnificPopup({
        items: {
            src: 'https://www.youtube.com/watch?v=7B0bA89IufI'
        },
        type: 'iframe'
    });

    $('#testimonials-slider').flexslider({
        animation: 'fade',
        directionNav: true,
        prevText: '',
        nextText: '',
        controlNav: false
    });

    /* $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false
    }); */

});
