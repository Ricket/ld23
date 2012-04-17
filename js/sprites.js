/*
Sprites module

Should manage the loaded sprites, and load sprites.
Similar to tilesets, there should be a sprites folder and a sprite should be
defined in a json file. Then it can be loaded by its json filename.

json properties:
- tileset, tile (the image of the sprite)
- scale x, y (in case the sprite should be stretched)

sprite properties:
- position x, y
- velocity x, y
- rotation degrees

Other properties we might consider would be things like:
- json:
  - is solid
- object:
  - is jumping
These depend on what type of game we're making... (top down shmup? side
scrolling platformer?)
Maybe we should just add them during LD when we decide this.
*/
