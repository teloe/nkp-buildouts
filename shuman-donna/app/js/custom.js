jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '561-250-6169',
        locationBtn: 'https://goo.gl/maps/24gyMNErkcLy7oa2A',
        closeBtn: true,
    });

    $(window).on('scroll', function () {
        $('header').addClass('stuck');
        if ($(this).scrollTop() === 0) {
            $('header').removeClass('stuck');
        }
    });

    $('#banner-slider').flexslider({
        animation: 'fade',
        directionNav: true,
        controlNav: false,
        prevText: '',
        nextText: '',
    });

    $('#reviews-slider').flexslider({
        animation: 'fade',
        directionNav: true,
        controlNav: true,
        manualControls: '.controls li',
        prevText: '',
        nextText: '',
    });

    $('.accordion-content').hide();
    $('.accordion .panel:first-of-type .accordion-content').show();
    $('.accordion .panel:first-of-type .accordion-title').addClass('active');
    $('.accordion-title').on('click', function () {
        $(this)
            .parent()
            .find('.accordion-title')
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
