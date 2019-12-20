jQuery(document).ready(function($) {

    $('.stellarnav').stellarNav({
        showArrows:false,
        breakpoint:1024,
        menuLabel:'<span>Menu</span>',
        phoneBtn:'904-260-2001',
        locationBtn:'https://goo.gl/maps/MbXnmtWqKCaebmrm8'
    });

    $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false
    });

});
