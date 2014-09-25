Reveal.addEventListener('slidechanged', function(event) {
	// Only in kitty slide
	if (event.currentSlide.id == "importKittyHtml") {
	
		// Grab image and set onclick
		var img = document.querySelector('#kittyImage');
		img.onclick = function() { console.log("Hello world!"); };
		
	}
} );