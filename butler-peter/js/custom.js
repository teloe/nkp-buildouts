jQuery(document).ready(function($) {

    $('.stellarnav').stellarNav({
        showArrows:false,
        breakpoint:960,
        menuLabel:'Menu',
        phoneBtn:'',
        locationBtn:''
    });

    $('a.btn').append('<span></span>');

    /* $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false
    }); */

});
