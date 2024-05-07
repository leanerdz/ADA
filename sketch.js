////////////////////////////////////////////////////////////////////
//////////////////////////Monde 1//////////////////////////////////
////////////////////////////////////////////////////////////////////

let layer1Dictionnary = {};
let world1BoardLayer1 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 25, 0, 0, 0, 0, 0, 0, 34, 30],
  [1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 27, 25, 0, 0, 0, 0, 1, 1, 34, 30],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 27, 25, 0, 1, 0, 0, 0, 0, 34, 30],
  [1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 27, 25, 1, 0, 0, 1, 0, 0, 34, 30],
  [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 27, 25, 0, 0, 0, 0, 0, 31, 50, 30],
  [0, 0, 0, 27, 25, 0, 0, 0, 0, 0, 27, 25, 0, 0, 0, 0, 0, 34, 30, 30],
  [0, 0, 0, 27, 25, 1, 0, 1, 1, 1, 27, 25, 1, 0, 0, 1, 0, 36, 37, 39],
  [0, 1, 0, 27, 41, 28, 28, 28, 28, 28, 40, 41, 28, 28, 28, 28, 28, 28, 28, 34],
  [0, 0, 0, 23, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 34],
];
let world1TileSize = 64;

let layer2Dictionnary = {};
let world1BoardLayer2 = [
  [0, 0, 19, 20, 21, 22, 23, 24, 0, 0, 0, 0, 12, 13, 0, 0, 62, 63, 0, 0],
  [60, 61, 25, 26, 27, 28, 29, 30, 10, 11, 0, 0, 14, 15, 10, 11, 64, 65, 0, 0],
  [62, 63, 31, 32, 33, 34, 35, 36, 12, 13, 0, 0, 0, 0, 12, 13, 0, 0, 0, 0],
  [64, 65, 37, 38, 39, 40, 41, 42, 14, 15, 0, 0, 0, 0, 14, 15, 0, 0, 0, 0],
  [0, 0, 43, 44, 45, 46, 71, 72, 60, 61, 0, 0, 0, 71, 72, 60, 61, 0, 0, 0],
  [0, 0, 47, 48, 49, 50, 73, 74, 62, 63, 0, 0, 0, 73, 74, 62, 63, 0, 0, 0],
  [71, 72, 0, 0, 0, 0, 75, 76, 64, 65, 0, 0, 0, 75, 76, 64, 65, 0, 0, 0],
  [73, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 82],
  [75, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 85, 86],
];

let layer3Dictionnary = {};
let world1BoardLayer3 = [
  [1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1],
  [1,1,1,10,10,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1],
  [1,1,1,10,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];
let layer4Dictionnary = {};
let world1BoardLayer4 = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],


];

////////////////////////////////////////////////////////////////////
//////////////////////////Monde 2//////////////////////////////////
////////////////////////////////////////////////////////////////////

let world2layer1Dictionnary = {};
let world2BoardLayer1 = [
  [52,38,0,1,0,1,0,1,1,27,25,0,0,0,0,0,0,0,0,0],
  [51,33,0,1,0,0,0,1,0,27,25,0,1,0,0,1,0,1,0,0],
  [30,35,1,0,0,0,1,0,0,27,25,0,0,0,1,0,0,0,0,0],
  [30,35,0,0,1,0,0,1,0,27,25,0,21,28,28,28,28,20,1,0],
  [52,38,0,1,0,0,0,0,1,27,25,0,27,29,29,29,29,25,0,0],
  [35,0,0,0,0,0,0,1,0,27,25,1,23,26,26,26,43,25,1,0],
  [35,0,1,0,0,1,0,0,0,27,25,0,0,0,0,0,27,25,0,1],
  [35,28,28,28,28,28,28,28,28,40,41,28,28,28,28,28,40,25,1,0],
  [35,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,24,1,1]
];
let world2TileSize = 64;

let world2layer2Dictionnary = {};
let world2BoardLayer2 = [
  [0,0,0,0,62,63,12,13,0,0,0,23,24,0,0,0,0,0,0,0],
  [0,0,10,11,64,65,14,15,0,0,0,25,26,0,0,0,0,0,0,0],
  [0,0,12,13,0,0,0,0,0,0,0,0,0,41,42,0,0,0,0,0],
  [0,0,14,15,0,0,0,0,0,0,0,0,0,43,44,51,52,53,0,0],
  [0,0,21,22,0,21,22,0,0,0,0,0,0,45,46,54,55,56,0,0],
  [0,0,23,24,0,23,24,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,25,26,0,25,26,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [33,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [37,38,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

let world2layer3Dictionnary = {};
let world2BoardLayer3 = [
  [1,1,1,1,1,1,1,1,1,3,3,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1],
  [1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1],
  [1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1],
  [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1],
  [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
  [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],

];
let world2layer4Dictionnary = {};
let world2BoardLayer4 = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];
////////////////////////////////////////////////////////////////////
//////////////////////////Monde 3//////////////////////////////////
////////////////////////////////////////////////////////////////////

let world3layer1Dictionnary = {};
let world3BoardLayer1 = [
[35,0,0,1,0,0,1,0,1,27,25,0,0,0,0,0,0,0,0,0],
[51,33,28,28,28,28,28,28,28,40,25,0,0,1,0,1,0,0,1,0],
[30,35,26,26,26,26,26,26,26,43,25,1,0,0,1,0,1,1,1,0],
[30,35,1,0,1,0,0,1,0,27,25,0,0,0,0,0,0,0,0,0],
[30,35,0,0,0,0,1,1,1,27,41,28,28,28,28,28,28,28,28,28],
[52,38,0,1,0,0,0,0,1,27,42,26,26,26,26,26,26,26,26,26],
[51,32,33,0,1,1,0,0,0,27,25,0,1,0,1,0,1,0,0,0],
[52,37,38,0,0,0,0,1,0,27,25,0,0,0,0,1,0,0,1,1],
[35,1,1,1,0,1,0,1,0,27,25,1,0,0,0,0,1,0,1,0]
];
let world3TileSize = 64;

let world3layer2Dictionnary = {};
let world3BoardLayer2 = [
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[32,33,34,0,0,0,0,0,0,0,0,21,22,0,0,0,0,0,0,0],
[36,37,38,0,0,0,0,0,0,0,0,23,24,0,0,0,0,0,0,0],
[0,0,0,0,11,12,0,0,0,0,0,25,26,0,0,0,0,0,0,0],
[0,0,0,0,13,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,15,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,4,0,0,0,0],
[0,0,0,0,1,2,11,12,0,0,0,0,0,0,5,6,0,0,0,0]
];

let world3layer3Dictionnary = {};
let world3BoardLayer3 = [
  [1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1],
  [7,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],
  [7,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
  [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,6],
  [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,6],
  [1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,5,5,1,1,1,1,1,1,1,1,1],
];
let world3layer4Dictionnary = {};
let world3BoardLayer4 = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

////////////////////////////////////////////////////////////////////
//////////////////////////Monde 4//////////////////////////////////
////////////////////////////////////////////////////////////////////

let world4layer1Dictionnary = {};
let world4BoardLayer1 = 
[[0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1],
[1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0],
[0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1],
[1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0],
[28,28,28,28,28,20,0,0,0,0,0,0,1,0,0,0,0,0,1,1],
[26,26,26,26,43,25,1,1,1,0,0,0,0,0,0,1,0,1,0,0],
[1,1,0,1,27,25,0,0,0,0,1,0,27,29,25,0,0,1,1,0],
[0,0,0,0,27,41,28,28,28,28,28,28,40,29,25,0,1,0,1,1],
[1,0,0,1,23,26,26,26,26,26,26,26,26,26,24,0,1,0,1,1]];
let world4TileSize = 64;

let world4layer2Dictionnary = {};
let world4BoardLayer2 = 
[[11,12,0,0,15,16,13,14,15,16,15,16,101,102,103,15,16,11,12,13],
[13,14,0,11,12,0,15,16,0,11,12,104,105,106,107,108,0,13,14,15],
[15,16,0,13,14,0,0,0,0,13,14,109,110,111,112,113,0,15,16,0],
[0,0,0,15,16,0,0,0,0,15,16,114,115,116,117,118,11,12,0,11],
[0,0,0,0,0,0,0,0,11,12,0,119,120,121,122,123,13,14,0,13],
[0,0,0,0,0,0,0,0,13,14,0,124,125,126,127,128,15,16,0,15],
[0,0,11,12,0,0,0,0,15,16,0,129,130,131,132,133,0,0,11,12],
[0,0,13,14,0,0,0,0,0,0,0,0,0,0,0,11,12,0,13,14],
[11,12,15,16,0,0,0,0,0,0,0,0,0,0,0,13,14,0,15,16]];

let world4layer3Dictionnary = {};
let world4BoardLayer3 = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1],
  [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
  [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];
let world4layer4Dictionnary = {};
let world4BoardLayer4 = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];
////////////////////////////////////////////////////////////////////
//////////////////////////Monde 5//////////////////////////////////
////////////////////////////////////////////////////////////////////

let world5layer1Dictionnary = {};
let world5BoardLayer1 = 
[
  [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 21, 28, 28, 28, 28, 28,34] ,
  [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 27, 42, 26, 26, 26, 26, 34],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 25, 0, 1, 0, 31, 50],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 27, 25, 0, 0, 0, 34, 30],
  [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 27, 25, 1, 0, 0, 34, 30],
  [0, 27, 25, 0, 0, 27, 25, 0, 0, 0, 0, 0, 0, 27, 25, 0, 1, 0, 34, 30],
  [1, 27, 41, 28, 28, 40, 41, 28, 28, 28, 28, 28, 28, 40, 25, 1, 0, 0, 34, 30],
  [0, 23, 26, 26, 26, 26, 26, 26, 26, 26, 26, 43, 42, 26, 24, 1, 0, 1, 34, 30],
  [1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 27, 25, 0, 0, 1, 0, 0, 34, 30]
];
let world5TileSize = 64;

let world5layer2Dictionnary = {};
let world5BoardLayer2 = 
[
  [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 31, 32],
  [0, 101, 102, 103, 104, 0, 0, 0, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 35, 36],
  [12, 105, 106, 107, 108, 109, 110, 111, 112, 113, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [14, 114, 115, 116, 117, 118, 119, 120, 121, 122, 0, 21, 22, 0, 0, 0, 1, 2, 0, 0],
  [16, 123, 124, 125, 126, 127, 128, 129, 130, 131, 0, 23, 24, 0, 0, 0, 3, 4, 0, 0],
  [0, 132, 133, 134, 135, 136, 137, 138, 139, 140, 0, 25, 26, 0, 0, 0, 5, 6, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 12, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 14, 0, 0, 0],
  [0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 16, 0, 0, 0]
];

let world5layer3Dictionnary = {};
let world5BoardLayer3 = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,4,4,1,1,1,1,1,1,1]
];
let world5layer4Dictionnary = {};
let world5BoardLayer4 = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];



