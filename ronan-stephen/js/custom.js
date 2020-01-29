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
        if ($(this).scrollTop() > 350) {
            $('#nav-wrapper').addClass('fixed');
        } else {
            $('#nav-wrapper').removeClass('fixed');
        }
    });

    $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false,
    });
});
