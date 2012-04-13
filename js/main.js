window.CANVAS_WIDTH = 800;
window.CANVAS_HEIGHT = 600;

require([], function() {
    var canvas, ctx;

    canvas = document.getElementById('maincanvas');
    ctx = canvas.getContext('2d');

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

    (function drawLoop() {
    	requestAnimFrame(drawLoop);
    	// render here
    	ctx.fillStyle = "#ff0000";
    	ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    })();
});
