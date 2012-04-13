define([], function() {
	var images = {};

	return {
		loadImage : function (url, oncomplete) {
			if(url in images) {
				if(oncomplete) {
					if(images[url].complete) {
						oncomplete();
					} else {
						// note this overrides the complete callback; no easy way to add multiple
						// callbacks, and it probably would not be the desired behavior anyway
						images[url].onload = oncomplete;
					}
				}
				
				return images[url];
			}

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
