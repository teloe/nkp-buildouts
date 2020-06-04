jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 960,
        menuLabel: 'Menu',
        phoneBtn: '',
        locationBtn: '',
    });

    $(window).on('scroll', function () {
        $('#main-nav').addClass('scroll');
        $('#main-nav .logo')
            .empty()
            .append('<img class="img-resp" src="images/logo.png">');
        if ($(this).scrollTop() === 0) {
            $('#main-nav').removeClass('scroll');
            $('#main-nav .logo')
                .empty()
                .append('<img class="img-resp" src="images/logo-white.png">');
        }
    });

    $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false,
    });
});
