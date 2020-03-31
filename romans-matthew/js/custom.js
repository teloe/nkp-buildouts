jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '831-758-2746',
        locationBtn: 'https://goo.gl/maps/uQWqTDfM7pGvtAbL9',
        closeBtn: true,
    });

    /* $(window).on('scroll', function () {
        $('#main-nav').removeClass('scroll');
        if ($(this).scrollTop() > 0) {
            $('#main-nav').addClass('scroll');
        }
    }); */

    $('#testimonials-slider').flexslider({
        animation: 'slide',
        directionNav: true,
        controlNav: false,
        nextText: '',
        prevText: '',
    });
});
