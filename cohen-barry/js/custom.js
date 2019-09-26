jQuery(document).ready(function ($) {

    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 960,
        menuLabel: 'Menu',
        phoneBtn: '',
        locationBtn: ''
    });

    $('.open-nav').on('click', function() {
        $('#main-nav').css('transform', 'translateX(0)');
        $('#nav-overlay-close').css({
            'opacity': 1,
            'visibility': 'visible'
        });
    });

    $('.close-btn, #nav-overlay-close').on('click', function () {
        $('#main-nav').css('transform', 'translateX(450px)');
        $('#nav-overlay-close').css({
            'opacity': 0,
            'visibility': 'hidden'
        });
    });

    $('.testimonials-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false,
        // manualControls
    });
    
    /* $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false
    }); */

});
