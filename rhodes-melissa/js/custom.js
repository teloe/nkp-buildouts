jQuery(document).ready(function($) {

    $(".stellarnav").stellarNav({
        showArrows:false,
        breakpoint:1024,
        menuLabel:"<span>Menu</span>",
        phoneBtn:"615-810-8785",
        locationBtn:"https://goo.gl/maps/E99JvHfeGYTtzuAj7"
    });

    $("#slider").flexslider({
        animation: "fade",
        directionNav: false,
        controlNav: false
    });

});
