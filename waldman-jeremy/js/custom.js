jQuery(document).ready(function($) {

    $('.stellarnav').stellarNav({
        showArrows:false,
        breakpoint:1024,
        menuLabel:'<span>Menu</span>',
        phoneBtn:'603-577-5559',
        locationBtn:'https://goo.gl/maps/mBZf7AxxB7hTLBhj9',
        closeBtn: true
    });

    // sticky nav
    function checkWidth() {
        let lastScrollTop = 0;
        $(window).on('scroll', function() {
            if ($(window).width() > 1024) {
                let st = $(this).scrollTop();
                $('nav').css('transform', 'translateY(0)');
                if (st > lastScrollTop) {
                    $('nav').css('transform', 'translateY(-100%)');
                }
                lastScrollTop = st;
            }
            $('nav').addClass('bg-color');
            if ( $(this).scrollTop() === 0 ) {
                $('nav').removeClass('bg-color');
            }
        });
    }
    checkWidth();
    $(window).resize(checkWidth);

    $('#testimonials-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false
    });

});
