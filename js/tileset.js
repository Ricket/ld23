define([], function() {
	var tilesets;

	tilesets = {};

	function parseTileset(tileset) {
		var tsImg;

		tsImg = new Image(tileset.setsize[0], tileset.setsize[1]);
		tsImg.src = 'tilesets/' + tileset.filename;

		tilesets[tileset.name] = {
			image: tsImg,
			tilesize: tileset.tilesize,
			tilenames: tileset.names,
		};
	}

	var tileset = {
		loadTileset: function(name) {
			$.getJSON('tilesets/' + name + '.json', parseTileset);
		},
		loadedTileset: function(name) {
			return (name in tilesets) && (tilesets[name].image.complete == true);
		},
		getTile: function(tilesetName, tilename) {
			if(tileset.loadedTileset(tilesetName)) {
				return [tilesets[tilesetName].image,
					0, 0, tilesets[tilesetName].tilesize[0], tilesets[tilesetName].tilesize[1]];
			} else {
				return null;
			}
		}
	};
	return tileset;
});