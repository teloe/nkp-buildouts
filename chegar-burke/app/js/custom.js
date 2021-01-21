jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '317-818-5438',
        locationBtn: 'https://goo.gl/maps/3bqV2fokJgMpSf4M6',
        closeBtn: true,
    });

    function checkTop() {
        const header = $('header');
        header.addClass('stuck');
        if ($(window).scrollTop() === 0) {
            header.removeClass('stuck');
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

    $('#services-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: true,
        manualControls: '.controls li',
    });

    $('.carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
        speed: 600,
        autoplaySpeed: 5000,
        responsive: [
            {
                // tablet & mobile
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});
