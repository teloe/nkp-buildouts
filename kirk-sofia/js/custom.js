jQuery(document).ready(function ($) {

    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: '<span>Menu</span>',
        phoneBtn: '904-260-2001',
        locationBtn: 'https://goo.gl/maps/MbXnmtWqKCaebmrm8'
    });

    // sticky nav
    let lastScrollTop = 0;
    if ($(window).width() > 1024) {
        $(window).on('scroll', function () {
            let st = $(this).scrollTop();
            if (st > lastScrollTop) {
                // downscroll code
                $('nav').css('transform', 'translateY(-100%)');
            } else {
                // upscroll code
                $('nav').css('transform', 'translateY(0)');
            }
            lastScrollTop = st;
        });
    }

    $('#procs-slider').flexslider({
        animation: 'fade',
        directionNav: true,
        controlNav: true,
        prevText: '',
        nextText: '',
        manualControls: '.slider-controls li'
    });

    $('.dg-wrapper .content .fa-play').magnificPopup({
        items: {
            src: '.popup'
        },
        type: 'iframe',
        mainClass: 'mfp-fade'
    });

    /* $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false
    }); */


});

