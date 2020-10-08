jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '',
        locationBtn: '',
    });

    $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: true,
    });

    $('.accordion-content').hide();
    $('.accordion-title').on('click', function () {
        $(this)
            .parent()
            .find('.title')
            .toggleClass('active')
            .siblings('.accordion-content')
            .slideToggle(200);
        $(this)
            .parent()
            .siblings('.panel')
            .find('.accordion-title')
            .removeClass('active')
            .siblings('.accordion-content')
            .slideUp(200);
    });
});
