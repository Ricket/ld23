window.CANVAS_WIDTH = 800;
window.CANVAS_HEIGHT = 600;

require(['gfx', 'tileset'], function(gfx, tileset) {

	gfx.loadCanvas('maincanvas');
	tileset.loadTileset('test');

    (function drawLoop() {
    	requestAnimFrame(drawLoop);
    	gfx.clear("#00ff00");
    	if(tileset.loadedTileset('test')) {
    		// TODO obviously don't call this every single time; needs to be cached
            var tile = tileset.getTile('test', 'glider0');
    		gfx.drawTile(tile, 0, 0);
    	}
    })();
});
