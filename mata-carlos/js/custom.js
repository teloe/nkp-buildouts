jQuery(document).ready(function ($) {

    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1240,
        menuLabel: 'Menu',
        // phoneBtn: '480-418-5390',
        locationBtn: ''
    });

    $('.open-nav').on('click', function() {
        $('.stellarnav.mobile > ul, .header-container').toggleClass('is-open');
        $(this).toggleClass('is-open');
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 30 ) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });

    $('#slider').flexslider({
        animation: 'slide',
        directionNav: false,
        controlNav: false
    });

});
