jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        // showArrows: false,
        breakpoint: 1024,
        menuLabel: '<span>Menu</span>',
        // phoneBtn: '',
        // locationBtn: '',
        position: 'left',
    });

    var navTop = $('#desktop-nav').offset().top;
    $(window).on('scroll', function () {
        $('#desktop-nav').addClass('sticky');
        if ($(this).scrollTop() <= navTop) {
            $('#desktop-nav').removeClass('sticky');
        }
    });

    $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false,
    });
});
