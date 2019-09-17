jQuery(document).ready(function ($) {

    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 9999,
        menuLabel: 'Menu',
        phoneBtn: '',
        locationBtn: '',
        mobileMenu: true
    });

    $(window).scroll(function() {
        if ( $(this).scrollTop() > 30 ) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });

    $('.testimonials-slider').flexslider({
        animation: 'fade',
        directionNav: true,
        controlNav: false
    });

    $('.flex-prev').html('<i class="fas fa-chevron-left"></i>');
    $('.flex-next').html('<i class="fas fa-chevron-right"></i>');

    $('.open-nav').on('click', function(){
        $('#main-nav').css('transform', 'translateX(0)');
		$('#nav-overlay-close').css({
            'opacity': 1,
            'visibility': 'visible'
        });
    });

    $('.close-btn, #nav-overlay-close').on('click', function() {
        $('#main-nav').css('transform', 'translateX(450px)');
		$('#nav-overlay-close').css({
            'opacity': 0,
            'visibility': 'hidden'
        });
    });

    /* $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false
    }); */

});