let currentWorld = 0;

let worldsLayer1 = [] ;
let worldsLayer2 = [] ;
let worldsLayer3 = [] ;
let worldsLayer4 = [] ;
let tileDictionnariesLayer1 = [];
let tileDictionnariesLayer2 = [];
let tileDictionnariesLayer3 = [];
let tileDictionnariesLayer4 = [];
let worldsTileSizes = [];

////////////////////////////////////////////////////////////////////
//////////////////////////Hero//////////////////////////////////////
////////////////////////////////////////////////////////////////////

let heroSpeed = 5;
let heroWidth = 47;
let heroHeight = 94;
let heroX = 17*world1TileSize;
let heroY = 6*world1TileSize;
let myHeroRight = [];
let myHeroLeft = [];
let myHeroTop = [];
let myHeroBack = [];
let myHeroDiagoBackRight = [];
let myHeroDiagoBackLeft = [];
let currentIndex = 0;
let movementCounter = 0;
let currentHeroImage = 0;

////////////////////////////////////////////////////////////////////
//////////////////////////Perso/////////////////////////////////////
////////////////////////////////////////////////////////////////////

let mamie;
let astronome;
let mecanicien;

////////////////////////////////////////////////////////////////////
//////////////////////////Diapos////////////////////////////////////
////////////////////////////////////////////////////////////////////

let diapoVisible = true;


let inventaire = []; 
let inventaire0; 
let inventaire1; 
let inventaire2; 
let inventaire3; 
let currentInventaire = 0; 

let path = 5;

////////////////////////////////////////////////////////////////////
//////////////////////////Dialogues/////////////////////////////////
////////////////////////////////////////////////////////////////////

let dialogueMamie;
let dialogueMecanicien;
let dialogueAstronome;

let dialogueFlag = false; 
let currentDialogueIndex = 0;

