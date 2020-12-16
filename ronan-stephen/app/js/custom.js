jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '',
        locationBtn: '',
    });

    // Open/ Close Menu
    $('.hamburger').on('click', function () {
        $(this).toggleClass('is-active');
        $('#desktop-menu').toggleClass('open');
        $('.close-overlay').toggleClass('active');
        /* $('#desktop-menu > div:not(:first-child)').removeClass('active');
        if (!$('#desktop-menu').hasClass('open')) {
            $('#desktop-menu > div:not(:first-child)').removeClass('active');
        } */
    });

    function closeMenu() {
        $('.hamburger').removeClass('is-active');
        $('#desktop-menu').removeClass('open');
        $('.close-overlay').removeClass('active');
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

    $('#menu-desktop-menu .bxa').on('click', function () {
        $('#desktop-menu .menu-bxa-container')
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

    function bannerScroll() {
        const scroll = $(window).scrollTop();
        $('#banner > img').css({
            transform:
                'translate3d(-50%, -' +
                scroll / 100 +
                '%, 0) scale(' +
                (100 + scroll / 20) / 100 +
                ')',
        });
    }
    bannerScroll();

    function animateOnScroll() {
        const windowBottom = $(this).scrollTop() + $(this).innerHeight();
        // const windowTop = $(this).scrollTop() + 64;
        $('.scroll').each(function () {
            const objectBottom = $(this).offset().top + $(this).innerHeight();
            // const objectTop = $(this).offset().top;

            $(this).removeClass('visible');
            if (objectBottom < windowBottom) {
                $(this).addClass('visible');
            }
            // if (objectTop < windowTop) {
            // $(this).removeClass('visible');
            // }
        });
    }
    animateOnScroll();

    $(window).on('scroll', checkTop);
    $(window).on('scroll', bannerScroll);
    $(window).on('scroll', animateOnScroll);

    $('.bxa-menu-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: true,
        manualControls: '.menu-bxa-controls li a',
    });

    $('.videos-menu-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: true,
        manualControls: '.menu-video-controls li a',
    });
});
