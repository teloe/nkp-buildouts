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
        controlNav: false,
    });

    $('.accordion-content').hide();
    $('.gdl-accordion .title').on('click', function () {
        $(this)
            .parent()
            .find('.title')
            .toggleClass('active')
            .siblings('.info')
            .slideToggle(200);
        $(this)
            .parent()
            .siblings('.panel')
            .find('.title')
            .removeClass('active')
            .siblings('.info')
            .slideUp(200);
    });
});