// Appelée une fois
function setup() {
  createCanvas(windowWidth, windowHeight);
  inventaire0 = loadImage('designs-des-designers/inventaire/inventair_01.png');
  inventaire1 = loadImage('designs-des-designers/inventaire/inventair_02.png');
  inventaire2 = loadImage('designs-des-designers/inventaire/inventair_03.png');
  inventaire3 = loadImage('designs-des-designers/inventaire/inventair_04.png');

  dialogueMamie = [loadImage('designs-des-designers/dialogueMamieEtAda/mamie-ada_01.png'),loadImage('designs-des-designers/dialogueMamieEtAda/mamie-ada_01.png'),loadImage('designs-des-designers/dialogueMamieEtAda/mamie-ada_02.png'),loadImage('designs-des-designers/dialogueMamieEtAda/mamie-ada_03.png'),loadImage('designs-des-designers/dialogueMamieEtAda/mamie-ada_04.png'),loadImage('designs-des-designers/dialogueMamieEtAda/mamie-ada_05.png'),loadImage('designs-des-designers/dialogueMamieEtAda/mamie-ada_06.png')]
  layer1Dictionnary = { 
    0:loadImage('designs-des-designers/sols/herbe.png'),
    1:loadImage('designs-des-designers/sols/herbeMotif.png'),
    20:loadImage('designs-des-designers/sols/chemin11.png'),
    21:loadImage('designs-des-designers/sols/chemin12.png'),
    23:loadImage('designs-des-designers/sols/chemin13.png'),
    24:loadImage('designs-des-designers/sols/chemin14.png'),
    25:loadImage('designs-des-designers/sols/chemin15.png'),
    26:loadImage('designs-des-designers/sols/chemin16.png'),
    27:loadImage('designs-des-designers/sols/chemin17.png'),
    28:loadImage('designs-des-designers/sols/chemin18.png'),
    29:loadImage('designs-des-designers/sols/chemin19.png'),
    40:loadImage('designs-des-designers/sols/chemin20.png'),
    41:loadImage('designs-des-designers/sols/chemin21.png'),
    42:loadImage('designs-des-designers/sols/chemin22.png'),
    43:loadImage('designs-des-designers/sols/chemin23.png'),
    30:loadImage('designs-des-designers/eau/eau1.png'),
    31:loadImage('designs-des-designers/eau/eau2.png'),
    32:loadImage('designs-des-designers/eau/eau3.png'),
    33:loadImage('designs-des-designers/eau/eau4.png'),
    34:loadImage('designs-des-designers/eau/eau5.png'),
    35:loadImage('designs-des-designers/eau/eau6.png'),
    36:loadImage('designs-des-designers/eau/eau7.png'),
    37:loadImage('designs-des-designers/eau/eau8.png'),
    38:loadImage('designs-des-designers/eau/eau9.png'),
    39:loadImage('designs-des-designers/eau/eau10.png'),
    50:loadImage('designs-des-designers/eau/eau12.png'),
    51:loadImage('designs-des-designers/eau/eau13.png'),
  }

  layer2Dictionnary = { 
    0: createImage(1,1),
    10:loadImage('designs-des-designers/sapin/sapin_1.png'),
    11:loadImage('designs-des-designers/sapin/sapin_2.png'),
    12:loadImage('designs-des-designers/sapin/sapin_3.png'),
    13:loadImage('designs-des-designers/sapin/sapin_4.png'),
    14:loadImage('designs-des-designers/sapin/sapin_5.png'),
    15:loadImage('designs-des-designers/sapin/sapin_6.png'),
    60:loadImage('designs-des-designers/arbre/arbe_1.png'),
    61:loadImage('designs-des-designers/arbre/arbe_2.png'),
    62:loadImage('designs-des-designers/arbre/arbe_3.png'),
    63:loadImage('designs-des-designers/arbre/arbe_4.png'),
    64:loadImage('designs-des-designers/arbre/arbe_5.png'),
    65:loadImage('designs-des-designers/arbre/arbe_6.png'),
    71:loadImage('designs-des-designers/lampadaire/lampadaire_01.png'),
    72:loadImage('designs-des-designers/lampadaire/lampadaire_02.png'),
    73:loadImage('designs-des-designers/lampadaire/lampadaire_03.png'),
    74:loadImage('designs-des-designers/lampadaire/lampadaire_04.png'),
    75:loadImage('designs-des-designers/lampadaire/lampadaire_05.png'),
    76:loadImage('designs-des-designers/lampadaire/lampadaire_06.png'),
    81:loadImage('designs-des-designers/pont/pont_01.png'),
    82:loadImage('designs-des-designers/pont/pont_02.png'),
    83:loadImage('designs-des-designers/pont/pont_03.png'),
    84:loadImage('designs-des-designers/pont/pont_04.png'),
    85:loadImage('designs-des-designers/pont/pont_05.png'),
    86:loadImage('designs-des-designers/pont/pont_06.png'),
    87:loadImage('designs-des-designers/pont/pont_07.png'),
    88:loadImage('designs-des-designers/pont/pont_08.png'),
    19:loadImage('designs-des-designers/maison_mamie/maison_mamie_01.png'),
    20:loadImage('designs-des-designers/maison_mamie/maison_mamie_02.png'),
    21:loadImage('designs-des-designers/maison_mamie/maison_mamie_03.png'),
    22:loadImage('designs-des-designers/maison_mamie/maison_mamie_04.png'),
    23:loadImage('designs-des-designers/maison_mamie/maison_mamie_05.png'),
    24:loadImage('designs-des-designers/maison_mamie/maison_mamie_06.png'),
    25:loadImage('designs-des-designers/maison_mamie/maison_mamie_07.png'),
    26:loadImage('designs-des-designers/maison_mamie/maison_mamie_08.png'),
    27:loadImage('designs-des-designers/maison_mamie/maison_mamie_09.png'),
    28:loadImage('designs-des-designers/maison_mamie/maison_mamie_10.png'),
    29:loadImage('designs-des-designers/maison_mamie/maison_mamie_11.png'),
    30:loadImage('designs-des-designers/maison_mamie/maison_mamie_12.png'),
    31:loadImage('designs-des-designers/maison_mamie/maison_mamie_13.png'),
    32:loadImage('designs-des-designers/maison_mamie/maison_mamie_14.png'),
    33:loadImage('designs-des-designers/maison_mamie/maison_mamie_15.png'),
    34:loadImage('designs-des-designers/maison_mamie/maison_mamie_16.png'),
    35:loadImage('designs-des-designers/maison_mamie/maison_mamie_17.png'),
    36:loadImage('designs-des-designers/maison_mamie/maison_mamie_18.png'),
    37:loadImage('designs-des-designers/maison_mamie/maison_mamie_19.png'),
    38:loadImage('designs-des-designers/maison_mamie/maison_mamie_20.png'),
    39:loadImage('designs-des-designers/maison_mamie/maison_mamie_21.png'),
    40:loadImage('designs-des-designers/maison_mamie/maison_mamie_22.png'),
    41:loadImage('designs-des-designers/maison_mamie/maison_mamie_23.png'),
    42:loadImage('designs-des-designers/maison_mamie/maison_mamie_24.png'),
    43:loadImage('designs-des-designers/maison_mamie/maison_mamie_25.png'),
    44:loadImage('designs-des-designers/maison_mamie/maison_mamie_26.png'),
    45:loadImage('designs-des-designers/maison_mamie/maison_mamie_27.png'),
    46:loadImage('designs-des-designers/maison_mamie/maison_mamie_28.png'),
    47:loadImage('designs-des-designers/maison_mamie/maison_mamie_29.png'),
    48:loadImage('designs-des-designers/maison_mamie/maison_mamie_30.png'),
    49:loadImage('designs-des-designers/maison_mamie/maison_mamie_31.png'),
    50:loadImage('designs-des-designers/maison_mamie/maison_mamie_32.png'),
    51:loadImage('designs-des-designers/maison_mamie/maison_mamie_33.png'),
    52:loadImage('designs-des-designers/maison_mamie/maison_mamie_34.png'),

  }

  layer3Dictionnary = { 
                    0: createImage(1,1),
                    1: createImage(1,1),
                    2: createImage(1,1),
                    10: createImage(1,1),
  }

  layer4Dictionnary = { 
                    0: createImage(1,1),
  }


  world2layer1Dictionnary = { 
    0:loadImage('designs-des-designers/sols/herbe.png'),
    1:loadImage('designs-des-designers/sols/herbeMotif.png'),
    20:loadImage('designs-des-designers/sols/chemin11.png'),
    21:loadImage('designs-des-designers/sols/chemin12.png'),
    23:loadImage('designs-des-designers/sols/chemin13.png'),
    24:loadImage('designs-des-designers/sols/chemin14.png'),
    25:loadImage('designs-des-designers/sols/chemin15.png'),
    26:loadImage('designs-des-designers/sols/chemin16.png'),
    27:loadImage('designs-des-designers/sols/chemin17.png'),
    28:loadImage('designs-des-designers/sols/chemin18.png'),
    29:loadImage('designs-des-designers/sols/chemin19.png'),
    40:loadImage('designs-des-designers/sols/chemin20.png'),
    41:loadImage('designs-des-designers/sols/chemin21.png'),
    42:loadImage('designs-des-designers/sols/chemin22.png'),
    43:loadImage('designs-des-designers/sols/chemin23.png'),
    30:loadImage('designs-des-designers/eau/eau1.png'),
    31:loadImage('designs-des-designers/eau/eau2.png'),
    32:loadImage('designs-des-designers/eau/eau3.png'),
    33:loadImage('designs-des-designers/eau/eau4.png'),
    34:loadImage('designs-des-designers/eau/eau5.png'),
    35:loadImage('designs-des-designers/eau/eau6.png'),
    36:loadImage('designs-des-designers/eau/eau7.png'),
    37:loadImage('designs-des-designers/eau/eau8.png'),
    38:loadImage('designs-des-designers/eau/eau9.png'),
    39:loadImage('designs-des-designers/eau/eau10.png'),
    52:loadImage('designs-des-designers/eau/eau11.png'),
    50:loadImage('designs-des-designers/eau/eau12.png'),
    51:loadImage('designs-des-designers/eau/eau13.png'),
  }

  world2layer2Dictionnary = { 
    0: createImage(1,1),
    10:loadImage('designs-des-designers/sapin/sapin_1.png'),
    11:loadImage('designs-des-designers/sapin/sapin_2.png'),
    12:loadImage('designs-des-designers/sapin/sapin_3.png'),
    13:loadImage('designs-des-designers/sapin/sapin_4.png'),
    14:loadImage('designs-des-designers/sapin/sapin_5.png'),
    15:loadImage('designs-des-designers/sapin/sapin_6.png'),
    60:loadImage('designs-des-designers/arbre/arbe_1.png'),
    61:loadImage('designs-des-designers/arbre/arbe_2.png'),
    62:loadImage('designs-des-designers/arbre/arbe_3.png'),
    63:loadImage('designs-des-designers/arbre/arbe_4.png'),
    64:loadImage('designs-des-designers/arbre/arbe_5.png'),
    65:loadImage('designs-des-designers/arbre/arbe_6.png'),
    21:loadImage('designs-des-designers/lampadaire/lampadaire_01.png'),
    22:loadImage('designs-des-designers/lampadaire/lampadaire_02.png'),
    23:loadImage('designs-des-designers/lampadaire/lampadaire_03.png'),
    24:loadImage('designs-des-designers/lampadaire/lampadaire_04.png'),
    25:loadImage('designs-des-designers/lampadaire/lampadaire_05.png'),
    26:loadImage('designs-des-designers/lampadaire/lampadaire_06.png'),
    31:loadImage('designs-des-designers/pont/pont_01.png'),
    32:loadImage('designs-des-designers/pont/pont_02.png'),
    33:loadImage('designs-des-designers/pont/pont_03.png'),
    34:loadImage('designs-des-designers/pont/pont_04.png'),
    35:loadImage('designs-des-designers/pont/pont_05.png'),
    36:loadImage('designs-des-designers/pont/pont_06.png'),
    37:loadImage('designs-des-designers/pont/pont_07.png'),
    38:loadImage('designs-des-designers/pont/pont_08.png'),
    41:loadImage('designs-des-designers/fusee_entière/fusee_1.png'),
    42:loadImage('designs-des-designers/fusee_entière/fusee_2.png'),
    43:loadImage('designs-des-designers/fusee_entière/fusee_3.png'),
    44:loadImage('designs-des-designers/fusee_entière/fusee_4.png'),
    45:loadImage('designs-des-designers/fusee_entière/fusee_5.png'),
    46:loadImage('designs-des-designers/fusee_entière/fusee_6.png'),
    51:loadImage('designs-des-designers/atelier/atelier_01.png'),
    52:loadImage('designs-des-designers/atelier/atelier_02.png'),
    53:loadImage('designs-des-designers/atelier/atelier_03.png'),
    54:loadImage('designs-des-designers/atelier/atelier_04.png'),
    55:loadImage('designs-des-designers/atelier/atelier_05.png'),
    56:loadImage('designs-des-designers/atelier/atelier_06.png'),
    
    
  }

  world2layer3Dictionnary = { 
                    0: createImage(1,1),
                    1: createImage(1,1),
                    2: createImage(1,1),
                    3: createImage(1,1),
                    4: createImage(1,1),
  }

  world2layer4Dictionnary = { 
                    0: createImage(1,1),
  }

  world3layer1Dictionnary = { 
    0:loadImage('designs-des-designers/sols/herbe.png'),
    1:loadImage('designs-des-designers/sols/herbeMotif.png'),
    20:loadImage('designs-des-designers/sols/chemin11.png'),
    21:loadImage('designs-des-designers/sols/chemin12.png'),
    23:loadImage('designs-des-designers/sols/chemin13.png'),
    24:loadImage('designs-des-designers/sols/chemin14.png'),
    25:loadImage('designs-des-designers/sols/chemin15.png'),
    26:loadImage('designs-des-designers/sols/chemin16.png'),
    27:loadImage('designs-des-designers/sols/chemin17.png'),
    28:loadImage('designs-des-designers/sols/chemin18.png'),
    29:loadImage('designs-des-designers/sols/chemin19.png'),
    40:loadImage('designs-des-designers/sols/chemin20.png'),
    41:loadImage('designs-des-designers/sols/chemin21.png'),
    42:loadImage('designs-des-designers/sols/chemin22.png'),
    43:loadImage('designs-des-designers/sols/chemin23.png'),
    30:loadImage('designs-des-designers/eau/eau1.png'),
    31:loadImage('designs-des-designers/eau/eau2.png'),
    32:loadImage('designs-des-designers/eau/eau3.png'),
    33:loadImage('designs-des-designers/eau/eau4.png'),
    34:loadImage('designs-des-designers/eau/eau5.png'),
    35:loadImage('designs-des-designers/eau/eau6.png'),
    36:loadImage('designs-des-designers/eau/eau7.png'),
    37:loadImage('designs-des-designers/eau/eau8.png'),
    38:loadImage('designs-des-designers/eau/eau9.png'),
    39:loadImage('designs-des-designers/eau/eau10.png'),
    50:loadImage('designs-des-designers/eau/eau12.png'),
    51:loadImage('designs-des-designers/eau/eau13.png'),
    52:loadImage('designs-des-designers/eau/eau11.png'),
  }

  world3layer2Dictionnary = { 
    0: createImage(1,1),
    1:loadImage('designs-des-designers/arbre/arbe_1.png'),
    2:loadImage('designs-des-designers/arbre/arbe_2.png'),
    3:loadImage('designs-des-designers/arbre/arbe_3.png'),
    4:loadImage('designs-des-designers/arbre/arbe_4.png'),
    5:loadImage('designs-des-designers/arbre/arbe_5.png'),
    6:loadImage('designs-des-designers/arbre/arbe_6.png'),
    11:loadImage('designs-des-designers/sapin/sapin_1.png'),
    12:loadImage('designs-des-designers/sapin/sapin_2.png'),
    13:loadImage('designs-des-designers/sapin/sapin_3.png'),
    14:loadImage('designs-des-designers/sapin/sapin_4.png'),
    15:loadImage('designs-des-designers/sapin/sapin_5.png'),
    16:loadImage('designs-des-designers/sapin/sapin_6.png'),
    21:loadImage('designs-des-designers/lampadaire/lampadaire_01.png'),
    22:loadImage('designs-des-designers/lampadaire/lampadaire_02.png'),
    23:loadImage('designs-des-designers/lampadaire/lampadaire_03.png'),
    24:loadImage('designs-des-designers/lampadaire/lampadaire_04.png'),
    25:loadImage('designs-des-designers/lampadaire/lampadaire_05.png'),
    26:loadImage('designs-des-designers/lampadaire/lampadaire_06.png'),
    31:loadImage('designs-des-designers/pont/pont_01.png'),
    32:loadImage('designs-des-designers/pont/pont_02.png'),
    33:loadImage('designs-des-designers/pont/pont_03.png'),
    34:loadImage('designs-des-designers/pont/pont_04.png'),
    35:loadImage('designs-des-designers/pont/pont_05.png'),
    36:loadImage('designs-des-designers/pont/pont_06.png'),
    37:loadImage('designs-des-designers/pont/pont_07.png'),
    38:loadImage('designs-des-designers/pont/pont_08.png'),
    41:loadImage('designs-des-designers/fusee_entière/fusee_1.png'),
    42:loadImage('designs-des-designers/fusee_entière/fusee_2.png'),
    43:loadImage('designs-des-designers/fusee_entière/fusee_3.png'),
    44:loadImage('designs-des-designers/fusee_entière/fusee_4.png'),
    45:loadImage('designs-des-designers/fusee_entière/fusee_5.png'),
    46:loadImage('designs-des-designers/fusee_entière/fusee_6.png'),
    51:loadImage('designs-des-designers/atelier/atelier_01.png'),
    52:loadImage('designs-des-designers/atelier/atelier_02.png'),
    53:loadImage('designs-des-designers/atelier/atelier_03.png'),
    54:loadImage('designs-des-designers/atelier/atelier_04.png'),
    55:loadImage('designs-des-designers/atelier/atelier_05.png'),
    56:loadImage('designs-des-designers/atelier/atelier_06.png'),
    
  }

  world3layer3Dictionnary = { 
                    0: createImage(1,1),
                    1: createImage(1,1),
                    2: createImage(1,1),
                    5: createImage(1,1),
                    6: createImage(1,1),
                    7: createImage(1,1),
  }

  world3layer4Dictionnary = { 
                    0: createImage(1,1),
  }
  world4layer1Dictionnary = { 
    0:loadImage('designs-des-designers/sols/herbe.png'),
    1:loadImage('designs-des-designers/sols/herbeMotif.png'),
    20:loadImage('designs-des-designers/sols/chemin11.png'),
    21:loadImage('designs-des-designers/sols/chemin12.png'),
    23:loadImage('designs-des-designers/sols/chemin13.png'),
    24:loadImage('designs-des-designers/sols/chemin14.png'),
    25:loadImage('designs-des-designers/sols/chemin15.png'),
    26:loadImage('designs-des-designers/sols/chemin16.png'),
    27:loadImage('designs-des-designers/sols/chemin17.png'),
    28:loadImage('designs-des-designers/sols/chemin18.png'),
    29:loadImage('designs-des-designers/sols/chemin19.png'),
    40:loadImage('designs-des-designers/sols/chemin20.png'),
    41:loadImage('designs-des-designers/sols/chemin21.png'),
    42:loadImage('designs-des-designers/sols/chemin22.png'),
    43:loadImage('designs-des-designers/sols/chemin23.png'),
    30:loadImage('designs-des-designers/eau/eau1.png'),
    31:loadImage('designs-des-designers/eau/eau2.png'),
    32:loadImage('designs-des-designers/eau/eau3.png'),
    33:loadImage('designs-des-designers/eau/eau4.png'),
    34:loadImage('designs-des-designers/eau/eau5.png'),
    35:loadImage('designs-des-designers/eau/eau6.png'),
    36:loadImage('designs-des-designers/eau/eau7.png'),
    37:loadImage('designs-des-designers/eau/eau8.png'),
    38:loadImage('designs-des-designers/eau/eau9.png'),
    39:loadImage('designs-des-designers/eau/eau10.png'),
    50:loadImage('designs-des-designers/eau/eau12.png'),
    51:loadImage('designs-des-designers/eau/eau13.png'),
    52:loadImage('designs-des-designers/eau/eau11.png'),
  }

  world4layer2Dictionnary = { 
    0: createImage(1,1),
    1:loadImage('designs-des-designers/arbre/arbe_1.png'),
    2:loadImage('designs-des-designers/arbre/arbe_2.png'),
    3:loadImage('designs-des-designers/arbre/arbe_3.png'),
    4:loadImage('designs-des-designers/arbre/arbe_4.png'),
    5:loadImage('designs-des-designers/arbre/arbe_5.png'),
    6:loadImage('designs-des-designers/arbre/arbe_6.png'),
    11:loadImage('designs-des-designers/sapin/sapin_1.png'),
    12:loadImage('designs-des-designers/sapin/sapin_2.png'),
    13:loadImage('designs-des-designers/sapin/sapin_3.png'),
    14:loadImage('designs-des-designers/sapin/sapin_4.png'),
    15:loadImage('designs-des-designers/sapin/sapin_5.png'),
    16:loadImage('designs-des-designers/sapin/sapin_6.png'),
    21:loadImage('designs-des-designers/lampadaire/lampadaire_01.png'),
    22:loadImage('designs-des-designers/lampadaire/lampadaire_02.png'),
    23:loadImage('designs-des-designers/lampadaire/lampadaire_03.png'),
    24:loadImage('designs-des-designers/lampadaire/lampadaire_04.png'),
    25:loadImage('designs-des-designers/lampadaire/lampadaire_05.png'),
    26:loadImage('designs-des-designers/lampadaire/lampadaire_06.png'),
    101:loadImage('designs-des-designers/observatoire/observatoire_01.png'),
    102:loadImage('designs-des-designers/observatoire/observatoire_02.png'),
    103:loadImage('designs-des-designers/observatoire/observatoire_03.png'),
    104:loadImage('designs-des-designers/observatoire/observatoire_04.png'),
    105:loadImage('designs-des-designers/observatoire/observatoire_05.png'),
    106:loadImage('designs-des-designers/observatoire/observatoire_06.png'),
    107:loadImage('designs-des-designers/observatoire/observatoire_07.png'),
    108:loadImage('designs-des-designers/observatoire/observatoire_08.png'),
    109:loadImage('designs-des-designers/observatoire/observatoire_09.png'),
    110:loadImage('designs-des-designers/observatoire/observatoire_10.png'),
    111:loadImage('designs-des-designers/observatoire/observatoire_11.png'),
    112:loadImage('designs-des-designers/observatoire/observatoire_12.png'),
    113:loadImage('designs-des-designers/observatoire/observatoire_13.png'),
    114:loadImage('designs-des-designers/observatoire/observatoire_14.png'),
    115:loadImage('designs-des-designers/observatoire/observatoire_15.png'),
    116:loadImage('designs-des-designers/observatoire/observatoire_16.png'),
    117:loadImage('designs-des-designers/observatoire/observatoire_17.png'),
    118:loadImage('designs-des-designers/observatoire/observatoire_18.png'),
    119:loadImage('designs-des-designers/observatoire/observatoire_19.png'),
    120:loadImage('designs-des-designers/observatoire/observatoire_20.png'),
    121:loadImage('designs-des-designers/observatoire/observatoire_21.png'),
    122:loadImage('designs-des-designers/observatoire/observatoire_22.png'),
    123:loadImage('designs-des-designers/observatoire/observatoire_23.png'),
    124:loadImage('designs-des-designers/observatoire/observatoire_24.png'),
    125:loadImage('designs-des-designers/observatoire/observatoire_25.png'),
    126:loadImage('designs-des-designers/observatoire/observatoire_26.png'),
    127:loadImage('designs-des-designers/observatoire/observatoire_27.png'),
    128:loadImage('designs-des-designers/observatoire/observatoire_28.png'),
    129:loadImage('designs-des-designers/observatoire/observatoire_29.png'),
    130:loadImage('designs-des-designers/observatoire/observatoire_30.png'),
    131:loadImage('designs-des-designers/observatoire/observatoire_31.png'),
    132:loadImage('designs-des-designers/observatoire/observatoire_32.png'),
    133:loadImage('designs-des-designers/observatoire/observatoire_33.png'),  
    
  }

  world4layer3Dictionnary = { 
                    0: createImage(1,1),
                    1: createImage(1,1),
                    2: createImage(1,1),
  }

  world4layer4Dictionnary = { 
                    0: createImage(1,1),
  }
  world5layer1Dictionnary = { 
    0:loadImage('designs-des-designers/sols/herbe.png'),
    1:loadImage('designs-des-designers/sols/herbeMotif.png'),
    20:loadImage('designs-des-designers/sols/chemin11.png'),
    21:loadImage('designs-des-designers/sols/chemin12.png'),
    23:loadImage('designs-des-designers/sols/chemin13.png'),
    24:loadImage('designs-des-designers/sols/chemin14.png'),
    25:loadImage('designs-des-designers/sols/chemin15.png'),
    26:loadImage('designs-des-designers/sols/chemin16.png'),
    27:loadImage('designs-des-designers/sols/chemin17.png'),
    28:loadImage('designs-des-designers/sols/chemin18.png'),
    29:loadImage('designs-des-designers/sols/chemin19.png'),
    40:loadImage('designs-des-designers/sols/chemin20.png'),
    41:loadImage('designs-des-designers/sols/chemin21.png'),
    42:loadImage('designs-des-designers/sols/chemin22.png'),
    43:loadImage('designs-des-designers/sols/chemin23.png'),
    30:loadImage('designs-des-designers/eau/eau1.png'),
    31:loadImage('designs-des-designers/eau/eau2.png'),
    32:loadImage('designs-des-designers/eau/eau3.png'),
    33:loadImage('designs-des-designers/eau/eau4.png'),
    34:loadImage('designs-des-designers/eau/eau5.png'),
    35:loadImage('designs-des-designers/eau/eau6.png'),
    36:loadImage('designs-des-designers/eau/eau7.png'),
    37:loadImage('designs-des-designers/eau/eau8.png'),
    38:loadImage('designs-des-designers/eau/eau9.png'),
    39:loadImage('designs-des-designers/eau/eau10.png'),
    50:loadImage('designs-des-designers/eau/eau12.png'),
    51:loadImage('designs-des-designers/eau/eau13.png'),
    52:loadImage('designs-des-designers/eau/eau11.png'),
  }

  world5layer2Dictionnary = { 
    0: createImage(1,1),
    1:loadImage('designs-des-designers/arbre/arbe_1.png'),
    2:loadImage('designs-des-designers/arbre/arbe_2.png'),
    3:loadImage('designs-des-designers/arbre/arbe_3.png'),
    4:loadImage('designs-des-designers/arbre/arbe_4.png'),
    5:loadImage('designs-des-designers/arbre/arbe_5.png'),
    6:loadImage('designs-des-designers/arbre/arbe_6.png'),
    11:loadImage('designs-des-designers/sapin/sapin_1.png'),
    12:loadImage('designs-des-designers/sapin/sapin_2.png'),
    13:loadImage('designs-des-designers/sapin/sapin_3.png'),
    14:loadImage('designs-des-designers/sapin/sapin_4.png'),
    15:loadImage('designs-des-designers/sapin/sapin_5.png'),
    16:loadImage('designs-des-designers/sapin/sapin_6.png'),
    21:loadImage('designs-des-designers/lampadaire/lampadaire_01.png'),
    22:loadImage('designs-des-designers/lampadaire/lampadaire_02.png'),
    23:loadImage('designs-des-designers/lampadaire/lampadaire_03.png'),
    24:loadImage('designs-des-designers/lampadaire/lampadaire_04.png'),
    25:loadImage('designs-des-designers/lampadaire/lampadaire_05.png'),
    26:loadImage('designs-des-designers/lampadaire/lampadaire_06.png'),
    31:loadImage('designs-des-designers/pont/pont_01.png'),
    32:loadImage('designs-des-designers/pont/pont_02.png'),
    33:loadImage('designs-des-designers/pont/pont_03.png'),
    34:loadImage('designs-des-designers/pont/pont_04.png'),
    35:loadImage('designs-des-designers/pont/pont_05.png'),
    36:loadImage('designs-des-designers/pont/pont_06.png'),
    37:loadImage('designs-des-designers/pont/pont_07.png'),
    38:loadImage('designs-des-designers/pont/pont_08.png'),
    101:loadImage('designs-des-designers/garage/garage_01.png'),
    102:loadImage('designs-des-designers/garage/garage_02.png'),
    103:loadImage('designs-des-designers/garage/garage_03.png'),
    104:loadImage('designs-des-designers/garage/garage_04.png'),
    105:loadImage('designs-des-designers/garage/garage_05.png'),
    106:loadImage('designs-des-designers/garage/garage_06.png'),
    107:loadImage('designs-des-designers/garage/garage_07.png'),
    108:loadImage('designs-des-designers/garage/garage_08.png'),
    109:loadImage('designs-des-designers/garage/garage_09.png'),
    110:loadImage('designs-des-designers/garage/garage_10.png'),
    111:loadImage('designs-des-designers/garage/garage_11.png'),
    112:loadImage('designs-des-designers/garage/garage_12.png'),
    113:loadImage('designs-des-designers/garage/garage_13.png'),
    114:loadImage('designs-des-designers/garage/garage_14.png'),
    115:loadImage('designs-des-designers/garage/garage_15.png'),
    116:loadImage('designs-des-designers/garage/garage_16.png'),
    117:loadImage('designs-des-designers/garage/garage_17.png'),
    118:loadImage('designs-des-designers/garage/garage_18.png'),
    119:loadImage('designs-des-designers/garage/garage_19.png'),
    120:loadImage('designs-des-designers/garage/garage_20.png'),
    121:loadImage('designs-des-designers/garage/garage_21.png'),
    122:loadImage('designs-des-designers/garage/garage_22.png'),
    123:loadImage('designs-des-designers/garage/garage_23.png'),
    124:loadImage('designs-des-designers/garage/garage_24.png'),
    125:loadImage('designs-des-designers/garage/garage_25.png'),
    126:loadImage('designs-des-designers/garage/garage_26.png'),
    127:loadImage('designs-des-designers/garage/garage_27.png'),
    128:loadImage('designs-des-designers/garage/garage_28.png'),
    129:loadImage('designs-des-designers/garage/garage_29.png'),
    130:loadImage('designs-des-designers/garage/garage_30.png'),
    131:loadImage('designs-des-designers/garage/garage_31.png'),
    132:loadImage('designs-des-designers/garage/garage_32.png'),
    133:loadImage('designs-des-designers/garage/garage_33.png'),  
    134:loadImage('designs-des-designers/garage/garage_34.png'),  
    135:loadImage('designs-des-designers/garage/garage_35.png'),  
    136:loadImage('designs-des-designers/garage/garage_36.png'),  
    137:loadImage('designs-des-designers/garage/garage_37.png'),  
    138:loadImage('designs-des-designers/garage/garage_38.png'),  
    139:loadImage('designs-des-designers/garage/garage_39.png'),  
    140:loadImage('designs-des-designers/garage/garage_40.png'),  
    
  }

  world5layer3Dictionnary = { 
                    0: createImage(1,1),
                    1: createImage(1,1),
                    2: createImage(1,1),
                    4: createImage(1,1),
  }

  world5layer4Dictionnary = { 
                    0: createImage(1,1),
  }


  hero0 = loadImage('animations/perso_cote_01.png'); 
  myHeroRight.push(hero0);
  hero1 = loadImage('animations/perso_cote_02.png'); 
  myHeroRight.push(hero1);
  hero2 = loadImage('animations/perso_cote_03.png'); 
  myHeroRight.push(hero2);
  hero3 = loadImage('animations/perso_cote_04.png'); 
  myHeroRight.push(hero3);

  currentHeroImage = hero0;

  myHeroLeft.push(loadImage('animations/perso_gauche_01.png'));
  myHeroLeft.push(loadImage('animations/perso_gauche_02.png')); 
  myHeroLeft.push(loadImage('animations/perso_gauche_03.png')); 
  myHeroLeft.push(loadImage('animations/perso_gauche_04.png'));

  myHeroTop.push(loadImage('animations/perso_marche_dos_01.png'));
  myHeroTop.push(loadImage('animations/perso_marche_dos_02.png')); 
  myHeroTop.push(loadImage('animations/perso_marche_dos_03.png')); 
  myHeroTop.push(loadImage('animations/perso_marche_dos_04.png'));

  myHeroBack.push(loadImage('animations/perso_principal_01.png'));
  myHeroBack.push(loadImage('animations/perso_principal_02.png')); 
  myHeroBack.push(loadImage('animations/perso_principal_03.png')); 
  myHeroBack.push(loadImage('animations/perso_principal_04.png'));

  myHeroDiagoBackLeft.push(loadImage('animations/diagonale_gauche_01.png'));
  myHeroDiagoBackLeft.push(loadImage('animations/diagonale_gauche_02.png')); 
  myHeroDiagoBackLeft.push(loadImage('animations/diagonale_gauche_03.png')); 
  myHeroDiagoBackLeft.push(loadImage('animations/diagonale_gauche_04.png'));

  myHeroDiagoBackRight.push(loadImage('animations/diagonale_droite_01.png'));
  myHeroDiagoBackRight.push(loadImage('animations/diagonale_droite_02.png')); 
  myHeroDiagoBackRight.push(loadImage('animations/diagonale_droite_03.png')); 
  myHeroDiagoBackRight.push(loadImage('animations/diagonale_droite_04.png'));

  mamie = loadImage('designs-des-designers/animMamie/mamie_01.png')
  astronome = loadImage('designs-des-designers/astronome/astronome_01.png')
  mecanicien = loadImage('designs-des-designers/mecanicien/mecanicien_01.png')

  worldsLayer1 = [world1BoardLayer1,world2BoardLayer1,world3BoardLayer1,world4BoardLayer1,world5BoardLayer1]
  worldsLayer2 = [world1BoardLayer2,world2BoardLayer2,world3BoardLayer2,world4BoardLayer2,world5BoardLayer2]
  worldsLayer3 = [world1BoardLayer3,world2BoardLayer3,world3BoardLayer3,world4BoardLayer3,world5BoardLayer3]
  worldsLayer4 = [world1BoardLayer4,world2BoardLayer4,world3BoardLayer4,world4BoardLayer4,world5BoardLayer4]
  tileDictionnariesLayer1 = [layer1Dictionnary,world2layer1Dictionnary,world3layer1Dictionnary,world4layer1Dictionnary, world5layer1Dictionnary]
  tileDictionnariesLayer2 = [layer2Dictionnary,world2layer2Dictionnary,world3layer2Dictionnary,world4layer2Dictionnary,world5layer2Dictionnary]
  tileDictionnariesLayer3 = [layer3Dictionnary,world2layer3Dictionnary,world3layer3Dictionnary,world4layer3Dictionnary,world5layer3Dictionnary]
  tileDictionnariesLayer4 = [layer4Dictionnary,world2layer4Dictionnary,world3layer4Dictionnary,world4layer4Dictionnary,world5layer4Dictionnary]
  worldsTileSizes = [world1TileSize,world2TileSize, world3TileSize, world4TileSize, world5TileSize]
}

