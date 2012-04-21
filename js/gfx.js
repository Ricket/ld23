define(['images'], function(images) {
	var $canvas, canvas, ctx;
	var WIDTH = 800;
	var HEIGHT = 600;

	window.requestAnimFrame = window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame    ||
		window.oRequestAnimationFrame      ||
		window.msRequestAnimationFrame     ||
		function( callback ){
			window.setTimeout(callback, 1000 / 60);
		};

	return {
		loadCanvas: function(id) {
			$canvas = $('#'+id);
			canvas = $canvas[0];

			this.setSize(WIDTH, HEIGHT);

			ctx = canvas.getContext('2d');

			return $canvas;
		},
		setSize: function(width, height) {
			WIDTH = width;
			HEIGHT = height;
			$canvas.attr('width', WIDTH).attr('height', HEIGHT);
		},
		clear: function(color) {
			ctx.fillStyle = color;
    		ctx.fillRect(0, 0, WIDTH, HEIGHT);
		},
		fillCircle: function(x, y, radius, color) {
			ctx.fillStyle = color;
			ctx.beginPath();
			ctx.arc(x, y, radius, 0, 2*Math.PI);
			ctx.closePath();
			ctx.fill();
		},
		drawTile: function(tile, x, y, scaleX, scaleY) { /* tile returned from tilesets.getTile */
			scaleY = scaleY || scaleX || 1.0; // if only one scale is specified, scale it uniformly
			scaleX = scaleX || 1.0;
			ctx.drawImage(tile[0], tile[1], tile[2], tile[3], tile[4], x, y, scaleX*tile[3], scaleY*tile[4]);
		},
		drawImage: function(image, x, y, width, height) {
			if(typeof(image) == "string") {
				image = images.loadImage(image);
			}
			if(image.complete) {
				if(width && height) {
					ctx.drawImage(image, x, y, width, height);
				} else {
					ctx.drawImage(image, x, y);
				}
			}
		},
		drawImageRot: function(image, x, y, angle) {
			if(typeof(image) == "string") {
				image = images.loadImage(image);
			}
			if(image.complete) {
				ctx.translate(x, y);
				ctx.rotate(angle);
				ctx.translate(-image.width/2, -image.height/2);
				
				ctx.drawImage(image, 0, 0);

				ctx.translate(image.width/2, image.height/2);
				ctx.rotate(-angle); // TODO why doesn't resetTransform exist in Chrome???
				ctx.translate(-x, -y);
			}
		},
		drawText: function(str, x, y, size, color, baseline) {
			baseline = baseline || "top";

			ctx.textBaseline = baseline;
			ctx.fillStyle = color;
			ctx.translate(x,y);
			ctx.scale(size, size);
			ctx.fillText(str, 0, 0);
			ctx.scale(1/size, 1/size);
			ctx.translate(-x,-y);
		}
	};
});
