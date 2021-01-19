jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '520-447-1772',
        locationBtn: 'https://goo.gl/maps/eKTJ2Mmy6b8KzD5J6',
        closeBtn: true,
    });

    function checkTop() {
        const nav = $('.stellarnav');
        const navTop = $('#main-nav').offset().top;
        nav.addClass('stuck');
        if ($(this).scrollTop() < navTop) {
            nav.removeClass('stuck');
        }
    }
    checkTop();

    $(window).on('scroll', checkTop);

    $('#slider').flexslider({
        animation: 'fade',
        directionNav: true,
        controlNav: false,
        prevText: '',
        nextText: '',
    });
});