function drawWorld(gameBoard,tileDictionnary,tileSize) {
  for (let y = 0; y < gameBoard.length; y++) {
    const currentLine = gameBoard[y];
    for (let x = 0; x < currentLine.length; x++) {
      const currentTileValue = currentLine[x];
      let currentImageName = tileDictionnary[currentTileValue];
      image(currentImageName, x*tileSize, y*tileSize, tileSize, tileSize);
    }
  }
}

function drawElements(gameBoard,tileDictionnary,tileSize) {
  for (let y = 0; y < gameBoard.length; y++) {
    const currentLine = gameBoard[y];
    for (let x = 0; x < currentLine.length; x++) {
      const currentTileValue = currentLine[x];
      let currentImageName = tileDictionnary[currentTileValue];
      image(currentImageName, x*tileSize, y*tileSize, tileSize, tileSize);
    }
  }
}
function drawColisions(gameBoard,tileDictionnary,tileSize) {
  //console.log("GameBoard", gameBoard);
  for (let y = 0; y < gameBoard.length; y++) {
    const currentLine = gameBoard[y];
    for (let x = 0; x < currentLine.length; x++) {
      const currentTileValue = currentLine[x];
      let currentImageName = tileDictionnary[currentTileValue];
      image(currentImageName, x*tileSize, y*tileSize, tileSize, tileSize);
    }
  }
}

