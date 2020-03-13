jQuery(document).ready(function($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 960,
        menuLabel: 'Menu',
        mobileMenu: true,
    });

    $('#main-menu').on('click touchstart', function() {
        $(this).toggleClass('active');
        $('#main-nav').toggleClass('active');
        $('#nav-overlay-close').toggleClass('active');
    });

    $('#nav-overlay-close, .close-btn').on('click touchstart', function() {
        $('#main-nav').toggleClass('active');
        $('#main-menu').removeClass('active');
        $('#nav-overlay-close').removeClass('active');
    });

    /* $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false,
    }); */
});
