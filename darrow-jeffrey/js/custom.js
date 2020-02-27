jQuery(document).ready(function($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '617-267-0710',
        locationBtn: 'https://goo.gl/maps/jhVqq3TVGJ3YRBXt9',
        closeBtn: true,
    });

    $('#procs-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: true,
        manualControls: '.controls li',
    });

    /* $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false,
    }); */
});
