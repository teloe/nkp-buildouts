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
        $('header').addClass('sticky');
        if ($(this).scrollTop() === 0) {
            $('header').removeClass('sticky');    
        }
    });

    $('.services-slider').flexslider({
        animation: 'fade',
        directionNav: true,
        controlNav: true,
        prevText: '',
        nextText: '',
        manualControls: '.controls ul li',
        slideshowSpeed: 10000
    });

    /* $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false
    }); */

});
