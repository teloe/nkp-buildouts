jQuery(document).ready(function($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 999999,
        menuLabel: 'Menu',
        mobileMode: true,
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

    $(window).on('scroll', function() {
        $('#main-menu').addClass('scroll');
        if ($(this).scrollTop() === 0) {
            $('#main-menu').removeClass('scroll');
        }
    });

    $('.about .content').on('touchstart', function() {
        $(this).addClass('active');
        $(this)
            .find('.title')
            .css('opacity', '0');
    });

    /* $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false,
    }); */
});
