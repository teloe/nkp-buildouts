jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 999999,
        menuLabel: 'Menu',
        mobileMode: true,
        phoneBtn: '',
        locationBtn: '',
    });

    $('#open-menu').on('click', function () {
        $('#main-menu').addClass('open');
        $('#main-menu li.has-sub').removeClass('open');
        $('#main-menu ul.sub-menu').css('display', 'none');
    });

    $('#close-menu').on('click', function () {
        $('#main-menu').removeClass('open');
    });

    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            $('#main-menu').removeClass('open');
        }
    });

    $(window).on('scroll', function () {
        $('header').addClass('stuck');
        if ($(this).scrollTop() === 0) {
            $('header').removeClass('stuck');
        }
    });

    $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false,
    });

    $('.accordion-content').hide();
    $('.accordion .panel:first-of-type .accordion-content').show();
    $('.accordion .panel:first-of-type .accordion-title').addClass('active');
    $('.accordion-title').on('click', function () {
        $(this)
            .parent()
            .find('.accordion-title')
            .toggleClass('active')
            .siblings('.accordion-content')
            .slideToggle(300);
        $(this)
            .parent()
            .siblings('.panel')
            .find('.accordion-title')
            .removeClass('active')
            .siblings('.accordion-content')
            .slideUp(300);
    });

    $('#reviews-carousel').slick({
        slidesToShow: 3,
        centerPadding: 0,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
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
