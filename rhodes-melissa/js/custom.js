jQuery(document).ready(function($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '615-810-8785',
        locationBtn: 'https://goo.gl/maps/E99JvHfeGYTtzuAj7',
        closeBtn: true,
    });

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 350) {
            $('#main-nav').addClass('fixed');
        } else {
            $('#main-nav').removeClass('fixed');
        }
    });

    $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: true,
    });

    $('.procs .content').on('click', function() {
        $(this).removeClass('active');
        $(this).addClass('active');
    });
});
