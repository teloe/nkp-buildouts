jQuery(document).ready(function ($) {

    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1240,
        menuLabel: 'Menu',
        // phoneBtn: '480-418-5390',
        locationBtn: ''
    });

    $('.stellarnav.mobile').append('<a class="appointment" href=""><i class="fas fa-phone"></i></a>', 
                                   '<a class="appointment" href=""><i class="fas fa-phone"></i></a>', 
                                   '<a class="appointment" href=""><i class="fas fa-calendar-plus"></i></a>', 
                                   '<a class="open-nav"><span></span><span></span><span></span></a>');

    $('.open-nav').on('click', function() {
        // $('header').css('transform', 'translateX(0)');
        $('header').css('transform', 'translateX(-450px)');
    });

    $('#slider').flexslider({
        animation: 'slide',
        directionNav: false,
        controlNav: false
    });

});
