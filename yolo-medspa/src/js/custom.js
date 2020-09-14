jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '203-533-4560',
        locationBtn: 'https://goo.gl/maps/38htVErpHw3fC2aH6',
        closeBtn: true,
    });

    $(window).on('scroll', function () {
        $('#main-nav').addClass('stuck');
        if ($(this).scrollTop() < 400) {
            $('#main-nav').removeClass('stuck');
        }
    });

    $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false,
    });
});
