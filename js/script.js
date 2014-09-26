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
	};

    // Take the slides from html imports and append them to DOM
    var initialize = function() {
        // Get all slides from imports
        var slidesContainer = document.querySelector('.slides');
        var links = document.head.querySelectorAll('link[rel="import"]');

        for (i=0; i < links.length; i++) {
            var link = links[i];
            var slide = link.import.querySelector('.slide');
            slidesContainer.appendChild(slide.cloneNode(true));
        }

        // Add Reveal listener
        Reveal.addEventListener('slidechanged', function(event) {
            // Only in kitty slide
            if (event.currentSlide.id == "importKittyHtml") {

                // Grab image and set onclick
                var img = document.querySelector('#kittyImage');
                img.onclick = function() { console.log("Hello world!"); };

            }
        } );
    };

    var getKittyImageFromImport = function() {
        var importDoc = document.currentScript.ownerDocument;
        var mainDoc = document;

        // Grab content
        var link = importDoc.querySelector('link[rel="import"]');
        var content = link.import;

        // Grab relevant DOM from kitty page
        var kitty = content.querySelector('.kitty');

        // Append to our DOM
        var examplePlaceHolder = importDoc.querySelector('#examplePlaceHolder');
        examplePlaceHolder.appendChild(kitty.cloneNode(true));
    };

	return {
		'getCurrentDate': getCurrentDate,
        'initialize': initialize,
        'getKittyImageFromImport': getKittyImageFromImport
	};
}());