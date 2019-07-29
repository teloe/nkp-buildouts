jQuery(document).ready(function ($) {

    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 960,
        menuLabel: 'Menu',
        phoneBtn: '',
        locationBtn: ''
    });

    // Sticky nav
    window.onscroll = function() {
        navScroll();
    };

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;


    function navScroll() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }

    var loc = window.location.href;

    $('.stellarnav').find('a').each(function () {
        $(this).toggleClass('active', $(this).attr('href') == loc);
    });

    // $('#slider').flexslider({
    //     animation: "fade",
    //     directionNav: false,
    //     controlNav: false
    // });

});