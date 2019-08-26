jQuery(document).ready(function ($) {
    $(".stellarnav").stellarNav({
        showArrows: false,
        breakpoint: 999999,
        phoneBtn: "",
        locationBtn: "",
        mobileMode: true
    });

    // hamburger menu open/ close
    $('.open-nav').on('click', function(){
        $('nav').css('transform', 'translateX(0)');
    });
    $('.closebtn').on('click', function() {
        $('nav').css('transform', 'translateX(300px)');
    });

    $(".testimonials-slider").flexslider({
        animation: "fade",
        directionNav: true,
        controlNav: false,
        customDirectionNav: "#testimonials-direction-nav li a"
    });

    $(".office-slider").flexslider({
        animation: "fade",
        directionNav: true,
        controlNav: false,
        customDirectionNav: "#office-direction-nav li a"
    });

    $(".back-to-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
      });

    // $('#slider').flexslider({
    //     animation: 'fade',
    //     directionNav: false,
    //     controlNav: false
    // });
});