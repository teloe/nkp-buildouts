jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '919-567-6133',
        locationBtn: 'https://goo.gl/maps/5x2oWHnhbQLyv8r88',
        closeBtn: true,
    });

    // Scroll functions
    function checkTop() {
        const navTop = $('#main-nav').offset().top;
        const nav = $('.stellarnav');
        nav.addClass('stuck');
        if ($(window).scrollTop() <= navTop) {
            nav.removeClass('stuck');
        }
    }
    checkTop();

    function animateOnScroll() {
        const windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $('.scroll').each(function () {
            const objectBottom = $(this).offset().top + $(this).innerHeight();

            $(this).removeClass('visible');
            if (objectBottom < windowBottom) {
                $(this).addClass('visible');
            }
        });
    }
    animateOnScroll();

    $(window).on('scroll', checkTop);
    $(window).on('scroll', animateOnScroll);

    // Sliders
    $('.services-slider').flexslider({
        animation: 'fade',
        directionNav: true,
        controlNav: true,
        manualControls: '.controls li',
        prevText: '',
        nextText: '',
    });

    $('.testimonials-slider').flexslider({
        animation: 'fade',
        directionNav: true,
        controlNav: false,
        prevText: '',
        nextText: '',
    });
});
