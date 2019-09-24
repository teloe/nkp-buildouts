jQuery(document).ready(function ($) {

    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 960,
        menuLabel: 'Menu',
        phoneBtn: '334-558-0262',
        locationBtn: 'https://goo.gl/maps/HaRorjqrWnVdguUE7'
    });

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 30) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });

    $('.bxa-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: true,
        manualControls: ".custom-control--nav li"
    });

    /* $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false
    }); */

});
