jQuery(document).ready(function ($) {
    /* $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '',
        locationBtn: '',
    }); */

    $('.snazzymenu').snazzyMenu({
        homeBtn: '<img class="img-resp" src="images/logo.png">',
        phoneBtn: '555-555-5555',
        phoneLabel: '555-555-5555',
        locationBtn: '1234 Alphabet St, Ste 208, Boca Raton, FL 33427',
        locationLabel: '1234 Alphabet St, Ste 208, Boca Raton, FL 33427',
    });

    $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false,
    });
});
