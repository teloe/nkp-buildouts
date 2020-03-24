jQuery(document).ready(function($) {
    $('.stellarnav').stellarNav({
        showArrows: false,
        breakpoint: 1024,
        menuLabel: 'Menu',
        phoneBtn: '928-501-1500',
        locationBtn:
            'https://www.google.com/search?client=firefox-b-1-d&sa=X&biw=3840&bih=2041&q=Quintero+Golf+Club,+16752+W,+AZ-74,+Peoria,+AZ+85383&npsic=0&rflfq=1&rlha=0&rllag=33843946,-112420660,564&tbm=lcl&ved=2ahUKEwjVt4DS8aToAhUpIjQIHQzKDx8QtgN6BAgLEAQ&tbs=lrf:!1m4!1u2!2m2!2m1!1e1!1m5!1u15!2m2!15m1!1shas_1wheelchair_1accessible_1entrance!4e2!2m1!1e2!3sIAE,lf:1,lf_ui:1&rldoc=1#rlfi=hd:;si:3381205720428460650,l,CjRRdWludGVybyBHb2xmIENsdWIsIDE2NzUyIFcsIEFaLTc0LCBQZW9yaWEsIEFaIDg1MzgzSM7MwE5aYAoScXVpbnRlcm8gZ29sZiBjbHViEAAQARACGAAYARgCGAMYBBgFGAYYBxgIGAkiMHF1aW50ZXJvIGdvbGYgY2x1YiAxNjc1MiB3IGF6IDc0IHBlb3JpYSBheiA4NTM4Mw,y,crTsYzB8qNc;mv:[[33.849136,-112.41786529999999],[33.8387575,-112.42345619999999]]',
        closeBtn: true,
    });

    $('.desktop-logo a').append(
        '<img class="img-resp" src="images/logo.png" />'
    );

    $('.dropdown').on('touchstart', function() {
        $(this)
            .find('.dropdown-content')
            .toggleClass('active');
    });

    if ($(window).width() > 1024) {
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

    $('.banner-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false,
    });

    $('.ranking .desc').hide();

    $('.ranking .next-btn').on('click', function() {
        $('.ranking .rank').fadeOut('slow', function() {
            $('.ranking .desc').fadeIn('slow');
        });
    });
    $('.ranking .prev-btn').on('click', function() {
        $('.ranking .desc').fadeOut('slow', function() {
            $('.ranking .rank').fadeIn('slow');
        });
    });
});
