jQuery(document).ready(function ($) {

    $('.stellarnav').stellarNav({
        showArrows: false,
        mobileMenu: true,
        breakpoint: 9999,
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
        directionNav: true,
        controlNav: true,
        prevText: '',
        nextText: ''
        // manualControls: '.custom-nav--controls li a' 
    });

    $('.testimonials-slider .flex-prev').append('<i class="fas fa-chevron-left"></i>');
    $('.testimonials-slider .flex-next').append('<i class="fas fa-chevron-right"></i>');

    $('.flex-control-nav a').empty();
    
    /* $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false
    }); */

});
