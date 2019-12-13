jQuery(document).ready(function($) {

    $('.stellarnav').stellarNav({
        showArrows:false,
        breakpoint:1024,
        menuLabel:'<span>Menu</span>',
        phoneBtn:'727-288-9988',
        locationBtn:'https://goo.gl/maps/Dc1UZ1tRJu6RCxJv9',
        closeBtn: true
    });

    $(window).on('scroll', function() {
        $('header').addClass('sticky');
        if ( $(this).scrollTop() < 120 ) {
            $('header').removeClass('sticky');
        }
    });

    /* $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false
    }); */

});
