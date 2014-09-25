Reveal.addEventListener('slidechanged', function(event) {
	// Only in kitty slide
	if (event.currentSlide.id == "importKittyHtml") {
	
		// Grab image and set onclick
		var img = document.querySelector('#kittyImage');
		img.onclick = function() { console.log("Hello world!"); };
		
	}
} );


Utilities = (function() {

	// Add slide numbers
	var getCurrentDate = function()
	{
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!

		var yyyy = today.getFullYear();
		if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} today = dd+'/'+mm+'/'+yyyy;
		return today;
	}
	
	
	return {
		'getCurrentDate': getCurrentDate
	};
}());

