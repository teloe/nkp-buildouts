jQuery(document).ready(function($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 999999,
        menuLabel: 'Menu',
        phoneBtn: '',
        locationBtn: '',
        mobileMode: true
    });

    $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false
    });
});
