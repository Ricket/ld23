define([], function() {
	return {
		getNearestPointOnCircle: function(x, y, circlex, circley, radius) {
			var vecx = x - circlex,
			    vecy = y - circley;

			var mag = Math.sqrt(vecx * vecx + vecy * vecy);
			vecx = vecx / mag * radius;
			vecy = vecy / mag * radius;
			var ang = Math.atan(vecy/vecx);
			if(vecx < 0) ang += Math.PI;
			return [circlex + vecx, circley + vecy, ang];
		}
	};
});
