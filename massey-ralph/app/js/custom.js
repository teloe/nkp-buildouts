jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '310-434-2495',
        locationBtn: 'https://goo.gl/maps/LBoeGRjqHtzbej9s8',
        closeBtn: true,
    });

    function checkTop() {
        const nav = $('nav');
        const navTop = $('#main-nav').offset().top;
        nav.addClass('stuck');
        if ($(window).scrollTop() < navTop) {
            nav.removeClass('stuck');
        }
    }
    checkTop();

    $(window).on('scroll', checkTop);

    $('.open-nav').on('click', function (e) {
        e.preventDefault();
        $('#side-nav').addClass('open');
        $('.close-overlay').addClass('open');
    });

    function checkClose() {
        $('#side-nav .sub-menu').hide();
        $('#side-nav .toggle').removeClass('active');
        $('.close-overlay').removeClass('open');
    }

    $('.close-nav, .close-overlay').on('click', function (e) {
        e.preventDefault();
        $('#side-nav').removeClass('open');
        checkClose();
    });

    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            $('#side-nav').removeClass('open');
            checkClose();
        }
    });

    $('#side-nav .menu-item-has-children > a').after(
        '<a href="#" class="toggle"><i class="fas fa-chevron-down"></i></a>'
    );

    $('#side-nav .toggle').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active').siblings('.sub-menu').slideToggle(300);
    });

    $('#reviews-carousel').slick({
        slidesToShow: 3,
        centerPadding: 0,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
        speed: 600,
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
