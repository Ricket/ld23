window.CANVAS_WIDTH = 800;
window.CANVAS_HEIGHT = 600;

require(['gfx'], function(gfx) {

	gfx.loadCanvas('maincanvas');

    (function drawLoop() {
    	requestAnimFrame(drawLoop);
    	gfx.clear("#00ff00");
    	
    })();
});
