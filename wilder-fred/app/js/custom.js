jQuery(document).ready(function ($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 959,
        menuLabel: 'Menu',
        phoneBtn: '',
        locationBtn: '',
    });

    $('.hamburger').on('click', function () {
        $(this).toggleClass('is-active');
        $('#main-nav').toggleClass('open');
    });

    $(window).on('scroll', () => {
        $('header').addClass('scroll');
        if ($(this).scrollTop() === 0) {
            $('header').removeClass('scroll');
        }
    });

    $('#testimonials-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: true,
    });
    
    $('#about-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false,
    });

    $(".accordion-content").slideUp();
    $("ul.gdl-accordion li").each(function () {
        $(this).children(".accordion-content").css('height', function () {
            return $(this).height();
        });
        $(this).children(".accordion-head").bind("click", function () {
            $(this).children().addClass(function () {
                if ($(this).hasClass("open-accordion")) return "";
                return "open-accordion";
            });
            if ($(this).siblings(".accordion-content").css('display') == 'none') {
                $(this).children().addClass("open-accordion");
            } else {
                $(this).children().removeClass("open-accordion");
            }
            $(this).siblings(".accordion-content").slideToggle();
            $(this).parent().siblings("li").children(".accordion-content").slideUp();
            $(this).parent().siblings("li").find(".open-accordion").removeClass("open-accordion");
        });
    });

});
