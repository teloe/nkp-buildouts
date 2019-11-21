jQuery(document).ready(function ($) {

    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 99999,
        mobileMode: true,
        menuLabel: 'Menu',
        phoneBtn: '',
        locationBtn: ''
    });

    $('.menu-toggle').on('click', function () {
        $(this).toggleClass('active');
        $('#main-nav').toggleClass('open');
    });

    /* $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false
    }); */

});
