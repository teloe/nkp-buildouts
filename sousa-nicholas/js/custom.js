jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '248-256-5223',
        locationBtn: '123 Main St',
        closeBtn: true,
    });

    let menuTop = $('.menu-wrapper').offset().top;
    $(window).on('scroll', () => {
        $('.menu-wrapper').addClass('stuck');
        if ($(this).scrollTop() < menuTop) {
            $('.menu-wrapper').removeClass('stuck');
        }
    });

    $(window).on('scroll', () => {
        $('#toTop').addClass('show');
        if ($(this).scrollTop() < 300) {
            $('#toTop').removeClass('show');
        }
    });

    $('#toTop').on('click', (e) => {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    $('#gallery-slider').flexslider({
        animation: 'slide',
        directionNav: true,
        controlNav: true,
        manualControls: '.controls ul li a',
        prevText: '',
        nextText: '',
        slideshowSpeed: 5000,
    });
});
