jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '713-791-0700',
        locationBtn: 'https://g.page/MyHoustonSurgeons?share',
        closeBtn: true,
    });

    $('#services-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: true,
        manualControls: '.controls li',
    });
});
