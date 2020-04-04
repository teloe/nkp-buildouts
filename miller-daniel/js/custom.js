jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '503-667-2400',
        locationBtn: 'https://goo.gl/maps/RbW2mEFLjUJytgc69',
        closeBtn: true,
    });

    $(window).on('scroll', function () {
        $('header').addClass('scroll');
        if ($(this).scrollTop() === 0) {
            $('header').removeClass('scroll');
        }
    });

    /* $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false,
    }); */
});
