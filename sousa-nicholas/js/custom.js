jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '248-256-5223',
        locationBtn: '123 Main St',
        closeBtn: true,
    });

    let menuTop = $('.menu-wrapper').offset().top;
    $(window).on('scroll', () => {
        $('.menu-wrapper').addClass('stuck');
        if ($(this).scrollTop() < menuTop) {
            $('.menu-wrapper').removeClass('stuck');
        }
    });

    $(window).on('scroll', () => {
        $('#toTop').addClass('show');
        if ($(this).scrollTop() < 300) {
            $('#toTop').removeClass('show');
        }
    });

    $('#toTop').on('click', (e) => {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    $('#gallery-slider').flexslider({
        animation: 'slide',
        directionNav: true,
        controlNav: true,
        manualControls: '.controls ul li a',
        prevText: '',
        nextText: '',
        slideshowSpeed: 5000,
    });

    // Slide in elements on scroll
    $(window)
        .on('scroll', function () {
            var windowBottom = $(this).scrollTop() + $(this).innerHeight();
            $('.slide').each(function () {
                /* Check the location of each element */
                let objectBottom =
                    $(this).offset().top + $(this).outerHeight() / 2; // divide by 2 so larger sections slide in earlier

                /* If the element is completely within bounds of the window, slide it in */
                if (objectBottom < windowBottom) {
                    //object slides into view (scrolling down)
                    if (!$(this).hasClass('active')) {
                        $(this).addClass('active');
                    }
                }
            });
        })
        .scroll(); //invoke scroll-handler on page-load
});
