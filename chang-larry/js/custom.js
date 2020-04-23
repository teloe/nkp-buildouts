jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        sticky: false,
        showArrows: false,
        breakpoint: 99999,
        mobileMode: true,
    });

    $('.open-menu').on('click', function () {
        // $('#nav-overlay').addClass('open');
        $('#nav-overlay').slideDown();
    });

    $('#sticky-nav .open-menu').on('click', function () {
        $('#sticky-nav').hide();
    });

    $('.close-menu').on('click', function () {
        $('#sticky-nav').show();
    });

    $('.close-menu').on('click', function () {
        // $('#nav-overlay').removeClass('open');
        $('#nav-overlay').slideUp();
    });

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 800) {
            $('#sticky-nav').css('transform', 'translateY(0)');
        } else {
            $('#sticky-nav').css('transform', 'translateY(-100%)');
        }
    });

    var list_count = $('#cyclelist li').length;
    var active_li_index = 0;

    setInterval(function () {
        if ($('#cyclelist li.active').index() == list_count - 1)
            active_li_index = 0;
        else active_li_index++;

        $('#cyclelist li.active').removeClass('active');
        $('#cyclelist li').eq(active_li_index).addClass('active');
    }, 4000);

    // desktop nav
    var about = $('#about-menu');
    var a = $('.about a');
    a.on('mouseover', function () {
        about.stop(true).fadeIn(200);
    }).on('mouseleave', function () {
        about.stop(true).delay(500).fadeOut(200);
    });
    about
        .on('mouseenter', function () {
            $(this).stop(true).clearQueue().show();
        })
        .on('mouseleave', function () {
            $(this).delay(500).fadeOut(200);
        });

    var surgery = $('#surgery-menu');
    var s = $('.surgery a');
    s.on('mouseover', function () {
        surgery.stop(true).fadeIn(200);
    }).on('mouseleave', function () {
        surgery.stop(true).delay(500).fadeOut(200);
    });
    surgery
        .on('mouseenter', function () {
            $(this).stop(true).clearQueue().show();
        })
        .on('mouseleave', function () {
            $(this).delay(500).fadeOut(200);
        });

    $('#dr-slider').flexslider({
        animation: 'fade',
        directionNav: true,
        controlNav: false,
        prevText: '',
        nextText: '',
    });

    $('#services-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: true,
        manualControls: '.controls li a',
    });
});
