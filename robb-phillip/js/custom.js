jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '470-336-1850',
        locationBtn: 'https://goo.gl/maps/JagT79xZjsWKWBC79',
        closeBtn: true,
    });

    let navTop = $('header .bottom').offset().top;
    $(window).on('scroll', function () {
        $('header .bottom').addClass('stuck');
        if ($(this).scrollTop() < navTop) {
            $('header .bottom').removeClass('stuck');
        }
    });

    $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false,
    });
});
