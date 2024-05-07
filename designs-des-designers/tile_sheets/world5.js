(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("world5",
{ "compressionlevel":-1,
 "height":9,
 "infinite":false,
 "layers":[
        {
         "data":[
            [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 21, 28, 28, 28, 28, 28,34] ,
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 27, 42, 26, 26, 26, 26, 34],
            [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 25, 0, 1, 0, 2, 206],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 27, 25, 0, 0, 0, 34, 1],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 27, 25, 1, 0, 0, 34, 1],
            [0, 27, 25, 0, 0, 27, 25, 0, 0, 0, 0, 0, 0, 27, 25, 0, 1, 0, 34, 1],
            [1, 27, 27, 28, 28, 27, 27, 28, 28, 28, 28, 28, 28, 27, 25, 1, 0, 0, 34, 1],
            [0, 23, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 42, 26, 24, 1, 0, 1, 34, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 27, 25, 0, 0, 1, 0, 0, 34, 1]
         ];
         "height":9,
         "id":1,
         "name":"layer1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }, 
        {
         "data":[
            [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 31, 32],
            [0, 101, 102, 103, 104, 0, 0, 0, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 35, 36],
            [12, 105, 106, 107, 108, 109, 110, 111, 112, 113, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0],
            [14, 114, 115, 116, 117, 118, 119, 120, 121, 122, 0, 21, 22, 0, 0, 0, 1, 2, 0, 0],
            [16, 123, 124, 125, 126, 127, 128, 129, 130, 131, 0, 23, 24, 0, 0, 0, 3, 4, 0, 0],
            [0, 132, 133, 134, 135, 136, 137, 138, 139, 140, 0, 25, 26, 0, 0, 5, 6, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 12, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 14, 0, 0, 0],
            [0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 16, 0, 0, 0, 0, 0]
         ];
         "height":9,
         "id":2,
         "name":"layer2",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }],
 "nextlayerid":3,
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.10.2",
 "tileheight":64,
 "tilesets":[
        {
         "firstgid":1,
         "source":"tile_sheet_eau.tsx"
        }, 
        {
         "firstgid":10202,
         "source":"tile_sheet_sols.tsx"
        }, 
        {
         "firstgid":20403,
         "source":"tile_sheet_mobilier_urbain.tsx"
        }, 
        {
         "firstgid":30604,
         "source":"tilesheet_garage.tsx"
        }],
 "tilewidth":64,
 "type":"map",
 "version":"1.10",
 "width":20
});