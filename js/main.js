window.CANVAS_WIDTH = 800;
window.CANVAS_HEIGHT = 600;

require(['gfx', 'tilesets', 'images', 'Sprite', 'sprites'], function(gfx, tilesets, images, Sprite, sprites) {

	gfx.loadCanvas('maincanvas');
	tilesets.loadTileset('test');
    images.loadImage('img/dude.png');

    var player = new Sprite('test', 'glider0', 5, 5);
    sprites.add(player);

    (function drawLoop() {
    	requestAnimFrame(drawLoop);
        var now = (new Date()).getTime();

    	gfx.clear("#00ff00");
    	if(tilesets.loadedTileset('test')) {
    		// TODO obviously need to cache these values
            var whichGlider = Math.floor((now / 500) % 4);
            var tile = tilesets.getTile('test', 'glider' + whichGlider);
    		gfx.drawTile(tile, 0, 0);
    	}
        if(images.isLoaded('img/dude.png')) {
            gfx.drawImage('img/dude.png', 32, 0);
        }

        sprites.drawAll();
    })();
});
