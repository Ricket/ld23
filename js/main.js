window.CANVAS_WIDTH = 800;
window.CANVAS_HEIGHT = 600;

require(['gfx', 'tilesets', 'keyboard'], function(gfx, tilesets, keyboard) {

	var $canvas = gfx.loadCanvas('maincanvas');

    var gameState = 'PLACE_TURRET';
    var turrets = [];

    function logicTick() {
        // keyboard and mouse events here

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

    	gfx.clear("#203350");

        gfx.fillCircle(400, 300, 100, "#105510");
        for(var i in turrets) {
            var turret = turrets[i];
            gfx.fillCircle(turret.x, turret.y, 30, "#AA0000");
        }

    })();

    $canvas.mousedown(function(e) {
        if(e.which == 1) {
            console.log('mousedown left');
            console.log(e.offsetX + "," + e.offsetY);

            if(gameState == 'PLACE_TURRET') {
                // place a turret
                turrets.push({x:e.offsetX, y:e.offsetY});
                console.log(turrets);
            }
        }
    });
});
