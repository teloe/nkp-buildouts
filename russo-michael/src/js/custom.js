jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '714-861-4666',
        locationBtn: 'https://goo.gl/maps/Y4LqAJrG8fkfgSxM6',
        closeBtn: true,
    });

    $(window).on('scroll', function () {
        $('#main-nav').addClass('stuck');
        if ($(this).scrollTop() < 400) {
            $('#main-nav').removeClass('stuck');
        }
    });

    $('#gallery-slider').flexslider({
        animation: 'fade',
        directionNav: true,
        controlNav: false,
        prevText: '',
        nextText: '',
    });

    $('#testimonials-slider').flexslider({
        animation: 'fade',
        directionNav: true,
        controlNav: false,
        prevText: '',
        nextText: '',
    });
});
