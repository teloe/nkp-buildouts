jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '905-493-6832',
        locationBtn: 'https://goo.gl/maps/nCRAm65gf6KFAsUNA',
        closeBtn: true,
    });

    const header = $('header');
    const menuTop = header.offset().top;

    function checkTop() {
        header.addClass('stuck');
        if ($(window).scrollTop() < menuTop) {
            header.removeClass('stuck');
        }
    }
    checkTop();

    $(window).on('scroll', checkTop);

    // $('#slider').flexslider({
    //     animation: 'fade',
    //     directionNav: false,
    //     controlNav: false,
    // });

    $('.carousel').slick({
        slidesToShow: 3,
        centerPadding: 0,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
        speed: 600,
        autoplaySpeed: 5000,
        responsive: [
            {
                // tablet & mobile
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});
