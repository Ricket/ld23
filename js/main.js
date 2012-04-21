window.CANVAS_WIDTH = 800;
window.CANVAS_HEIGHT = 600;

require(['gfx', 'tilesets', 'keyboard', 'mouse'], function(gfx, tilesets, keyboard, mouse) {

	var $canvas = gfx.loadCanvas('maincanvas');
    mouse.setup($canvas);

    var gameState = 'PLACE_TURRET';
    var turrets = [];

    function logicTick() {
        // keyboard and mouse events
        if(mouse.justDown(mouse.LEFT)) {
            if(gameState == 'PLACE_TURRET') {
                // place a turret
                turrets.push({x:mouse.x, y:mouse.y});
            }
        }

        keyboard.tick(); // make sure to tick AFTER doing justDown/justUp checks
        mouse.tick();
    }

    var last = (new Date()).getTime();
    (function drawLoop() {
    	requestAnimFrame(drawLoop);
        var now = (new Date()).getTime();

        while(last < now) {
            logicTick();
            last += 1000/30;
        }

    	gfx.clear("#203350");

        gfx.fillCircle(400, 300, 100, "#105510");
        for(var i in turrets) {
            var turret = turrets[i];
            gfx.fillCircle(turret.x, turret.y, 30, "#AA0000");
        }

    })();
});
