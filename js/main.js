window.CANVAS_WIDTH = 800;
window.CANVAS_HEIGHT = 600;

require(['gfx', 'tilesets', 'keyboard', 'mouse', 'math'], function(gfx, tilesets, keyboard, mouse, math) {

	var $canvas = gfx.loadCanvas('maincanvas');
    mouse.setup($canvas);
    $canvas.disableSelection();

    var gameState = 'PLACE_TURRET';
    var turrets = [];

    function logicTick() {
        // keyboard and mouse events
        if(mouse.justDown(mouse.LEFT)) {
            if(gameState == 'PLACE_TURRET') {
                // place a turret

                var newturret = math.getNearestPointOnCircle(mouse.x, mouse.y, 400, 300, 100);

                turrets.push({x:newturret[0], y:newturret[1], rot:newturret[2]});
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
            gfx.drawImageRot('turret', turret.x, turret.y, turret.rot);
        }

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