function drawFront(gameBoard,tileDictionnary,tileSize) {
  for (let y = 0; y < gameBoard.length; y++) {
    const currentLine = gameBoard[y];
    for (let x = 0; x < currentLine.length; x++) {
      const currentTileValue = currentLine[x];
      let currentImageName = tileDictionnary[currentTileValue];
      image(currentImageName, x*tileSize, y*tileSize, tileSize, tileSize);
    }
  }
}

function pointIsInRect(xP,yP,xR,yR,wR,hR){

  if( (xP > xR && xP < xR + wR) && ( yP > yR && yP < yR + hR) )
  {
    return true;
  }else{
    return false;
  }

}
function rectIsInRect(xP,yP,wP,hP,xR,yR,wR,hR){
 // Arrivée par la gauche
  if (xP + wP > xR){
    // if (pointIsInRect(xP+wP, yP + hP/2,xR,yR,wR,hR)) {
    //   console.log("Par la gauche et le centre");
    //   return true;
    // }
    if (pointIsInRect(xP+wP, yP,xR,yR,wR,hR)){
      console.log("Par la gauche et le bas");
      return true;
    }
    
    if (pointIsInRect(xP+wP, yP + hP,xR,yR,wR,hR)){
      console.log("Par la gauche et le haut");
      return true;
    }
    
    
  }

  // Arrivée par la droite
  if (xP < xR + wR){
    // if (pointIsInRect(xP, yP + hP/2,xR,yR,wR,hR)){
    //   console.log("Par la droite et le centre");
    //   return true;
    // }
    
    if (pointIsInRect(xP, yP + hP,xR,yR,wR,hR)){
      console.log("Par la droite et le haut");
      return true;
    }
    if (pointIsInRect(xP, yP,xR,yR,wR,hR)){
      console.log("Par la droite et le bas");
      return true;
    }
  }

   // Arrivée par le bas
   if (yP < yR + hR){

    if (pointIsInRect(xP + wP/2, yP+hP/2, xR,yR,wR,hR)){
      console.log("Par la bas et le centre : Effet tête du personnage qui passe sur la maison");
      return true;
    }

    
    // if (pointIsInRect(xP + wP, yP, xR,yR,wR,hR)){
    //   console.log("Par la bas et la gauche");
    //   return true;
    // }
    // if (pointIsInRect(xP, yP,xR,yR,wR,hR)){
    //   console.log("Par le bas et la droite");
    //   return true;
    // }
    
   }

   // Arrivée par le haut
   if (yP + hP > yR){
    // if (pointIsInRect(xP + wP / 2, yP+hP,xR,yR,wR,hR)){
    //   console.log("Par le haut et le centre");
    //   return true;
    // }
    
    if (pointIsInRect(xP, yP+hP, xR,yR,wR,hR)){
      console.log("Par le haut et la gauche");
      return true;
    }
    if (pointIsInRect(xP + wP, yP+hP,xR,yR,wR,hR)){
      console.log("Par le bas et la droite");
      return true;
    }
   }

}

