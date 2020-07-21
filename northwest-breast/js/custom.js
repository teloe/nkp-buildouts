jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '555-555-5555',
        locationBtn: 'https://goo.gl/maps/VdKfSZcWoZAZy1aY6',
        closeBtn: true,
    });

    $(window).on('scroll', function () {
        $('header').addClass('stuck');
        if ($(this).scrollTop() === 0) {
            $('header').removeClass('stuck');
        }
    });

    $('#testimonials-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false,
    });

    $('#media-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false,
    });
});
