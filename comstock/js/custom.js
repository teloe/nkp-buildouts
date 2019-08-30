jQuery(document).ready(function ($) {

    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 960,
        menuLabel: 'Menu',
        phoneBtn: '520-797-8885',
        locationBtn: 'https://goo.gl/maps/jRcWVdX9RbrBJp5x6'
    });

    $('.oval').on('mouseenter', function () {
        $(this).next('.blurb').show();
    });

    $('.blurb').on('mouseleave', function () {
        $(this).hide();
    });

    /* $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false
    }); */

});
