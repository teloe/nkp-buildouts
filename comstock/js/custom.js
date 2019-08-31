jQuery(document).ready(function ($) {

    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 960,
        menuLabel: 'Menu',
        phoneBtn: '520-797-8885',
        locationBtn: 'https://goo.gl/maps/jRcWVdX9RbrBJp5x6'
    });

    $('.oval').on('mouseenter', function () {
        $(this).next('.blurb').show();
    });

    $('.blurb').on('mouseleave', function () {
        $(this).hide();
    });

    $('.twentytwenty-container').twentytwenty({
        default_offset_pct: .5,
        orientation: 'horizontal',
        before_label: '',
        after_label: '',
        no_overlay: true,
        move_with_handle_only: true,
        click_to_move: false
    });
    $(window).trigger('resize.twentytwenty');

    /* $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false
    }); */

});
