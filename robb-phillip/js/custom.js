jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '470-336-1850',
        locationBtn: 'https://goo.gl/maps/JagT79xZjsWKWBC79',
        closeBtn: true,
    });

    $(window).on('scroll', function () {
        $('header .bottom').addClass('stuck');
        if ($(this).scrollTop() < 300) {
            $('header .bottom').removeClass('stuck');
        }
    });

    function checkClick() {
        $(this)
            .siblings('.description')
            .slideToggle(300)
            .parent()
            .toggleClass('active')
            .siblings()
            .removeClass('active')
            .find('.description')
            .slideUp();
    }

    $('#proc-list li:first-of-type')
        .addClass('active')
        .find('.description')
        .show();
    $('#proc-list .title').on('click', checkClick);

    $('#gallery-slider').flexslider({
        animation: 'fade',
        directionNav: true,
        controlNav: true,
        manualControls: '.controls li',
        prevText: '',
        nextText: '',
        slideshow: false,
    });

    $('#reviews-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
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
