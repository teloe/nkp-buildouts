jQuery(document).ready(function($) {

	$('.stellarnav').stellarNav({
		showArrows:false,
		breakpoint:960,
		menuLabel:'Menu',
		phoneBtn:'',
		locationBtn:''
	});

	$('#slider').flexslider({
	    animation: "fade",
	    directionNav: false,
	    controlNav: false
	});

});
