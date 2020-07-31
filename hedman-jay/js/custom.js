jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 99999,
        menuLabel: 'Menu',
        phoneBtn: '',
        locationBtn: '',
        mobileMenu: true,
    });

    $(window).on('scroll', function () {
        $('header').addClass('stuck');
        if ($(this).scrollTop() === 0) {
            $('header').removeClass('stuck');
        }
    });

    $('#open-menu').on('click', function () {
        $('#main-menu').addClass('open');
        $('#nav-overlay-close').addClass('open');
    });

    $('#close-menu, #nav-overlay-close').on('click', function () {
        $('#main-menu').removeClass('open');
        $('#nav-overlay-close').removeClass('open');
    });

    $('#testimonials-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                // mobile
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});
