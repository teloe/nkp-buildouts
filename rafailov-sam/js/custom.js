jQuery(document).ready(function($) {

    $('.stellarnav').stellarNav({
        showArrows:false,
        breakpoint:1023,
        menuLabel:'<span>Menu</span>',
        phoneBtn:'555-949-7799',
        locationBtn:'https://goo.gl/maps/JiDTWfHkyv36Sfk67'
    });

    // let nav = $('#main-nav').offset().top;
    $(window).on('scroll', function() {
        if ( $(this).scrollTop() > 200 ) {
            $('#main-nav').addClass('sticky');
        } else {
            $('#main-nav').removeClass('sticky');
        }
    });

    /* $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false
    }); */

});
