jQuery(document).ready(function($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '925-736-5757',
        locationBtn: 'https://goo.gl/maps/X5VwjvcvCqewF8EX9',
        closeBtn: true,
    });

    $(window).on('scroll', function() {
        $('#nav-wrapper').addClass('fixed');
        if ($(this).scrollTop() < 300) {
            $('#nav-wrapper').removeClass('fixed');
        }
    });

    $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: true,
    });

    /* if ( $(window).width() >767 ) {
        $('#doctors-slider').addClass('doctors-slider');
    } */

    /* $('.doctors-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false,
    }); */
});
