jQuery(document).ready(function ($) {
    $('#menu-btn').on('click', function () {
        $(this).toggleClass('open');
        $('#nav-overlay').toggleClass('open');
    });

    $(window).on('scroll', function () {
        $('#nav-overlay').addClass('scroll');
        if ($(this).scrollTop() === 0) {
            $('#nav-overlay').removeClass('scroll');
        }
    });

    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 99999999,
        menuLabel: 'Menu',
        phoneBtn: '',
        locationBtn: '',
        mobileMode: true,
    });

    $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false,
    });
});
