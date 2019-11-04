jQuery(document).ready(function ($) {

    $('.stellarnav').stellarNav({
        showArrows: true,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '925-676-2600',
        locationBtn: 'https://goo.gl/maps/HA4nDTBosaPr6ry36'
    });

    $('#slider').flexslider({
        animation: 'fade',
        directionNav: true,
        prevText: '',
        nextText: '',
        controlsContainer: '.controls',
        controlNav: false
    });

    /* $('#loc-slider').flexslider({
        animation: 'fade',
        manualControls: '#loc-slider ul li',
        directionNav: false,
        controlNav: true
    }); */

});
