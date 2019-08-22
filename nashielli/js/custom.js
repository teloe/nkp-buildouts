jQuery(document).ready(function($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 999999,
        phoneBtn: '',
        locationBtn: '',
        mobileMode: true
    });

    $('.testimonials-slider').flexslider({
        animation: 'fade',
        directionNav: true,
        controlNav: false,
        customDirectionNav: ".flex-direction-nav li a"
    });

    // function openNav() {
    //     $("").css('transform', 'translateX(0px)') ;
    // }
    // function closeNav() {
    //     $("").style.transform = "translateX(100%)";
    // }

    // $('#slider').flexslider({
    //     animation: 'fade',
    //     directionNav: false,
    //     controlNav: false
    // });
});
