jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '',
        locationBtn: '',
        // position: left,
    });

    $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false,
    });
});
