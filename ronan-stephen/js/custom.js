jQuery(document).ready(function($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '925-736-5757',
        locationBtn: 'https://goo.gl/maps/X5VwjvcvCqewF8EX9',
        closeBtn: true,
    });

    $(window).on('scroll', function() {
        $('#nav-wrapper').addClass('fixed');
        if ($(this).scrollTop() < 300) {
            $('#nav-wrapper').removeClass('fixed');
        }
    });

    $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: true,
    });

    $('#doctors-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false,
        slideshowSpeed: 10000
    });

    $('#testimonials-slider').flexslider({
        animation: 'slide',
        directionNav: false,
        controlNav: false
    });

    /* function checkWidth() {
        if ( $(window).width() > 767 ) {
            $('.doctors > .grid-container > div').addClass('doctors-slider');
            $('.doctors-slider').flexslider({
                animation: 'fade',
                directionNav: false,
                controlNav: false,
            });
        }
        else {
            $('.doctors > .grid-container > div').removeClass('doctors-slider');
        }
    }
    checkWidth();
    $(window).resize(checkWidth); */

});
