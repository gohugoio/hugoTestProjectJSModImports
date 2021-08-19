self.addEventListener(
	'message',
	function(e) {
		self.postMessage('Echo From Worker: ' + e.data);
	},
	false
);
