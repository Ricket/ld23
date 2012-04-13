define([], function() {
	var images = {};

	return {
		loadImage : function (url, oncomplete) {
			var newimg = new Image();
			if(oncomplete) {
				newimg.onload = oncomplete;
			}
			newimg.src = url;
			images[url] = newimg;
			return newimg;
		},
		isLoaded : function (url) {
			return (url in images) && images[url].complete;
		}
	};
});
