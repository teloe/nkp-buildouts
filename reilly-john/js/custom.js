jQuery(document).ready(function ($) {
    $('#menu-btn').on('click', function () {
        $(this).toggleClass('open');
        $('#nav-overlay').toggleClass('open');
    });

    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            $('#menu-btn').removeClass('open');
            $('#nav-overlay').removeClass('open');
        }
    });

    $('.about a')
        .on('mouseover', function () {
            $('#about-menu').stop(true).fadeIn(200).addClass('show');
        })
        .on('mouseleave', function () {
            $('#about-menu')
                .stop(true)
                .delay(500)
                .fadeOut(200)
                .removeClass('show');
        });
    $('#about-menu')
        .on('mouseenter', function () {
            $(this).stop(true).clearQueue().show();
        })
        .on('mouseleave', function () {
            $(this).delay(500).fadeOut(200);
        });

    $('.procs a')
        .on('mouseover', function () {
            $('#procs-menu').stop(true).fadeIn(200).addClass('show');
        })
        .on('mouseleave', function () {
            $('#procs-menu')
                .stop(true)
                .delay(500)
                .fadeOut(200)
                .removeClass('show');
        });
    $('#procs-menu')
        .on('mouseenter', function () {
            $(this).stop(true).clearQueue().show();
        })
        .on('mouseleave', function () {
            $(this).delay(500).fadeOut(200);
        });

    $('.resources a')
        .on('mouseover', function () {
            $('#resources-menu').stop(true).fadeIn(200).addClass('show');
        })
        .on('mouseleave', function () {
            $('#resources-menu')
                .stop(true)
                .delay(500)
                .fadeOut(200)
                .removeClass('show');
        });
    $('#resources-menu')
        .on('mouseenter', function () {
            $(this).stop(true).clearQueue().show();
        })
        .on('mouseleave', function () {
            $(this).delay(500).fadeOut(200);
        });

    $('.contact a')
        .on('mouseover', function () {
            $('#contact-menu').stop(true).fadeIn(200).addClass('show');
        })
        .on('mouseleave', function () {
            $('#contact-menu')
                .stop(true)
                .delay(500)
                .fadeOut(200)
                .removeClass('show');
        });
    $('#contact-menu')
        .on('mouseenter', function () {
            $(this).stop(true).clearQueue().show();
        })
        .on('mouseleave', function () {
            $(this).delay(500).fadeOut(200);
        });

    checkHeight();
    $(window).on('scroll', checkHeight);

    function checkHeight() {
        $('#nav-overlay').addClass('scroll');
        if ($(this).scrollTop() === 0) {
            $('#nav-overlay').removeClass('scroll');
        }
    }

    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 99999999,
        menuLabel: 'Menu',
        phoneBtn: '',
        locationBtn: '',
        mobileMode: true,
    });

    $('#videos-carousel').flickity({
        autoPlay: true,
        autoPlay: 5000,
        // contain: true,
        wrapAround: true,
        pageDots: true,
        prevNextButtons: false,
    });

    $('#testimonials .carousel').flickity({
        autoPlay: true,
        contain: true,
        wrapAround: true,
        pageDots: false,
        prevNextButtons: false,
    });

    $('#videos-carousel .content').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
    });

    $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false,
    });
});
