chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Main bola hey");
		// ----------------------------------------------------------

		var ai = new aifyjs();

		ai.labels();

		console.log("Main bola 2");

		ai.captions();

		console.log("Main bola 3");

		window.setTimeout(function(){ai.displayCaptions();}, 5000);
		window.setTimeout(function(){ai.displayLabels();}, 5000);

	}
	}, 10);
});