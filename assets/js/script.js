/* 
Template Name: Ehtasab
*/

(function($) { 

"use strict";

	/*PRELOADER JS*/
	$(window).on('load', function() { 
		$('.status').fadeOut();
		$('.preloader').delay(350).fadeOut('slow'); 
	});		
	
	
	// Active Slick Nav 			
	$('.navigation').slicknav({
		label: '',
		duration: 1000,
		easingOpen: "easeOutBounce", //available with jQuery UI
		prependTo:'#mobile_menu',
		closeOnClick: true,
		easingClose:"swing", 
		easingOpen:"swing", 
		openedSymbol: "&#9660;",
		closedSymbol: "&#9658;" 	
	});
	
	// YouTubePopUp		
	jQuery("a.ab_vid_btn").YouTubePopUp({ autoplay: 0 });
	
	$(document).ready(function(){"use strict";
	
		//Scroll back to top
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
		
	});
	
	
	// Current Year
	
	const d = new Date();
	let year = d.getFullYear();
	document.getElementById("curyear").innerHTML = year;
	
})(jQuery);