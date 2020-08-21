jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '386-689-5663',
        locationBtn: 'https://goo.gl/maps/SezYXRqKHcZWfFsZ7',
        closeBtn: true,
    });

    let navTop = $('#nav').offset().top;
    $(window).on('scroll', function () {
        $('#nav').addClass('stuck');
        if ($(this).scrollTop() < navTop) {
            $('#nav').removeClass('stuck');
        }
    });

    $('#slider').flexslider({
        animation: 'slide',
        directionNav: true,
        controlNav: true,
        prevText: '',
        nextText: '',
    });

    $('#testimonials-slider').flexslider({
        animation: 'slide',
        directionNav: true,
        controlNav: false,
        prevText: '',
        nextText: '',
        slideshow: false,
    });
});
