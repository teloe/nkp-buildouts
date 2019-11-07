jQuery(document).ready(function ($) {

    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 960,
        menuLabel: 'Menu',
        phoneBtn: '925-930-0888',
        locationBtn: 'https://goo.gl/maps/YHBPvgk7da8ngbzq8'
    });

    $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false
    });

});
