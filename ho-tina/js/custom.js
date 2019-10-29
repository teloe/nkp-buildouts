jQuery(document).ready(function ($) {

    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: '<span>Menu</span>',
        phoneBtn: '484.254.6564',
        locationBtn: 'https://goo.gl/maps/xnb42ebNPteL9zfw8',
        closeBtn: true,
        closeLabel: ''
    });

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 0) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });

    /* $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false
    }); */

});
