jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '808-591-9111',
        locationBtn: 'https://goo.gl/maps/WgHgmZee7TXRbPtJ8',
        closeBtn: true,
    });

    $('.specialties-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: true,
    });

    $(document).on('click', '.arrow', function (event) {
        event.preventDefault();

        $('html, body').animate(
            {
                scrollTop: $($.attr(this, 'href')).offset().top - 120,
            },
            500
        );
    });
});
