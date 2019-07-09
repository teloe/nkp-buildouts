jQuery(document).ready(function($) {

	$('.stellarnav').stellarNav({
		showArrows:false,
		// breakpoint:960,
		menuLabel:'Menu',
		phoneBtn:'',
		locationBtn:''
	});

	$('#slider').flexslider({
	    animation: "fade",
	    directionNav: false,
	    controlNav: false
    });

    if ($(window).width() < 768) {
        $('.stellarnav').removeClass('mobile').addClass('desktop');
     }

    // remove mobile stellarnav on window resize
    $(window).resize(function() {
        if ($(window).width() < 768) {
            $('.stellarnav').removeClass('mobile').addClass('desktop');
         }
    });

    // hamburger menu open/ close
    $('.hamburger').on('click', function(){
        $('nav').css('transform', 'translateX(0)');
    });
    $('.close-btn').on('click', function() {
        $('nav').css('transform', 'translateX(500px)');
    });

});
