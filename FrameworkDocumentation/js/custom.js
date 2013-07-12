$(document).ready(function(){
	///////////////////////////////
	// Mobile Detection
	///////////////////////////////
	function isMobile(){
		return (
		(navigator.userAgent.match(/Android/i)) ||
		(navigator.userAgent.match(/webOS/i)) ||
		(navigator.userAgent.match(/iPhone/i)) ||
		(navigator.userAgent.match(/iPod/i)) ||
		(navigator.userAgent.match(/iPad/i)) ||
		(navigator.userAgent.match(/BlackBerry/))
		);
	} 

	function scrollBanner() {
		//Get the scoll position of the page
		scrollPos = jQuery(this).scrollTop();
		console.log(scrollPos);
		

		// fix nav to top
		if(scrollPos >= 200){
			$('.container .nav ul').css({ 'position' : 'relative','top': (scrollPos-200)+'px'});
		
		}else if(scrollPos < 200) {
			console.log('test');
			$('.container .nav ul').css({ 'position' : 'relative', 'top' : 0+'px' });
		}
		
		// parralax header
		jQuery('.top .header').css({
			'top' : -(scrollPos/3)+"px",
			'opacity' : 1-(scrollPos/150)
		});
	}

	if(!isMobile()) {
		jQuery(window).scroll(function() {
			scrollBanner();
		});
	}



});