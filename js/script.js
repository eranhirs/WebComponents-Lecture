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
            slidesContainer.appendChild(slide);
        }

        // Add Reveal listener
        Reveal.addEventListener('slidechanged', function(event) {
            // Only in kitty slide
            if (event.currentSlide.id === 'importKittyHtml') {
                initializeKittySlide();
            }

            // Only in template slide
            if (event.currentSlide.id === 'writing-the-template-slide') {
                //initializeTemplatesSlide();
            }
        } );
    };

    var initializeKittySlide = function() {
        // Grab image and set onclick
        var img = document.querySelector('#kittyImage');
        img.onclick = function() { console.log("Hello world!"); };
    };

    var initializeTemplatesExample = function () {
        var importDoc = document.currentScript.ownerDocument;

        var list = importDoc.querySelector('#writing-the-template-slide ul');
        var template = importDoc.querySelector('#todo-list-item-template');
        var counter = 1;

        // Adds an item to the to-do list
        function addItem(text) {
            // Clone template
            var clone = template.content.cloneNode(true);
            clone.querySelector('.item-number').innerHTML = counter++;
            clone.querySelector('.item-text').innerHTML = text;

            list.appendChild(clone);
        }

        var form = importDoc.querySelector('#writing-the-template-slide form');
        form.removeEventListener('submit');
        form.addEventListener('submit',  function(e) {
            var formTextbox = this[0];
            var newTaskText = formTextbox.value;
            addItem(newTaskText);
            formTextbox.value = "";
            e.preventDefault();
        });
    }

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
        'initializeTemplatesExample': initializeTemplatesExample,
        'getKittyImageFromImport': getKittyImageFromImport
	};
}());