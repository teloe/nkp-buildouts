jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 959,
        menuLabel: 'Menu',
        phoneBtn: '',
        locationBtn: '',
    });

    $('.hamburger').on('click', function () {
        $(this).toggleClass('is-active');
        $('#main-nav').toggleClass('open');
    });

    $(window).on('scroll', () => {
        $('header').addClass('scroll');
        if ($(this).scrollTop() === 0) {
            $('header').removeClass('scroll');
        }
    });

    $('#testimonials-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: true,
    });
    
    $('#about-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false,
    });

});