function checkCollision(gameBoard,tileSize) {
  for (let y = 0; y < gameBoard.length; y++) {
    const currentLine = gameBoard[y];
    for (let x = 0; x < currentLine.length; x++) {
      const currentTileValue = currentLine[x];    
      // console.log(currentTileValue)  
      if (currentTileValue === 1){
        if(rectIsInRect(heroX,heroY,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)){
          return true 
        }
      }
      if (currentTileValue === 2){
        if(rectIsInRect(heroX,heroY,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)){
          console.log("Changer monde ")
          currentWorld = 1;
          heroX = 2*world1TileSize;
          heroY = 7*world1TileSize;
        }
      }
      if (currentTileValue === 3){
        if(rectIsInRect(heroX,heroY,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)){
          console.log("Changer monde ")
          currentWorld = 2;
          heroX = 10*world1TileSize;
          heroY = 7*world1TileSize;
        }
      }
      if (currentTileValue === 4){
        if(rectIsInRect(heroX,heroY,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)){
          console.log("Changer monde")
          currentWorld = 0;
            heroX = 17*world1TileSize;
            heroY = 7*world1TileSize;
        }
      }
      if (currentTileValue === 5){
        if(rectIsInRect(heroX,heroY,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)){
          console.log("Changer monde")
          currentWorld = 1;
          heroX = 10*world1TileSize;
          heroY = 1*world1TileSize;
        }
      }
      if (currentTileValue === 6){
        if(rectIsInRect(heroX,heroY,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)){
          console.log("Changer monde")
          currentWorld = 3;
          heroX = 2*world1TileSize;
          heroY = 4*world1TileSize;
        }
      }
      if (currentTileValue === 7){
        if(rectIsInRect(heroX,heroY,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)){
          console.log("Changer monde")
          currentWorld = 4;
          heroX = 17*world1TileSize;
          heroY = 0*world1TileSize;
        }
      }
      // if (currentTileValue === 8){
      //   if(rectIsInRect(heroX,heroY,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)){
      //     console.log("Changer monde")
      //     currentWorld = 4;
      //     heroX = 17*world1TileSize;
      //     heroY = 0*world1TileSize;
      //   }
      // }
    }
  }

}

