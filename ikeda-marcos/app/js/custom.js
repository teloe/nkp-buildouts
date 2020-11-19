jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '281.964.0000',
        locationBtn: 'https://goo.gl/maps/qMaeq29yxfhRpmXz5',
        closeBtn: true,
    });

    function checkTop() {
        const nav = $('nav');
        const navTop = $('#main-menu').offset().top;
        nav.addClass('stuck');
        if ($(window).scrollTop() < navTop) {
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

    $('#services-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: true,
        manualControls: '.controls li',
    });
});
