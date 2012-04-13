define(['tileset', 'images'], function(tileset, images) {
	var $canvas, canvas, ctx;
	var WIDTH = 800;
	var HEIGHT = 600;

	window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
    })();

	return {
		loadCanvas : function(id) {
			$canvas = $('#'+id);
			canvas = $canvas[0];

			$canvas.attr('width', WIDTH).attr('height', HEIGHT);

			ctx = canvas.getContext('2d');
		},
		clear : function(color) {
			ctx.fillStyle = color;
    		ctx.fillRect(0, 0, WIDTH, HEIGHT);
		},
		drawTile : function(tile, x, y, scaleX, scaleY) { /* tile returned from tileset.getTile */
			scaleY = scaleY || scaleX || 1.0; // if only one scale is specified, scale it uniformly
			scaleX = scaleX || 1.0;
			ctx.drawImage(tile[0], tile[1], tile[2], tile[3], tile[4], x, y, scaleX*tile[3], scaleY*tile[4]);
		},
		drawImage : function(image, x, y, width, height) {
			if(typeof(image) == "string") {
				image = images.loadImage(image);
			}
			if(width && height) {
				ctx.drawImage(image, x, y, width, height);
			} else {
				ctx.drawImage(image, x, y);
			}
		}
	};
});