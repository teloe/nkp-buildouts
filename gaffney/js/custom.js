jQuery(document).ready(function($) {

	$('.stellarnav').stellarNav({
		showArrows:false,
		breakpoint:960,
		menuLabel:'Menu',
		phoneBtn:'',
		locationBtn:''
    });
    
    $('.video').magnificPopup({
        items: {
            src: '<div class="embed-responsive"><iframe width="560" height="315" src="https://www.youtube.com/embed/meNsxmyY8Ng" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
            type: 'inline'
        }
    });

	$('.testimonials-slider').flexslider({
	    animation: "fade",
	    directionNav: false,
	    controlNav: false
    });
    
});
