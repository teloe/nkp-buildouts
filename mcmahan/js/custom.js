jQuery(document).ready(function ($) {

    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 960,
        menuLabel: 'Menu',
        phoneBtn: '',
        locationBtn: ''
    });

    $('.menu-item-51, .menu-item-52').wrapAll('<div class=nav-contact></div>');

    $('.reviews-slider').flexslider({
        animation: "fade",
        directionNav: true,
        controlNav: false
    });

});
