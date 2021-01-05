jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '469-489-7000',
        locationBtn: 'https://goo.gl/maps/AcuHioWaaavDnoe77',
        closeBtn: true,
        showArrows: true,
    });

    // Scroll functions
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

    $('.accordion-content').hide();
    $('.accordion .panel:first-of-type .accordion-content').show();
    $('.accordion .panel:first-of-type .accordion-title').addClass('active');
    $('.accordion-title').on('click', function () {
        $(this)
            .parent()
            .find('.accordion-title')
            .toggleClass('active')
            .siblings('.accordion-content')
            .slideToggle();
        $(this)
            .parent()
            .siblings('.panel')
            .find('.accordion-title')
            .removeClass('active')
            .siblings('.accordion-content')
            .slideUp();
    });

    $('.carousel').slick({
        slidesToShow: 2,
        // centerPadding: 0,
        slidesToScroll: 1,
        autoplay: false,
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

    // $('.testimonials-slider').flexslider({
    // animation: 'slide',
    // directionNav: false,
    // controlNav: true,
    // });
});
