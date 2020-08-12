jQuery(document).ready(function ($) {
    $('.open-nav').on('click', function () {
        $('#mobile-nav').addClass('open');
    });

    $('.close-nav').on('click', function () {
        $('#mobile-nav').removeClass('open');
    });

    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            $('#mobile-nav').removeClass('open');
        }
    });

    $('#mobile-nav .open-sub').on('click', function () {
        $(this)
            .siblings('.sub-menu')
            .slideToggle(300)
            .parent()
            .toggleClass('open');
    });

    $(window).on('scroll', function () {
        $('#desktop-nav').addClass('stuck');
        if ($(this).scrollTop() < 300) {
            $('#desktop-nav').removeClass('stuck');
        }
    });

    $('#banner-slider').flexslider({
        animation: 'slide',
        directionNav: true,
        controlNav: false,
        prevText: '',
        nextText: '',
    });

    $('.procedure-slider').flexslider({
        animation: 'slide',
        directionNav: true,
        controlNav: false,
        prevText: '',
        nextText: '',
    });

    $('.concerns-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: true,
        manualControls: '.controls li',
    });

    $('body.procedure-page .accordion .info').hide();
    $('body.procedure-page .accordion .title').on('click', function () {
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

    $(window).on('load', function () {
        $('.img-wrapper').twentytwenty();
    });
});
