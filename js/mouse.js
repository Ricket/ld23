define([], function() {
	var $canvas;

	var buttons = {
		"1": [false, false],
		"2": [false, false],
		"3": [false, false]
	};

	return {
		LEFT: 1,
		MIDDLE: 2,
		RIGHT: 3,
		x: 0,
		y: 0,
		setup: function(_$canvas) {
			if($canvas) {
				console.error('mouse already set up');
				return;
			}

			_this = this;

			$canvas = _$canvas;
			$canvas.mousedown(function(e) {
				if(e.which >= 1 && e.which <= 3) {
					buttons[e.which][0] = true;
					buttons[e.which][1] = true;
				}
				_this.x = e.offsetX;
				_this.y = e.offsetY;
			});
			$canvas.mouseup(function(e) {
				if(e.which >= 1 && e.which <= 3) {
					buttons[e.which][0] = false;
					buttons[e.which][1] = true;
				}
				_this.x = e.offsetX;
				_this.y = e.offsetY;
			});
			$canvas.mousemove(function(e) {
				_this.x = e.offsetX;
				_this.y = e.offsetY;
			});
		},
		tick: function() {
			for(i in buttons) {
				buttons[i][1] = false;
			}
		},
		isDown: function(button) {
			return buttons[button][0];
		},
		isUp: function(button) {
			return !(buttons[button][0]);
		},
		justChanged: function(button) {
			return (buttons[button][1]);
		},
		justDown: function(code) {
			return (this.isDown(code) && this.justChanged(code));
		},
		justUp: function(code) {
			return (this.isUp(code) && this.justChanged(code));
		},
		down: function(fn) {
			$canvas.mousedown(fn);
		},
		up: function(fn) {
			$canvas.mouseup(fn);
		},
		move: function(fn) {
			$canvas.mousemove(fn);
		}
	};
});
