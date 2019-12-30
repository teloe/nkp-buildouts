jQuery(document).ready(function ($) {

    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: '<span>Menu</span>',
        phoneBtn: '904-260-2001',
        locationBtn: 'https://goo.gl/maps/MbXnmtWqKCaebmrm8'
    });

    // sticky nav
    let lastScrollTop = 0;
    if ($(window).width() > 1024) {
        $(window).on('scroll', function () {
            let st = $(this).scrollTop();
            if (st > lastScrollTop) {
                // downscroll code
                $('nav').css('transform', 'translateY(-100%)');
            } else {
                // upscroll code
                $('nav').css('transform', 'translateY(0)');
            }
            lastScrollTop = st;
        });
    }

    $('#procs-slider').flexslider({
        animation: 'fade',
        directionNav: true,
        controlNav: true,
        prevText: '',
        nextText: '',
        manualControls: '.slider-controls li'
    });

    // video carousel
    let carousel = $('.video-carousel'),
        items = $('.item'),
        currdeg  = 0;

    $('.next').on('click', { d: 'n' }, rotate);
    $('.prev').on('click', { d: 'p' }, rotate);

    function rotate(e){
        if(e.data.d=='n'){
            currdeg = currdeg - 120;
        }
        if(e.data.d=='p'){
            currdeg = currdeg + 120;
        }
        carousel.css({
            '-webkit-transform': 'rotateY('+currdeg+'deg)',
            '-moz-transform': 'rotateY('+currdeg+'deg)',
            'transform': 'rotateY('+currdeg+'deg)'
        });
        items.css({
            '-webkit-transform': 'rotateY('+(-currdeg)+'deg)',
            '-moz-transform': 'rotateY('+(-currdeg)+'deg)',
            'transform': 'rotateY('+(-currdeg)+'deg)'
        });
    }

    /* $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false
    }); */


});

