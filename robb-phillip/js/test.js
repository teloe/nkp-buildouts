jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        menuLabel: 'Menu',
        sticky: false,
        showArrows: true,
        breakpoint: 99999,
        mobileMode: true,
    });
    $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false,
        slideshowSpeed: 3000,
    });
    $('#meet-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: true,
    });
    $('#procs-slider').flexslider({
        animation: 'fade',
        directionNav: true,
        controlNav: true,
        manualControls: '.controls-slide ul li',
        prevText: '',
        nextText: '',
    });
    var jQuerywindow = jQuery(window),
        flexslider;
    $('.hamburger').on('click', function () {
        $('nav').css('transform', 'translateX(0)');
        $('#nav-overlay-close').addClass('nav-overlay-hidden');
    });
    $('.close-btn').on('click', function () {
        $('nav').css('transform', 'translateX(350px)');
        $('#nav-overlay-close').removeClass('nav-overlay-hidden');
    });
    $('#nav-overlay-close').on('click', function () {
        $('nav').css('transform', 'translateX(350px)');
        $('#nav-overlay-close').removeClass('nav-overlay-hidden');
    });
    if ($(window).width() > 768) {
        $('.slide-right').on('mouseenter', function () {
            $('.slide-right').css('z-index', '1');
            $('.slide-left').css('z-index', '0');
        });
        $('.slide-right').on('mouseleave', function () {
            $('.slide-right').css('z-index', '1');
            $('.slide-left').css('z-index', '0');
        });
        $('.slide-left').on('mouseenter', function () {
            $('.slide-left').css('z-index', '1');
            $('.slide-right').css('z-index', '0');
        });
        $('.slide-left').on('mouseleave', function () {
            $('.slide-left').css('z-index', '1');
            $('.slide-right').css('z-index', '0');
        });
    } else {
        $('.slide-right, .slide-left').css('z-index', '0');
    }
    $('.procs-list li button').on('mouseover', function () {
        $('button.active').removeClass('active');
        $(this).addClass('active');
    });
    $('#ourservices').show();
    $('#face, #breast, #body, #med-spa').hide();
    $('.procs-list').on('click', 'button', function () {
        let target = '#' + $(this).data('target');
        $('.proc-container').not(target).hide();
        $(target).fadeIn(350);
    });
    var acc = document.getElementsByClassName('accordion');
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function () {
            this.classList.toggle('active');
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });
    }
    document.addEventListener(
        'wpcf7mailsent',
        function (event) {
            window.location.replace('/thank-you');
        },
        false
    );
    $(function () {
        var header = $('header');
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if ($(window).width() > 767) {
                if (scroll >= 1) {
                    $('.fixed-header').css({
                        background: 'rgba(45, 35, 26,.85)',
                    });
                    $('.phone, .hamburger').css({ color: '#bacc6a' });
                } else {
                    $('.fixed-header').css({ background: 'transparent' });
                    $('.phone, .hamburger').css({ color: '#2d231b' });
                }
            }
        });
    });
});
