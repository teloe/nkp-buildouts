jQuery(document).ready(function($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 9999999,
        menuLabel: 'Menu',
        /* phoneBtn: '0207-487-0910',
        locationBtn: 'https://goo.gl/maps/wUBqRaLzxrLtza8P6', */
        mobileMode: true,
    });

    $('.hamburger').on('click touchstart', function() {
        $(this).toggleClass('is-active');
        $('#main-nav').toggleClass('active');
        $('#nav-overlay-close').toggleClass('active');
    });

    $('#nav-overlay-close, .close-btn').on('click touchstart', function() {
        $('#main-nav').toggleClass('active');
        $('.hamburger').removeClass('is-active');
        $('#nav-overlay-close').removeClass('active');
    });

    $('#testimonials-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false,
    });

    $('.bxa-slider').flexslider({
        animation: 'slide',
        directionNav: true,
        controlNav: false,
        prevText: '',
        nextText: '',
    });

    $('.faq .content').hide();
    $('.faq .title').on('click', function() {
        $(this).siblings('.content').slideToggle(200);
        $(this).toggleClass('active');
    });
});
