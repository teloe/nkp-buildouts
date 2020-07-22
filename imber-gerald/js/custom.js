jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '212-472-1800',
        locationBtn: 'https://goo.gl/maps/hevSSFtLuiWo6hJu6',
        closeBtn: true,
    });

    var navTop = $('#main-nav').offset().top;
    $(window).on('scroll', function () {
        $('#main-nav').addClass('stuck');
        if ($(this).scrollTop() < navTop) {
            $('#main-nav').removeClass('stuck');
        }
    });

    /* $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false,
    }); */
});
