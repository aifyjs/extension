// var readyStateCheckInterval = setInterval(function() {
// 	if (document.readyState === "complete") {
// 		clearInterval(readyStateCheckInterval);

		// Saves options to chrome.storage
		function save_options() {
		  var extstate = document.getElementById('extstate').checked;
		  var language = document.getElementById('language').value;
		  chrome.storage.sync.set({
		    language: language,
		    extstate: extstate
		  });
		}

		// Restores select box and checkbox state using the preferences
		// stored in chrome.storage.
		function restore_options() {
			chrome.storage.sync.get({
				language: 'en',
				extstate: true
			}, function(items) {
				document.getElementById('language').value = items.language;
				document.getElementById('extstate').checked = items.extstate;
			});
		}

		document.addEventListener('DOMContentLoaded', restore_options);

		document.getElementById('save').addEventListener('click',
			save_options
		);

// 	}
// }, 10);