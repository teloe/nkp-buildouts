jQuery(document).ready(function($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '801-266-3113',
        locationBtn: 'https://goo.gl/maps/eHtmXFVM2sSaGDAL8',
        closeBtn: true,
    });

    $(window).on('scroll', function() {
        $('nav').addClass('sticky');
        if ($(this).scrollTop() < 500) {
            $('nav').removeClass('sticky');
        }
    });

    function toggleActive() {
        $('.procs .content').removeClass('active');
        $(this).addClass('active');
    }
    $('.procs .content').on('click', toggleActive);

    $('#testimonials-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false,
    });
});
