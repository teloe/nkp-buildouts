jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 9999999,
        menuLabel: 'Menu',
        phoneBtn: '',
        locationBtn: '',
        mobileMenu: true,
    });

    $('#open-menu').on('click', function () {
        $('#main-menu').addClass('open');
        $('#main-menu .overlay').addClass('show');
    });

    $('#close-menu').on('click', function () {
        $('#main-menu').removeClass('open');
        $('#main-menu .overlay').removeClass('show');
        $('#main-menu .stellarnav li.has-sub').removeClass('open');
        $('#main-menu .stellarnav li.has-sub > ul').css('display', 'none');
    });

    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            $('#main-menu').removeClass('open');
            $('#main-menu .overlay').removeClass('show');
            $('#main-menu .stellarnav li.has-sub').removeClass('open');
            $('#main-menu .stellarnav li.has-sub > ul').css('display', 'none');
        }
    });

    $(window).on('scroll', function () {
        $('header').addClass('stuck');
        if ($(this).scrollTop() === 0) {
            $('header').removeClass('stuck');
        }
    });

    $('#menu-desktop-menu > li > ul > li').addClass('title');

    $('#services-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: true,
        manualControls: '.controls li',
    });

    $('#testimonials-carousel').slick({
        slidesToShow: 3,
        centerPadding: 0,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 8000,
        centerMode: true,
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
