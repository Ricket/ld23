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
		isLoaded : function (urlOrImage) {
			if(typeof(urlOrImage) == "string") {
				if(urlOrImage in images) {
					urlOrImage = images[urlOrImage];
				} else {
					console.error('no such image: ' + urlOrImage);
					return false;
				}
			}
			return urlOrImage.complete;
		}
	};
});
