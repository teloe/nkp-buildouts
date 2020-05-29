jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '555-555-5555',
        locationBtn: 'https://goo.gl/maps/suiHxQEjmcnvqLPm6',
        closeBtn: true,
    });

    var list_count = $('#owner li').length;
    var active_li_index = 0;

    setInterval(function () {
        if ($('#owner li.active').index() == list_count - 1)
            active_li_index = 0;
        else active_li_index++;

        $('#owner li.active').removeClass('active');
        $('#owner li').eq(active_li_index).addClass('active');
    }, 4000);

    $('#dr-slider').flexslider({
        animation: 'fade',
        directionNav: true,
        controlNav: false,
        prevText: '',
        nextText: '',
    });
});
