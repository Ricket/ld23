window.CANVAS_WIDTH = 800;
window.CANVAS_HEIGHT = 600;

require(['gfx', 'tilesets', 'keyboard', 'mouse', 'math'], function(gfx, tilesets, keyboard, mouse, math) {

	var $canvas = gfx.loadCanvas('maincanvas');
    mouse.setup($canvas);
    $canvas.disableSelection();

    var gameState = 'Place a turret!';
    var turrets = [];

    setInterval(function() {
        // keyboard and mouse events
        if(mouse.justDown(mouse.LEFT)) {
            if(gameState == 'Place a turret!') {
                // place a turret

                var newturret = math.getNearestPointOnCircle(mouse.x, mouse.y, 400, 300, 100);

                turrets.push({x:newturret[0], y:newturret[1], rot:newturret[2]});

                gameState = 'Shoot stuff!';
            }
            else if(gameState == 'Shoot stuff!') {

            }
        }

        keyboard.tick(); // make sure to tick AFTER doing justDown/justUp checks
        mouse.tick();
    }, 1000/30);

    (function drawLoop() {
    	requestAnimFrame(drawLoop);

    	gfx.clear("#203350");

        gfx.fillCircle(400, 300, 100, "#105510");
        for(var i in turrets) {
            var turret = turrets[i];
            gfx.drawImageRot('turret', turret.x, turret.y, turret.rot);
        }

        gfx.drawText(gameState, 0, 0, 2.5, "#da6932");

    })();
});

// jQuery disableSelection addon function
// copied from: http://stackoverflow.com/a/2700029/47493
(function($){
    $.fn.disableSelection = function() {
        return this.each(function() {           
            $(this).attr('unselectable', 'on')
                   .css({
                       '-moz-user-select':'none',
                       '-webkit-user-select':'none',
                       'user-select':'none',
                       '-ms-user-select':'none'
                   })
                   .each(function() {
                       this.onselectstart = function() { return false; };
                   });
        });
    };
})(jQuery);
