jQuery(document).ready(function ($) {

    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 959,
        menuLabel: '<span>Menu</span>',
        phoneBtn: '1-656-611-6185',
        locationBtn: 'https://goo.gl/maps/EGdeTZWo6HDJPAzy9'
    });

    $(window).on('scroll', function() {
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
