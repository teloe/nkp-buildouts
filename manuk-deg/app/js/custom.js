jQuery(document).ready(function ($) {
    $('.snazzymenu').snazzyMenu({
        homeBtn: '<img class="img-resp" src="images/logo1.png">',
        phoneBtn: '555-555-5555',
        phoneLabel: '555-555-5555',
        locationBtn: '1234 Alphabet St, Ste 208, Boca Raton, FL 33427',
        locationLabel: '1234 Alphabet St, Ste 208, Boca Raton, FL 33427',
        colClasses: true,
    });

    $('.column-1').prepend('<img class="img-resp" src="../images/botox.jpg">');
    $('.column-2').prepend(
        '<img class="img-resp" src="../images/laser-hair.jpg">'
    );
    $('.column-3').prepend(
        '<img class="img-resp" src="../images/coolsculpting.jpg">'
    );
    $('.column-4').prepend('<img class="img-resp" src="../images/botox.jpg">');

    $('.column-5').prepend('<img class="img-resp" src="../images/proc3.jpg">');
    $('.column-6').prepend('<img class="img-resp" src="../images/proc4.jpg">');

    $('.column-7').prepend(
        '<img class="img-resp" src="../images/slider1.jpg">'
    );
    $('.column-8').prepend(
        '<img class="img-resp" src="../images/slider1.jpg">'
    );
    $('.column-9').prepend(
        '<img class="img-resp" src="../images/slider1.jpg">'
    );

    // Scroll functions
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

    $(window).on('scroll', animateOnScroll);

    // #services section
    $('#services .content').on('click mouseenter', function () {
        $(this)
            .addClass('active')
            .parent()
            .siblings()
            .find('.content')
            .removeClass('active');
    });

    $('#services .content').on('mouseleave', function () {
        $(this).removeClass('active');
    });

    $(document).on('click', function (e) {
        if ($(e.target).is('#services .content') === false) {
            $('#services .content').removeClass('active');
        }
    });

    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            $('#services .content').removeClass('active');
        }
    });

    $('.about-slider').flexslider({
        animation: 'fade',
        directionNav: true,
        controlNav: false,
        prevText: '',
        nextText: '',
    });
});
