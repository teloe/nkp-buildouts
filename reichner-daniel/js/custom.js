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
});
