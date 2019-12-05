jQuery(document).ready(function($) {

    $('.stellarnav').stellarNav({
        showArrows:false,
        breakpoint:1024,
        menuLabel:'<span>Menu</span>',
        phoneBtn:'850-476-3223',
        locationBtn:'https://goo.gl/maps/hggQ69mAqTCE4Wwu8'
    });

    $('a.btn, button.btn').append('<span></span>');
    $('.stellarnav > ul > li > a').append('<span></span>');

    const sliderTop = $('#slider').offset().top;
    $(window).on('scroll', function() {
        $('header').addClass('sticky');
        if ( $(this).scrollTop() < sliderTop ) {
            $('header').removeClass('sticky');
        }
    });

    /* $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false
    }); */

});
