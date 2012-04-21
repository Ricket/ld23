window.CANVAS_WIDTH = 800;
window.CANVAS_HEIGHT = 600;

require(['gfx', 'tilesets', 'images', 'Sprite', 'sprites', 'keyboard'], function(gfx, tilesets, images, Sprite, sprites, keyboard) {

	gfx.loadCanvas('maincanvas');
	tilesets.loadTileset('test');
    images.loadImage('img/dude.png');

    var player = new Sprite('test', 'glider0', 5, 5);
    sprites.add(player);

    function logicTick() {
        if(keyboard.justDown(13)) {
            console.log('you just pressed enter');
        }

        if(keyboard.isDown(37)) { // left
            player.x -= 3;
        }
        if(keyboard.isDown(39)) { // right
            player.x += 3;
        }
        if(keyboard.isDown(38)) { // up
            player.y -= 3;
        }
        if(keyboard.isDown(40)) { // down
            player.y += 3;
        }

        keyboard.tick(); // make sure to tick AFTER doing justDown/justUp checks
    }

    var last = (new Date()).getTime();
    (function drawLoop() {
    	requestAnimFrame(drawLoop);
        var now = (new Date()).getTime();

        while(last < now) {
            logicTick();
            last += 1000/30;
        }

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
