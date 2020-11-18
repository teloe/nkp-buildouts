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

    $(window).on('scroll', checkTop);

    $(window).on('scroll', function () {
        const scroll = $(window).scrollTop();
        $('#banner > img').css({
            transform:
                'translate3d(-50%, -' +
                scroll / 100 +
                '%, 0) scale(' +
                (100 + scroll / 20) / 100 +
                ')',
        });
        // $('#banner .grid-100').css('opacity', 1 - $(this).scrollTop() / 500);
    });

    $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false,
    });
});
