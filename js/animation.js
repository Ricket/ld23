/*
Animation module

An Animation type should be created. You should be able to create a new
Animation, giving the constructor these parameters:
- tileset name
- tile prefix
- number of frames/tiles
- animation speed (frames per second)
Then there should be a method to get the current tile. This method will
calculate the current tile name (prefix+currentNumber) and then call
tilesets.getTile with the animation's tileset and that generated name,
and return the result.

Then update main.js to use an Animation instead of doing the calculation inline.
*/
