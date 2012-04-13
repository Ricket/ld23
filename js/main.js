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
    })();
});
