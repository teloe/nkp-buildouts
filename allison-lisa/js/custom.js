jQuery(document).ready(function($) {

	$('.stellarnav').stellarNav({
		showArrows:false,
		breakpoint:960,
		menuLabel:'Menu',
		phoneBtn:'',
		locationBtn:''
    });
    
    $('.testimonials-slider').flexslider({
	    animation: "fade",
	    directionNav: false,
	    controlNav: false
    });

	// $('#slider').flexslider({
	//     animation: "fade",
	//     directionNav: false,
	//     controlNav: false
    // });
    
});