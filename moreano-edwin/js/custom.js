jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '718-478-2852',
        locationBtn: 'https://goo.gl/maps/QnfViVd6WQwRdB1k9',
        closeBtn: true,
    });

    $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false,
    });

    let $nav = $('#main-nav'),
        $navTop = $('#main-nav').offset().top;
    $(window).on('scroll', function () {
        $nav.addClass('sticky');
        if ($(this).scrollTop() < $navTop + 30) {
            $nav.removeClass('sticky');
        }
    });
});
