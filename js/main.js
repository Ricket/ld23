window.CANVAS_WIDTH = 800;
window.CANVAS_HEIGHT = 600;

require(['gfx', 'tileset', 'images'], function(gfx, tileset, images) {

	gfx.loadCanvas('maincanvas');
	tileset.loadTileset('test');
    images.loadImage('img/dude.png');

    (function drawLoop() {
    	requestAnimFrame(drawLoop);
        var now = (new Date()).getTime();

    	gfx.clear("#00ff00");
    	if(tileset.loadedTileset('test')) {
    		// TODO obviously need to cache these values
            var whichGlider = Math.floor((now / 500) % 4);
            var tile = tileset.getTile('test', 'glider' + whichGlider);
    		gfx.drawTile(tile, 0, 0);
    	}
        if(images.isLoaded('img/dude.png')) {
            gfx.drawImage('img/dude.png', 32, 0);
        }
    })();
});
