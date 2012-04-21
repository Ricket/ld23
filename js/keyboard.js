define([], function() {
	var keys = {};

	/* each key is an array of 2 elements: is down, and just changed */

	$(document).keydown(function (e) {
		if(e.which in keys) {
			keys[e.which][0] = true;
			keys[e.which][1] = true;
		} else {
			keys[e.which] = [true,true];
		}
	});

	$(document).keyup(function (e) {
		if(e.which in keys) {
			keys[e.which][0] = false;
			keys[e.which][1] = true;
		} else {
			keys[e.which] = [false,true];
		}
	});

	return {
		tick: function() {
			for(i in keys) {
				keys[i][1] = false;
			}
		},
		isDown: function(code) {
			return (code in keys && keys[code][0]);
		},
		isUp: function(code) {
			return !(this.isDown(code));
		},
		justChanged: function(code) {
			return (code in keys && keys[code][1]);
		},
		justDown: function(code) {
			return (this.isDown(code) && this.justChanged(code));
		},
		justUp: function(code) {
			return (this.isUp(code) && this.justChanged(code));
		}
	};
});
