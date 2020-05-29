jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '555-555-5555',
        locationBtn: 'https://goo.gl/maps/suiHxQEjmcnvqLPm6',
        closeBtn: true,
    });

    $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false,
    });
});
