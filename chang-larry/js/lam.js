jQuery(document).ready(function ($) {
    $('#relatedProcList h3').click(function () {
        $('.menu').toggle('slow');
    });
    $('.stellarnav').stellarNav({
        sticky: false,
        showArrows: false,
        breakpoint: 99999,
        mobileMode: true,
    });
    $('#qa_slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: true,
        pauseOnHover: true,
    });
    $('#banner-slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: true,
        slideshowSpeed: 5000,
    });
    $('#tes_slider').flexslider({
        animation: 'fade',
        directionNav: false,
        controlNav: false,
    });
    $('#tesImg_slider').flexslider({
        animation: 'fade',
        slideshowSpeed: 4000,
        directionNav: false,
        controlNav: false,
    });
    $('#leaderMobi').flexslider({
        animation: 'fade',
        slideshowSpeed: 7000,
        directionNav: false,
        controlNav: false,
    });
    $('.gallery-slider').flexslider({
        animation: 'slide',
        animationLoop: true,
        slideshow: false,
        minItems: 1,
        directionNav: true,
        controlNav: false,
        smoothHeight: true,
        move: 1,
        prevText: '<i class="fas fa-angle-left"></i>',
        nextText: '<i class="fas fa-angle-right"></i>',
    });
    var a = 0;
    $(window).scroll(function () {
        var oTop = $('#vidpic #text').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.count').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({ countNum: $this.text() }).animate(
                    { countNum: countTo },
                    {
                        duration: 3000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        },
                    }
                );
            });
            a = 1;
        }
    });
    var open_nav = $('.menu_btn');
    var close_nav = $('.close_nav');
    var menu_nav = $('#nav_overlay');
    open_nav.on('click', function () {
        menu_nav.slideDown();
    });
    close_nav.on('click', function () {
        menu_nav.slideUp();
    });
    var open_search = $('.search_btn');
    var close_search = $('.close_search');
    var menu_search = $('#search');
    open_search.on('click', function () {
        menu_search.slideDown();
    });
    close_search.on('click', function () {
        menu_search.slideUp();
    });

    // menu hovers
    var $drlam = $('#drlam_menu');
    $('.drlam a')
        .on('mouseover', function () {
            $drlam.stop(true).fadeIn(200);
        })
        .on('mouseleave', function () {
            $drlam.stop(true).delay(500).fadeOut(200);
        });
    $drlam
        .on('mouseenter', function () {
            $('#drlam_menu').stop(true).clearQueue().show();
        })
        .on('mouseleave', function () {
            $('#drlam_menu').delay(500).fadeOut(200);
        });

    var $abouthair = $('#abouthair_menu');
    $('.abouthair a')
        .on('mouseover', function () {
            $abouthair.stop(true).fadeIn(200);
        })
        .on('mouseleave', function () {
            $abouthair.stop(true).delay(500).fadeOut(200);
        });
    $abouthair
        .on('mouseenter', function () {
            $('#abouthair_menu').stop(true).clearQueue().show();
        })
        .on('mouseleave', function () {
            $('#abouthair_menu').delay(500).fadeOut(200);
        });

    var $services = $('#services_menu');
    $('.services a')
        .on('mouseover', function () {
            $services.stop(true).fadeIn(200);
        })
        .on('mouseleave', function () {
            $services.stop(true).delay(500).fadeOut(200);
        });
    $services
        .on('mouseenter', function () {
            $('#services_menu').stop(true).clearQueue().show();
        })
        .on('mouseleave', function () {
            $('#services_menu').delay(500).fadeOut(200);
        });
    var $bxa = $('#bxa_menu');
    $('.beforeafter a')
        .on('mouseover', function () {
            $bxa.stop(true).fadeIn(200);
        })
        .on('mouseleave', function () {
            $bxa.stop(true).delay(500).fadeOut(200);
        });
    $bxa.on('mouseenter', function () {
        $('#bxa_menu').stop(true).clearQueue().show();
    }).on('mouseleave', function () {
        $('#bxa_menu').delay(500).fadeOut(200);
    });
    var $videos = $('#videos_menu');
    $('.videos a')
        .on('mouseover', function () {
            $videos.stop(true).fadeIn(200);
        })
        .on('mouseleave', function () {
            $videos.stop(true).delay(500).fadeOut(200);
        });
    $videos
        .on('mouseenter', function () {
            $('#videos_menu').stop(true).clearQueue().show();
        })
        .on('mouseleave', function () {
            $('#videos_menu').delay(500).fadeOut(200);
        });
    var $training = $('#training_menu');
    $('.training a')
        .on('mouseover', function () {
            $training.stop(true).fadeIn(200);
        })
        .on('mouseleave', function () {
            $training.stop(true).delay(500).fadeOut(200);
        });
    $training
        .on('mouseenter', function () {
            $('#training_menu').stop(true).clearQueue().show();
        })
        .on('mouseleave', function () {
            $('#training_menu').delay(500).fadeOut(200);
        });
    var $resources = $('#resources_menu');
    $('.resources a')
        .on('mouseover', function () {
            $resources.stop(true).fadeIn(200);
        })
        .on('mouseleave', function () {
            $resources.stop(true).delay(500).fadeOut(200);
        });
    $resources
        .on('mouseenter', function () {
            $('#resources_menu').stop(true).clearQueue().show();
        })
        .on('mouseleave', function () {
            $('#resources_menu').delay(500).fadeOut(200);
        });
    $('#men_btn').mouseenter(function () {
        $('#men_btn_overlay').fadeIn('slow');
    });
    $('#men_btn_overlay').mouseleave(function () {
        $('#men_btn_overlay').fadeOut('slow');
    });
    $('#women_btn').mouseenter(function () {
        $('#women_btn_overlay').fadeIn('slow');
    });
    $('#women_btn_overlay').mouseleave(function () {
        $('#women_btn_overlay').fadeOut('slow');
    });
    $('#ethnic_btn').mouseenter(function () {
        $('#ethnic_btn_overlay').fadeIn('slow');
    });
    $('#ethnic_btn_overlay').mouseleave(function () {
        $('#ethnic_btn_overlay').fadeOut('slow');
    });
    $('#eyebrow_btn').mouseenter(function () {
        $('#eyebrow_btn_overlay').fadeIn('slow');
    });
    $('#eyebrow_btn_overlay').mouseleave(function () {
        $('#eyebrow_btn_overlay').fadeOut('slow');
    });
    $('#corrective_btn').mouseenter(function () {
        $('#corrective_btn_overlay').fadeIn('slow');
    });
    $('#corrective_btn_overlay').mouseleave(function () {
        $('#corrective_btn_overlay').fadeOut('slow');
    });
    $('#facial_btn').mouseenter(function () {
        $('#facial_btn_overlay').fadeIn('slow');
    });
    $('#facial_btn_overlay').mouseleave(function () {
        $('#facial_btn_overlay').fadeOut('slow');
    });
    $('#scar_btn').mouseenter(function () {
        $('#scar_btn_overlay').fadeIn('slow');
    });
    $('#scar_btn_overlay').mouseleave(function () {
        $('#scar_btn_overlay').fadeOut('slow');
    });
    $('#crown_btn').mouseenter(function () {
        $('#crown_btn_overlay').fadeIn('slow');
    });
    $('#crown_btn_overlay').mouseleave(function () {
        $('#crown_btn_overlay').fadeOut('slow');
    });
    $('#medical_btn').mouseenter(function () {
        $('#medical_btn_overlay').fadeIn('slow');
    });
    $('#medical_btn_overlay').mouseleave(function () {
        $('#medical_btn_overlay').fadeOut('slow');
    });
    $('#prp_btn').mouseenter(function () {
        $('#prp_btn_overlay').fadeIn('slow');
    });
    $('#prp_btn_overlay').mouseleave(function () {
        $('#prp_btn_overlay').fadeOut('slow');
    });
    $('#smp_btn').mouseenter(function () {
        $('#smp_btn_overlay').fadeIn('slow');
    });
    $('#smp_btn_overlay').mouseleave(function () {
        $('#smp_btn_overlay').fadeOut('slow');
    });
    $('#trans_btn').mouseenter(function () {
        $('#trans_btn_overlay').fadeIn('slow');
    });
    $('#trans_btn_overlay').mouseleave(function () {
        $('#trans_btn_overlay').fadeOut('slow');
    });
});
