define(['ObjectId'], function(ObjectId) {
	function Sprite(tileset, tile, x, y) {
		this.tileset = tileset;
		this.tile = tile;
		this.x = x;
		this.y = y;

		this.id = ObjectId.get();
	}

	return Sprite;
});
