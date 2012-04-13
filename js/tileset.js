define([], function() {
	var tilesets;

	tilesets = {};

	function parseTileset(tileset) {
		var tsImg;

		tsImg = new Image(tileset.setsize[0], tileset.setsize[1]);
		tsImg.src = 'tilesets/' + tileset.filename;

		tilesets[tileset.name] = {
			image: tsImg,
			size: tileset.setsize,
			tilesize: tileset.tilesize,
			tilenames: tileset.names,
		};

		console.log('loaded tileset ' + tileset.name);
	}

	function findCoords(tileset, tile) {
		if(!(tileset in tilesets)) {
			console.log("tileset " + tileset + " not found");
			return null;
		}

		var ts = tilesets[tileset];
		var idx = 0;
		while(idx < ts.tilenames.length && ts.tilenames[idx] != tile) idx++;

		if(idx == ts.tilenames.length) {
			console.log(tile + " not found in tileset " + tileset);
			return null;
		}

		var x = idx % ts.size[0];
		var y = Math.floor(idx / ts.size[0]);

		return [x * ts.tilesize[0], y * ts.tilesize[1], ts.tilesize[0], ts.tilesize[1]];
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
				var coords = findCoords(tilesetName, tilename);
				return [tilesets[tilesetName].image,
					coords[0], coords[1], coords[2], coords[3]];
			} else {
				return null;
			}
		}
	};
	return tileset;
});
