jQuery(document).ready(function ($) {
    $('#open-nav').on('click', function () {
        $('#main-nav').addClass('open');
        $(this).css('opacity', '0');
    });

    $('#close-nav').on('click', function () {
        $('#main-nav').removeClass('open');
        $('#main-nav #main-menu li.has-sub')
            .removeClass('open')
            .find('.sub')
            .slideUp(300);
        $('#open-nav').css('opacity', '1');
    });

    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            $('#main-nav').removeClass('open');
            $('#main-nav #main-menu li.has-sub')
                .removeClass('open')
                .find('.sub')
                .slideUp(300);
            $('#open-nav').css('opacity', '1');
        }
    });

    $('.open-sub').on('click', function () {
        $(this).siblings('.sub').slideToggle(300).parent().toggleClass('open');
    });

    $('#services .service-col').on('click', function () {
        $(this).find('.service-list').toggleClass('active');
        $(this)
            .parent('.grid-33')
            .siblings()
            .find('.service-col')
            .find('.service-list')
            .removeClass('active');
    });
});
