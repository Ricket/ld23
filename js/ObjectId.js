define([], function() {
	var nextId = 1;

	return {
		get: function() {
			return nextId++;
		}
	};
});
