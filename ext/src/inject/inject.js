chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			// ----------------------------------------------------------
			// This part of the script triggers when page is done loading
			
			// ----------------------------------------------------------

			chrome.storage.sync.get({
			    language: 'en',
			    extstate: true
			}, function(items) {
			    var lang = items.language;
			    var state = items.extstate;

			    if(state){

			    	console.log("Running AIFY");

					var ai = new aifyjs();

					ai.labels();

					ai.captions();
					
				}
				else{
					console.log("Not running AIFY");
				}
			    
			});
		}
	}, 10);
});

