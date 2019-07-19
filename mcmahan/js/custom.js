jQuery(document).ready(function ($) {

    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 960,
        menuLabel: 'Menu',
        phoneBtn: '',
        locationBtn: ''
    });

    $('.reviews-slider').flexslider({
        animation: "fade",
        directionNav: true,
        controlNav: false
    });

});
