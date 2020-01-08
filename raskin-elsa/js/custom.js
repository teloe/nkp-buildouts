jQuery(document).ready(function($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: '<span>Menu</span>',
        phoneBtn: '203-861-6620',
        locationBtn: 'https://goo.gl/maps/m9Dt2QHDBFARZ9n46',
    });

    // sticky nav
    function checkWidth() {
        let lastScrollTop = 0;
        $(window).on('scroll', function() {
            if ($(window).width() > 1024) {
                let st = $(this).scrollTop();
                if (st > lastScrollTop) {
                    $('nav').css('transform', 'translateY(-100%)');
                } else {
                    $('nav').css('transform', 'translateY(0)');
                }
                lastScrollTop = st;
            }
        });
    }
    checkWidth();
    $(window).resize(checkWidth);

    $('#procs-slider').flexslider({
        animation: 'fade',
        directionNav: true,
        controlNav: true,
        manualControls: '.controls ul li',
        prevText: '',
        nextText: '',
    });

    $('#testimonials-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: true,
    });
});
