jQuery(document).ready(function ($) {

    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 767,
        menuLabel: 'Menu',
        phoneBtn: '888-580-5900',
        locationBtn: 'https://goo.gl/maps/8mFv5LBZwHqtuxnw5'
    });

    var nav = $('nav').offset().top;
    $(window).scroll(function() {
        if ( $(this).scrollTop() > nav ) {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });

    $('.testimonials-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false
    });

    /* $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false
    }); */

});
