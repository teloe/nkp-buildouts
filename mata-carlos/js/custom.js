jQuery(document).ready(function ($) {

    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1240,
        menuLabel: 'Menu',
        phoneBtn: '',
        locationBtn: ''
    });

    $('#slider').flexslider({
        animation: 'slide',
        directionNav: false,
        controlNav: false
    });

});
