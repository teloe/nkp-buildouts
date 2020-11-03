jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '212-889-8600',
        locationBtn: 'https://goo.gl/maps/PFgjKDiFjzEfC3ZU8',
        closeBtn: true,
    });

    const header = $('header');
    function checkTop() {
        header.addClass('stuck');
        if ($(window).scrollTop() === 0) {
            header.removeClass('stuck');
        }
    }
    checkTop();

    $(window).on('scroll', checkTop);

    $('.arrow').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate(
            {
                scrollTop: $($.attr(this, 'href')).offset().top,
            },
            500
        );
    });

    $('#conditions-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: true,
        manualControls: '.controls li',
    });
});