function dialogue(gameBoard, tileSize, idPNJ) {
  for (let y = 0; y < gameBoard.length; y++) {
    const currentLine = gameBoard[y];
    for (let x = 0; x < currentLine.length; x++) {
      const currentTileValue = currentLine[x];
      if (currentTileValue === idPNJ){
        if(rectIsInRect(heroX,heroY,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)){
          console.log(idPNJ)
          image(dialogueMamie[0],10,10) 
        }
      }
    }
  }
}

function keyReleased(){
  console.log("HelloWorld");
  if (keyCode === RIGHT_ARROW){
    currentIndex = 0;
  }
  if (keyCode === LEFT_ARROW){
    console.log('leftArrow');
    currentIndex = 0;
  }
  if (keyCode === UP_ARROW){
    currentIndex = 0;
  }
  if (keyCode === DOWN_ARROW){
    currentIndex = 0;
  }
  if (keyCode === 32){
    currentDialogueIndex ++
  }

  return false;
}

// function dialogue(gameBoard,tileSize, idPNJ) {
//   for (let y = 0; y < gameBoard.length; y++) {
//     const currentLine = gameBoard[y];
//     for (let x = 0; x < currentLine.length; x++) {
//       const currentTileValue = currentLine[x];    
//       if (currentTileValue === idPNJ){
//         if(rectIsInRect(heroX,heroY,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)){
//           console.log(idPNJ)
//             image(dialogueMamie[0], 0,0)
//           // for (let i = 0; i < dialogueMamie.length; i++) {
//           //   console.log("Hey")
            
