jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 99999,
        phoneBtn: '',
        locationBtn: '',
        mobileMenu: true,
    });

    // Open/ Close Menu
    $('.hamburger').on('click', function () {
        $(this).toggleClass('is-active');
        $('#desktop-menu').toggleClass('open');
        $('#mobile-menu').toggleClass('open');
        $('.close-overlay').toggleClass('active');
        if (!$('header').hasClass('stuck') || $(window).scrollTop() === 0) {
            $('header').toggleClass('stuck');
        }
    });

    function closeMenu() {
        $('.hamburger').removeClass('is-active');
        $('#desktop-menu').removeClass('open');
        $('#mobile-menu').removeClass('open');
        $('.close-overlay').removeClass('active');
        if (!$('header').hasClass('stuck') || $(window).scrollTop() === 0) {
            $('header').toggleClass('stuck');
        }
    }
    closeMenu();

    $('.close-overlay').on('click', closeMenu);

    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            return closeMenu();
        }
    });

    // Desktop Menu
    $(
        '#menu-desktop-menu, #menu-procedures, #menu-medspa, #menu-about, #menu-resources'
    ).addClass('grid-parent grid-container');

    $('#menu-desktop-menu li').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('#menu-desktop-menu .procs').on('click', function () {
        $('#desktop-menu .menu-procedures-container')
            .addClass('active')
            .siblings()
            .removeClass('active');
    });

    $('#menu-desktop-menu .medspa').on('click', function () {
        $('#desktop-menu .menu-medspa-container')
            .addClass('active')
            .siblings()
            .removeClass('active');
    });

    // Bxa Menu
    $('#menu-desktop-menu .bxa').on('click', function () {
        $(
            '.menu-bxa-controls .body, #desktop-menu .menu-bxa-container, .bxa-menu-slider .body'
        )
            .addClass('active')
            .siblings()
            .removeClass('active');
    });

    $('.menu-bxa-controls li').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('.bxa-menu-slider .body').addClass('active');
    $('.menu-bxa-controls .body').on('click', function () {
        $('.bxa-menu-slider .body')
            .addClass('active')
            .siblings()
            .removeClass('active');
    });
    $('.menu-bxa-controls .breast').on('click', function () {
        $('.bxa-menu-slider .breast')
            .addClass('active')
            .siblings()
            .removeClass('active');
    });
    $('.menu-bxa-controls .face').on('click', function () {
        $('.bxa-menu-slider .face')
            .addClass('active')
            .siblings()
            .removeClass('active');
    });
    $('.menu-bxa-controls .skin').on('click', function () {
        $('.bxa-menu-slider .skin')
            .addClass('active')
            .siblings()
            .removeClass('active');
    });
    $('.menu-bxa-controls .mens').on('click', function () {
        $('.bxa-menu-slider .mens')
            .addClass('active')
            .siblings()
            .removeClass('active');
    });
    $('.menu-bxa-controls .medspa').on('click', function () {
        $('.bxa-menu-slider .medspa')
            .addClass('active')
            .siblings()
            .removeClass('active');
    });

    $('#menu-desktop-menu .about').on('click', function () {
        $('#desktop-menu .menu-about-container')
            .addClass('active')
            .siblings()
            .removeClass('active');
    });

    $('#menu-desktop-menu .membership').on('click', function () {
        $('#desktop-menu .menu-membership-container')
            .addClass('active')
            .siblings()
            .removeClass('active');
    });

    $('#menu-desktop-menu .resources').on('click', function () {
        $('#desktop-menu .menu-resources-container')
            .addClass('active')
            .siblings()
            .removeClass('active');
    });

    $('#menu-desktop-menu .videos').on('click', function () {
        $('#desktop-menu .menu-videos-container')
            .addClass('active')
            .siblings()
            .removeClass('active');
    });

    $('#menu-desktop-menu .out-of-town').on('click', function () {
        $('#desktop-menu .menu-out-of-town-container')
            .addClass('active')
            .siblings()
            .removeClass('active');
    });

    $('#menu-desktop-menu .promos').on('click', function () {
        $('#desktop-menu .menu-promos-container')
            .addClass('active')
            .siblings()
            .removeClass('active');
    });

    // Menu images
    $('#menu-procedures .body > a').before(
        '<img class="img-resp" src="../images/menu-body.jpg" alt="Body procedures">'
    );
    $('#menu-procedures .breast > a').before(
        '<img class="img-resp" src="../images/menu-breast.jpg" alt="Breast procedures">'
    );
    $('#menu-procedures .face > a').before(
        '<img class="img-resp" src="../images/menu-face.jpg" alt="Face procedures">'
    );
    $('#menu-procedures .men > a').before(
        '<img class="img-resp" src="../images/menu-men.jpg" alt="Mens procedures">'
    );
    $('#menu-procedures .medspa > a').before(
        '<img class="img-resp" src="../images/menu-medspa.jpg" alt="Medspa procedures">'
    );

    $('#menu-medspa .skin-health > a').before(
        '<img class="img-resp" src="../images/menu-body.jpg" alt="Body procedures">'
    );
    $('#menu-medspa .wrinkles-rejuv > a').before(
        '<img class="img-resp" src="../images/menu-breast.jpg" alt="Breast procedures">'
    );
    $('#menu-medspa .wrinkles > a').before(
        '<img class="img-resp" src="../images/menu-face.jpg" alt="Face procedures">'
    );
    $('#menu-medspa .fat-reduction > a').before(
        '<img class="img-resp" src="../images/menu-men.jpg" alt="Mens procedures">'
    );
    $('#menu-medspa .other > a').before(
        '<img class="img-resp" src="../images/menu-medspa.jpg" alt="Medspa procedures">'
    );

    $('#menu-about .docs > a').before(
        '<img class="img-resp" src="../images/menu-body.jpg" alt="Body procedures">'
    );
    $('#menu-about .team > a').before(
        '<img class="img-resp" src="../images/menu-face.jpg" alt="Face procedures">'
    );
    $('#menu-about .practice > a').before(
        '<img class="img-resp" src="../images/menu-men.jpg" alt="Mens procedures">'
    );
    $('#menu-about .contact > a').before(
        '<img class="img-resp" src="../images/menu-medspa.jpg" alt="Medspa procedures">'
    );

    $('#menu-resources .consult > a').before(
        '<img class="img-resp" src="../images/menu-body.jpg" alt="Body procedures">'
    );
    $('#menu-resources .financing > a').before(
        '<img class="img-resp" src="../images/menu-breast.jpg" alt="Breast procedures">'
    );
    $('#menu-resources .forms > a').before(
        '<img class="img-resp" src="../images/menu-face.jpg" alt="Face procedures">'
    );
    $('#menu-resources .membership > a').before(
        '<img class="img-resp" src="../images/menu-men.jpg" alt="Mens procedures">'
    );
    $('#menu-resources .faq > a').before(
        '<img class="img-resp" src="../images/menu-medspa.jpg" alt="Medspa procedures">'
    );

    // Scroll functions
    function checkTop() {
        const header = $('header');
        header.addClass('stuck');
        if ($(window).scrollTop() === 0) {
            header.removeClass('stuck');
        }
    }
    checkTop();

    function animateOnScroll() {
        const windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $('.scroll').each(function () {
            const objectBottom = $(this).offset().top + $(this).innerHeight();

            $(this).removeClass('visible');
            if (objectBottom < windowBottom) {
                $(this).addClass('visible');
            }
        });
    }
    animateOnScroll();

    $(window).on('scroll', checkTop);
    $(window).on('scroll', animateOnScroll);

    // Sliders
    // $('.bxa-menu-slider').flexslider({
    //     animation: 'fade',
    //     directionNav: false,
    //     controlNav: true,
    //     slideshow: false,
    //     startAt: 0,
    //     manualControls: '.menu-bxa-controls li a',
    // });

    $('.bxa-body-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: true,
        slideshow: false,
        startAt: 0,
        manualControls: '.menu-body-controls li a',
    });

    $('.bxa-breast-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: true,
        slideshow: false,
        startAt: 0,
        manualControls: '.menu-breast-controls li a',
    });

    $('.bxa-face-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: true,
        slideshow: false,
        startAt: 0,
        manualControls: '.menu-face-controls li a',
    });

    $('.bxa-skin-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: true,
        slideshow: false,
        startAt: 0,
        manualControls: '.menu-skin-controls li a',
    });

    $('.bxa-mens-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: true,
        slideshow: false,
        startAt: 0,
        manualControls: '.menu-mens-controls li a',
    });

    $('.bxa-medspa-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: true,
        slideshow: false,
        startAt: 0,
        manualControls: '.menu-medspa-controls li a',
    });

    $('.videos-menu-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: true,
        manualControls: '.menu-video-controls li a',
    });

    $('.testimonials-slider').flexslider({
        animation: 'fade',
        directionNav: true,
        controlNav: false,
        prevText: '',
        nextText: '',
    });

    $('.services-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: true,
        manualControls: '.services-controls li a',
    });

    $('#procs .content').on('click mouseenter', function () {
        $(this)
            .addClass('active')
            .parent()
            .siblings()
            .find('.content')
            .removeClass('active');
    });
    $('#procs .content').on('mouseleave', function () {
        $(this).removeClass('active');
    });
    $(document).on('click', function (e) {
        if ($(e.target).is('#procs .content') === false) {
            $('#procs .content').removeClass('active');
        }
    });

    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            $('#procs .content').removeClass('active');
        }
    });
});
