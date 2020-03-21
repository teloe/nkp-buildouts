var $ = jQuery.noConflict();
$(document).ready(function() {
    var main = $('.on-canvas');
    var mobileNav = $('.mobile-navigation');
    var offCanvasClick = $('.off-canvas-click');
    var header = $('header');
    var pageWidth = $(window).width();
    $('body').on('click', '.scroller', function() {
        var offset = function() {
            if (pageWidth < 1024) {
                return 70;
            } else {
                return 208;
            }
        };
        $('html, body').animate(
            { scrollTop: $($.attr(this, 'href')).offset().top - offset() },
            800,
            'easeOutQuart'
        );
    });
    $('.js-menu-toggle').on('click', function(e) {
        e.preventDefault();
        if (main.hasClass('menu-is-open')) {
            toggleMenu();
        } else {
            toggleMenu();
        }
    });
    offCanvasClick.on('click', function(e) {
        e.preventDefault();
        if (offCanvasClick.hasClass('active')) {
            toggleMenu();
        }
    });
    main.swipe({
        swipeLeft: function(event, direction, distance, duration, fingerCount) {
            if (pageWidth < 1024) {
                toggleMenu();
            }
        },
        swipeRight: function(
            event,
            direction,
            distance,
            duration,
            fingerCount
        ) {
            if (main.hasClass('menu-is-open')) {
                if (pageWidth < 1024) {
                    toggleMenu();
                }
            }
        },
    });
    function toggleMenu() {
        if (!main.hasClass('menu-is-open')) {
            $('.js-menu-toggle .title').html('Close');
        } else {
            $('.js-menu-toggle .title').html('Menu');
        }
        main.toggleClass('menu-is-open');
        mobileNav.toggleClass('menu-is-open');
    }
    $('.mobile-navigation .has-sub > a, .sidebar .has-sub > a').on(
        'click',
        function(e) {
            if (
                !$(this).parents('header').length &&
                !$(this).parents('footer').length
            ) {
                e.preventDefault();
            }
            if ($(this).hasClass('submenu-open')) {
                $(this)
                    .removeClass('submenu-open')
                    .next('ul')
                    .slideUp(400)
                    .end()
                    .trigger('menu:clicked', [$(this)]);
            } else {
                $(this)
                    .addClass('submenu-open')
                    .next('ul')
                    .slideDown(400)
                    .end()
                    .trigger('menu:clicked', [$(this)]);
                $(this)
                    .parent('.has-sub')
                    .siblings('.has-sub')
                    .children('a')
                    .removeClass('submenu-open')
                    .next('ul')
                    .slideUp(400);
            }
        }
    );
    $(document).on('menu:clicked', function(event, el) {
        if (el.parents('.sidebar').length) {
        } else {
        }
    });
    function dropdown() {
        if (
            $('body').hasClass('sub') &&
            !$('.sub-content').hasClass('js-no-links')
        ) {
            var count = 0;
            $('.sub-content .content').prepend('<div class="divider"></div>');
            $('.sub-content .content').prepend('<ul class="subnav">');
            var ul = $('.subnav');
            ul.append(
                '<li class="trigger"><a>Select a section<span class="hide-phone"> to jump to</span><span class="arrow"></span></a></li>'
            );
            var mainLi = $('.trigger');
            mainLi.append('<ul>');
            $('.sub-content .content > h3').each(function() {
                if (!$(this).hasClass('js-exclude')) {
                    var link = 'title' + count;
                    $(this).attr('id', link);
                    var li = document.createElement('li');
                    var a = document.createElement('a');
                    $(a).text($(this).text());
                    $(a).addClass('arrow');
                    $(a).addClass('scroller');
                    $(a).attr({ href: '#' + link });
                    $(li).append(a);
                    mainLi.find('ul').append(li);
                    count++;
                }
            });
        }
    }
    $('.subnav .trigger').on('click', function(e) {
        $(this)
            .find('ul')
            .slideToggle(200);
    });
    function parallax() {
        var scrolled = $(window).scrollTop();
        $('.main-slider .row-outer').css(
            'opacity',
            1 - (scrolled * 0.32) / 100
        );
    }
    function headerAnimate() {
        var scrollTop = $(window).scrollTop();
        if (header.hasClass('js-animate')) {
            if (scrollTop > 120) {
                header.addClass('scrolled');
            } else {
                header.removeClass('scrolled');
            }
        }
    }
    $(window).scroll(function() {
        if (pageWidth > 1024) {
            parallax();
            headerAnimate();
        }
    });
    $('.s3accordion > .s3panel > a').on('click', function(e) {
        e.preventDefault();
        if (
            !$(this)
                .parent()
                .hasClass('js-opened')
        ) {
            $('.js-opened')
                .find('div')
                .slideUp();
            $('.js-opened').removeClass('js-opened');
            $(this)
                .next()
                .slideDown();
            $(this)
                .parent()
                .addClass('js-opened');
        } else {
            $(this)
                .next()
                .slideUp();
            $(this)
                .parent()
                .removeClass('js-opened');
        }
    });
    if (window.location.hash) {
        var hash = window.location.hash.substring(1);
        console.log(hash);
        var div = '#' + hash;
        var offset = function() {
            if (pageWidth < 800) {
                return 80;
            } else if (pageWidth < 1024) {
                return 80;
            } else {
                return 200;
            }
        };
        jQuery('html, body').animate(
            { scrollTop: jQuery(div).offset().top - offset() },
            1e3,
            'easeOutQuart'
        );
    }
    $('.s3-form').on('valid', function() {
        $(this)
            .find('.submit')
            .text('Sending...')
            .addClass('is-disabled');
    });
    if ($('#wpadminbar').length) {
        $('#wpadminbar').appendTo('body');
    }
    function toggleUnits(location) {
        $.simpleWeather({
            location: location,
            unit: temp,
            success: function(weather) {
                html = weather.temp;
                $('#weather').html(html);
            },
        });
    }
    toggleUnits('Peoria, AZ', '');
    var temp = 'f';
    $('#fahrenheit').css('font-weight', 'bold');
    function change() {
        $('.peoria-temp a').css('font-weight', 'normal');
        if (temp == 'f') {
            temp = 'c';
            $('#celsius').css('font-weight', 'bold');
        } else if (temp == 'c') {
            temp = 'f';
            $('#fahrenheit').css('font-weight', 'bold');
        }
        toggleUnits('Peoria, AZ', '');
    }
    $('.peoria-temp a').on('click', function(e) {
        e.preventDefault();
        change();
    });
    $('.js-hole').on('click', function(e) {
        e.preventDefault();
        var hole = $(this);
        var holeItems = [
            'desc',
            'black',
            'gold',
            'silver',
            'copper',
            'jade',
            'handicap',
            'par',
            'video',
        ];
        $('.course-wrap > span')
            .removeClass()
            .addClass('hole-' + $(this).text());
        $('.is-active').removeClass('is-active');
        $(this).addClass('is-active');
        $('.hole').text($(this).text());
        $('.js-image').attr('href', hole.data('img'));
        holeItems.forEach(function(val, index, array) {
            var el = $('.' + val);
            if (val == 'video') {
                el.attr('href', hole.data(val));
            } else {
                el.hide()
                    .text(hole.data(val))
                    .fadeIn();
            }
        });
    });
    $('.popup-video').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
    });
    if (pageWidth > 1024) {
        $('.popup-iframe').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-tee',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: true,
        });
    } else {
        $('.popup-iframe').attr('target', '_blank');
    }
    $('.popup-inline').magnificPopup({
        type: 'inline',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: true,
        fixedContentPos: true,
    });
    $('.popup-image').magnificPopup({
        type: 'image',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: true,
        fixedContentPos: true,
    });
    $('.course-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: true,
        animateOut: 'fadeOut',
        mouseDrag: false,
        touchDrag: false,
        dots: true,
        singleItem: true,
    });
    $('.popup').magnificPopup({
        type: 'iframe',
        removalDelay: 500,
        callbacks: {
            beforeOpen: function() {
                this.st.image.markup = this.st.image.markup.replace(
                    'mfp-figure',
                    'mfp-figure mfp-with-anim'
                );
                this.st.mainClass = this.st.el.attr('data-effect');
            },
        },
        closeOnContentClick: true,
        midClick: true,
    });
    $('.popup-image').magnificPopup({ type: 'image' });
    $('.room-gallery').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
    });
    $('.room-gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: { enabled: true },
    });
    $('#next-btn').click(function(e) {
        $('.slide1').fadeOut('slow', function() {
            $('.slide2').fadeIn('slow');
        });
    });
    $('#prev-btn').click(function(e) {
        $('.slide2').fadeOut('slow', function() {
            $('.slide1').fadeIn('slow');
        });
    });
    $('.expand-ontop > a').on('click', function(e) {
        e.preventDefault();
        $(this).hide();
        $('.view-less').show();
    });
    $('.view-less').on('click', function(e) {
        e.preventDefault();
        $('.accordion-container').slideUp();
        $(this).hide();
        $('.view-all').show();
        $('.s3accordion > .s3panel').removeClass('js-opened');
    });
    if (sessionStorage.getItem('show_popup') == null) {
        sessionStorage.setItem('show_popup', 'yes');
    }
    $('.close').on('click', function(e) {
        $('#slide-out').remove();
        if (sessionStorage) {
            sessionStorage.setItem('show_popup', 'no');
        }
    });
    if (sessionStorage.getItem('show_popup') != 'no') {
        $('#slide-out')
            .delay(1e3)
            .fadeIn('slow');
    }
});
