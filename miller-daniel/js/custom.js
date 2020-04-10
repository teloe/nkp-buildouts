jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '503-667-2400',
        locationBtn: 'https://goo.gl/maps/RbW2mEFLjUJytgc69',
        closeBtn: true,
    });

    $(window).on('scroll', function () {
        $('header').addClass('scroll');
        if ($(this).scrollTop() === 0) {
            $('header').removeClass('scroll');
        }
    });

    $('#dr-slider').flexslider({
        animation: 'fade',
        directionNav: true,
        controlNav: false,
        slideshow: false,
        controlsContainer: '.controls',
        prevText: '',
        nextText: '',
    });

    // #dr-slider counter
    const a = $('#dr-slider .slides li').length,
        c = $('.counter .current'),
        t = $('.counter .total');

    let i = $('#dr-slider .slides .flex-active-slide').index() + 1;

    // display the current slide and total
    c.html(i);
    t.append(a);

    $('.dr .flex-prev').on('click', function () {
        i--;
        c.html(i);
        if (i < 1) {
            i = a;
            c.html(i);
        }
    });

    $('.dr .flex-next').on('click', function () {
        i++;
        c.html(i);
        if (i > a) {
            i = 1;
            c.html(i);
        }
    });
});
