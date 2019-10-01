jQuery(document).ready(function($) {

    $('.stellarnav').stellarNav({
        showArrows:false,
        breakpoint:767,
        menuLabel:'Menu',
        phoneBtn:'',
        locationBtn:''
    });

    $(window).scroll(function() {
        if ( $(this).scrollTop() > 0 ) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });

    $('.banner-slider').flexslider({
        animation: 'fade',
        directionNav: true,
        controlNav: false,
        prevText: '',
        nextText: '',
        slideshowSpeed: 5000,
    });

    $('.testimonials-slider').flexslider({
        animation: 'fade',
        directionNav: true,
        controlNav: false,
        prevText: '',
        nextText: ''
    });

    $('#slider .flex-prev').html('<img class="img-resp" src="../images/prev.png">');
    $('#slider .flex-next').html('<img class="img-resp" src="../images/next.png">');

    $(window).scroll(function() {
        if($(this).scrollTop() > 400) {
            $('.to-top').fadeIn(200);
        } else {
            $('.to-top').fadeOut(200);
        }
    });

    $('.to-top').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 'ease');
    });

    /* $('#slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false
    }); */

});
