
/* GP 2017 */

$(document).ready(function() {
	
	$(".link").click(function(){
		
		var obiekt = $(this);
		
		var gdzie = obiekt.attr('href');
		
		$('html, body').animate({
			scrollTop: $(gdzie).offset().top
		}, 1500);
		
		
	});
											
	
										
})