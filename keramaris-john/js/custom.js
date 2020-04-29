jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 999999,
        menuLabel: 'Menu',
        phoneBtn: '',
        locationBtn: '',
        mobileMode: true,
    });
    $('#open-menu').on('click', function () {
        $('#nav-overlay').slideDown();
        $('header').hide();
    });

    $('.close-menu').on('click', function () {
        $('#nav-overlay').slideUp();
        $('header').show();
    });

    $('.procs a')
        .on('mouseover', function () {
            $('#procs-menu').stop(true).fadeIn(200);
        })
        .on('mouseleave', function () {
            $('#procs-menu').stop(true).delay(500).fadeOut(200);
        });
    $('#procs-menu')
        .on('mouseenter', function () {
            $(this).stop(true).clearQueue().show();
        })
        .on('mouseleave', function () {
            $(this).delay(500).fadeOut(200);
        });

    $('#bxa-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        appendArrows: $('#bxa .btn-wrapper'),
        autoplay: true,
        speed: 1000,
    });

    $('#bxa .slick-prev')
        .empty()
        .append('<img class="img-resp" src="images/left-arrow.png">');
    $('#bxa .slick-next')
        .empty()
        .append('<img class="img-resp" src="images/right-arrow.png">');
});
