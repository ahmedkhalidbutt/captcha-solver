let submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', handleSubmit);

function handleSubmit () {
    let apiKey = document.getElementById('api-key').value;
    let autoSubmit = document.getElementById('auto-submit').value;
    
    if(apiKey && autoSubmit) {
        let options = {
            apiKey,
            autoSubmit
        }
        chrome.storage.sync.set({
            options
        });
        setTimeout(() => {
            window.close();
        }, 5000);
    }
}

function fetchOptions() {
	chrome.storage.sync.get([ 'options' ], function(result) {
		if (result && result.options) {
			let { options } = result;
			let { apiKey, autoSubmit } = options;
			document.getElementById('api-key').value = apiKey;
			document.getElementById('auto-submit').value = autoSubmit;
		}
	});
}