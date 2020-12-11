jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '',
        locationBtn: '',
    });

    function checkTop() {
        const nav = $('nav');
        nav.addClass('stuck');
        if ($(window).scrollTop() === 0) {
            nav.removeClass('stuck');
        }
    }
    checkTop();

    function bannerScroll() {
        const scroll = $(window).scrollTop();
        $('#banner > img').css({
            transform:
                'translate3d(-50%, -' +
                scroll / 100 +
                '%, 0) scale(' +
                (100 + scroll / 20) / 100 +
                ')',
        });
    }
    bannerScroll();

    function animateOnScroll() {
        const windowBottom = $(this).scrollTop() + $(this).innerHeight();
        // const windowTop = $(this).scrollTop() + 64;
        $('.scroll').each(function () {
            const objectBottom = $(this).offset().top + $(this).innerHeight();
            // const objectTop = $(this).offset().top;

            $(this).removeClass('visible');
            if (objectBottom < windowBottom) {
                // if (!$(this).hasClass('visible')) {
                $(this).addClass('visible');
                // }
            }
            // if (objectTop < windowTop) {
            // $(this).removeClass('visible');
            // }
        });
    }
    animateOnScroll();

    $(window).on('scroll', checkTop);
    $(window).on('scroll', bannerScroll);
    $(window).on('scroll', animateOnScroll);

    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            $('#main-menu').removeClass('open');
        }
    });

    $('.hamburger').on('click', function () {
        $(this).toggleClass('is-active');
    });

    $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false,
    });
});
