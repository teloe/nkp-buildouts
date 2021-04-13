jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '',
        locationBtn: '',
    });

    $('#procs .controls li.injectables').on('click', function () {
        $('#procs .carousel .injectables')
            .addClass('active')
            .siblings('.proc-wrapper')
            .removeClass('active');
    });
    $('#procs .controls li.surgical-procs').on('click', function () {
        $('#procs .carousel .surgical-procs')
            .addClass('active')
            .siblings('.proc-wrapper')
            .removeClass('active');
    });
    $('#procs .controls li.skin-rejuv').on('click', function () {
        $('#procs .carousel .skin-rejuv')
            .addClass('active')
            .siblings('.proc-wrapper')
            .removeClass('active');
    });
    $('#procs .controls li.feminine-rejuv').on('click', function () {
        $('#procs .carousel .feminine-rejuv')
            .addClass('active')
            .siblings('.proc-wrapper')
            .removeClass('active');
    });

    $('.services-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: true,
        manualControls: '#services .controls li',
    });
});
