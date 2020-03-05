jQuery(document).ready(function($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 9999999,
        menuLabel: 'Menu',
        /* phoneBtn: '0207-487-0910',
        locationBtn: 'https://goo.gl/maps/wUBqRaLzxrLtza8P6', */
        mobileMode: true,
    });

    $('.hamburger').on('click', function() {
        $(this).toggleClass('is-active');
        $('#main-nav').toggleClass('active');
        $('#nav-overlay-close').toggleClass('active');
    });

    $('#nav-overlay-close').on('click', function() {
        $('#main-nav').toggleClass('active');
        $('.hamburger').removeClass('is-active');
        $('#nav-overlay-close').removeClass('active');
    });

    $('#testimonials-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false,
    });
});
