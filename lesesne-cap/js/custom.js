jQuery(document).ready(function ($) {
    $('#menu-toggle').on('click', function () {
        $('#mobile-menu .menu').slideToggle(200);
    });
    $('#mobile-menu #close-menu').on('click', function () {
        $('#mobile-menu .menu').slideUp(200);
    });
    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            $('#mobile-menu .menu').slideUp(200);
        }
    });

    /* $('.stellarnav').stellarNav({
        showArrows:false,
        breakpoint:960,
        menuLabel:'Menu',
        phoneBtn:'',
        locationBtn:''
    });

    $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false
    }); */
});
