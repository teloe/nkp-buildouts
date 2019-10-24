jQuery(document).ready(function ($) {

    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1004,
        menuLabel: '<span>Menu</span>',
        phoneBtn: '817-731-5330',
        locationBtn: 'https://goo.gl/maps/P6wyw6oL9Wtokmef6'
    });

    $('.video-overlay').on('click', function() {
        $(this).fadeOut();
        $('#dr-vid')[0].play();
    });

    /* $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false
    }); */

});
