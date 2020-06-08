jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 960,
        menuLabel: 'Menu',
        phoneBtn: '',
        locationBtn: '',
    });

    $('#open-menu').on('click', function () {
        $('#menu-content').addClass('open');
        $('#nav-overlay-close').addClass('active');
    });
    $('#close-menu, #nav-overlay-close').on('click', function () {
        $('#menu-content').removeClass('open');
        $('#nav-overlay-close').removeClass('active');
    });

    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            $('#menu-content').removeClass('open');
            $('#nav-overlay-close').removeClass('active');
        }
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

    $('#banner-slider').flexslider({
        animation: 'slide',
        directionNav: false,
        controlNav: true,
    });
});
