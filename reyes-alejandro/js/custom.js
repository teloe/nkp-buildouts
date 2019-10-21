jQuery(document).ready(function ($) {

    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 959,
        menuLabel: '<span>Menu</span>',
        phoneBtn: '1-656-611-6185',
        locationBtn: 'https://goo.gl/maps/EGdeTZWo6HDJPAzy9'
    });

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 0) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });

    $('.procs-slider').flipster({
        style: 'carousel',
        spacing: -0.5,
        nav: true
    });

    $('.testimonials-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: true,
        manualControls: '.controls li a'
    });
    
    /* $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false
    }); */

});
