window.CANVAS_WIDTH = 800;
window.CANVAS_HEIGHT = 600;

require(['gfx', 'tileset'], function(gfx, tileset) {

	gfx.loadCanvas('maincanvas');
	tileset.loadTileset('test');

    (function drawLoop() {
    	
    	gfx.clear("#00ff00");
    	if(tileset.loadedTileset('test')) {
    		var tile = tileset.getTile('test', 'glider0');
    		console.log(tile);
    	} else {
    		requestAnimFrame(drawLoop);
    	}
    })();
});
