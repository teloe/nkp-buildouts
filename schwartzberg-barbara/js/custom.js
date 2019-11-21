jQuery(document).ready(function ($) {

    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 99999,
        mobileMode: true,
        menuLabel: 'Menu',
        phoneBtn: '',
        locationBtn: ''
    });

    $('#main-menu, #nav-overlay-close').on('click', function () {
        $('#main-menu').toggleClass('active');
        $('#nav-overlay-close').toggleClass('active');
        $('#main-nav').toggleClass('open');
    });

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 0) {
            $('header').addClass('sticky');    
        } else {
            $('header').removeClass('sticky');
        }
    });

    $('.services-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false
    });

    /* $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false
    }); */

});
