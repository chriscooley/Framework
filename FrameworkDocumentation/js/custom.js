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
		

		// fix nav to top
		if(scrollPos >= 200){
			$('.container .nav ul').css({ 'position' : 'relative','top': (scrollPos-200)+'px'});
		
		}else if(scrollPos < 200) {
			$('.container .nav ul').css({ 'position' : 'relative', 'top' : 0+'px' });
		}
		
		// parralax header
		if(scrollPos < 200){
			jQuery('.top .top-header').css({
				'top' : -(scrollPos/3.5)+"px",
				'opacity' : 1-(scrollPos/150)
			});
		}

		//show the animate-me box
		if(scrollPos >= $('#animate').offset().top){
			$('.animate-me').show(500);
		}else {
			$('.animate-me').hide(500);
		}
		
	}

	// don't parallax for mobile
	if(!isMobile()) {
		jQuery(window).scroll(function() {
			scrollBanner();
		});
	}


	// change punction color
	$('.sunlight-punctuation').each(function(){
		if($(this).html() == '{' || $(this).html() == '}' || $(this).html() == '/'){
			$(this).css({'color': '#888'});
		}
	});

	// scroll to section
	$('.nav li a').click(function(event){
		event.preventDefault();
		var id = $(this).attr('href');
		$('html, body').animate({
	         scrollTop: $(id).offset().top
	     }, 500);
	});

	// animate the animate-me box
	$('.animation-list li').click(function(){
		var text = $(this).text();
		$('.animate-me').html(text).addClass(text);
		var lastClass = $('.animate-me').attr('class').split(' ').pop();
		setTimeout(function(){
			$('.animate-me').removeClass(lastClass);
		}, 1000);
		
	});



});