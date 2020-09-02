jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '',
        locationBtn: '',
    });

    $(window).on('scroll', function () {
        $('header').addClass('stuck');
        if ($(this).scrollTop() === 0) {
            $('header').removeClass('stuck');
        }
    });

    $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false,
    });
});