//           // }
//         }
//       }
//     }
//   }
// }

// function keyReleased(){
//   console.log("HelloWorld");
//   if (keyCode === RIGHT_ARROW){
//     currentIndex = 0;
//   }
//   if (keyCode === LEFT_ARROW){
//     console.log('leftArrow');
//     currentIndex = 0;
//   }
//   if (keyCode === UP_ARROW){
//     currentIndex = 0;
//   }
//   if (keyCode === DOWN_ARROW){
//     currentIndex = 0;
//   }
//   if (keyCode === 32){
//     if (currentWorld === 0) {
//       dialogue(worldsLayer3[currentWorld],worldsTileSizes[currentWorld], 10)
//     }
//   }
  
//   return false;
// }


const checkKeys = (currentMap) => {
  let path = 5;
 // if (currentMap ===0){
    if (keyIsDown(LEFT_ARROW)){
      movementCounter += 1;
      heroX -= path; 
      if(checkCollision(worldsLayer3[currentWorld],worldsTileSizes[currentWorld])){
        heroX += path
      }
      if (movementCounter >= 15 / heroSpeed){
        currentIndex += 1;
        if (currentIndex === myHeroLeft.length){
          currentIndex = 0;
        }
        currentHeroImage = myHeroLeft[currentIndex];
        movementCounter = 0;
      }
    } 
    if (keyIsDown(RIGHT_ARROW)){
      movementCounter += 1;
      heroX += path;
      if(checkCollision(worldsLayer3[currentWorld],worldsTileSizes[currentWorld])){
        heroX -= path
      }
      if (movementCounter >= 15 / heroSpeed){
        currentIndex += 1;
        if (currentIndex === myHeroRight.length){
          currentIndex = 0;
        }
        currentHeroImage = myHeroRight[currentIndex];
        movementCounter = 0;
      }
    } 
    if (keyIsDown(UP_ARROW)){
      movementCounter += 1;
      heroY -= path; 
      if(checkCollision(worldsLayer3[currentWorld],worldsTileSizes[currentWorld])){
        heroY+= path
      }
      if (movementCounter >= 15 / heroSpeed){
        currentIndex += 1;
        if (currentIndex === myHeroTop.length){
          currentIndex = 0;
        }
          currentHeroImage = myHeroTop[currentIndex];
          movementCounter = 0;
        }
      } 
      if (keyIsDown(DOWN_ARROW)){
        movementCounter += 1;
        heroY += path;
        if(checkCollision(worldsLayer3[currentWorld],worldsTileSizes[currentWorld])){
          heroY -= path
        }
      if (movementCounter >= 15 / heroSpeed){
        currentIndex += 1;
        if (currentIndex === myHeroBack.length){
          currentIndex = 0;
        }
        currentHeroImage = myHeroBack[currentIndex];
        movementCounter = 0;
      }
    }
    if (keyIsDown(UP_ARROW) && keyIsDown(LEFT_ARROW)){
      movementCounter += 1;
      heroY += path;
      if(checkCollision(worldsLayer3[currentWorld],worldsTileSizes[currentWorld])){
        heroY -= path
      }
      if (movementCounter >= 15 / heroSpeed){
        currentIndex += 1;
        if (currentIndex === myHeroDiagoBackLeft.length){
          currentIndex = 0;
        }
        currentHeroImage = myHeroDiagoBackLeft[currentIndex];
        movementCounter = 0;
      }
    } 
    if (keyIsDown(UP_ARROW) && keyIsDown(RIGHT_ARROW)){
      movementCounter += 1;
      heroY += path;
      if(checkCollision(worldsLayer3[currentWorld],worldsTileSizes[currentWorld])){
        heroY -= path
      }
      if (movementCounter >= 15 / heroSpeed){
        currentIndex += 1;
        if (currentIndex === myHeroDiagoBackRight.length){
          currentIndex = 0;
        }
        currentHeroImage = myHeroDiagoBackRight[currentIndex];
        movementCounter = 0;
      } 
    }
    if (keyIsDown(32) && currentWorld === 0){
      dialogueFlag = true; 
    }
    //image(dialogueMamie[0],10,10) 
    
  
}

function drawNPC(cW) {
  if (cW === 0) {
    image(mamie, 4*world1TileSize,5*world1TileSize);
  }
  if (cW === 3) {
    image(astronome, 12*world1TileSize,5*world1TileSize);
  }
  if (cW === 4) {
    image(mecanicien, 2*world1TileSize,4*world1TileSize);
  }
}

function draw() {
  background(255);
  //console.log(currentDiapo);
  drawWorld(worldsLayer1[currentWorld], tileDictionnariesLayer1[currentWorld], worldsTileSizes[currentWorld]);
  drawElements(worldsLayer2[currentWorld], tileDictionnariesLayer2[currentWorld], worldsTileSizes[currentWorld]);
  drawColisions(worldsLayer3[currentWorld], tileDictionnariesLayer3[currentWorld], worldsTileSizes[currentWorld]);
  drawNPC(currentWorld)
  image(currentHeroImage, heroX,heroY,heroWidth,heroHeight);
  drawFront(worldsLayer4[currentWorld], tileDictionnariesLayer4[currentWorld], worldsTileSizes[currentWorld]);
  checkKeys(currentWorld);
    if (dialogueFlag) {
      image(dialogueMamie[currentDialogueIndex], 300, 200);
    }
  // image(dialogueMamie[0],10,10) 

  //console.log(worldsLayer3[currentWorld])
}
































// if(currentMap === 1){
//   if (keyIsDown(LEFT_ARROW)){
//     movementCounter += 1;
//     heroX -= path; 
//     if(checkCollision(world1BoardLayer3,worldsTileSizes[currentWorld])){
//       heroX += path
//     }
//     if (movementCounter >= 15 / heroSpeed){
//       currentIndex += 1;
//       if (currentIndex === myHeroLeft.length){
//           currentIndex = 0;
//       }
//       currentHeroImage = myHeroLeft[currentIndex];
//       movementCounter = 0;
//       print(currentIndex);
//     }
//   } 



//   if (keyIsDown(RIGHT_ARROW)){
//     movementCounter += 1;
//     heroX += path;
//     if(checkCollision(world1BoardLayer3,worldsTileSizes[currentWorld])){
//       heroX -= path
//     }
//     if (movementCounter >= 15 / heroSpeed){
//       currentIndex += 1;
//       if (currentIndex === myHeroRight.length){
//           currentIndex = 0;
//       }
//       currentHeroImage = myHeroRight[currentIndex];
//       movementCounter = 0;
//       print(currentIndex);
//     }
//   } 
// }