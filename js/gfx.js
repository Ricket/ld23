define([], function() {
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
		}
	};
});