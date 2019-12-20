jQuery(document).ready(function($) {

    $('.stellarnav').stellarNav({
        showArrows:false,
        breakpoint:1024,
        menuLabel:'<span>Menu</span>',
        phoneBtn:'904-260-2001',
        locationBtn:'https://goo.gl/maps/MbXnmtWqKCaebmrm8'
    });

    $(window).on('scroll', function() {
        $('nav').addClass('sticky');
        if ( $(this).scrollTop() === 0 ) {
            $('nav').removeClass('sticky');
        }
    });

    /* $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false
    }); */

});
