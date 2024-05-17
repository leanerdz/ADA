let showWorld = true;
let redirectionDelay = 1000;
let cinemDebut;
let cinemFin;

let menu;
let currentMenu = 0;
let prevMenu = 0;
let menuComplet;
let menuClickCounter = 0;
let menuCroix;
let callReset = false;
let currentDirPerso = "jour"

let modeNuit;
let modeCrepuscule;
let showNuit = false;
let showCrepuscule = false;
let lampadaireNuit;
let lampadaireCrepuscule;
let pas;
let fondObeservatoire;
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
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34],
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
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

];

let layer3Dictionnary = {};
let world1BoardLayer3 = [
  [1,1,1,1,1,1,1,1,1,1,9,9,1,1,1,1,1,1,1,1],
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
  [35,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,24,1,1],
  [35,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0],
  [35,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1],
  [35,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0]

];
let world2TileSize = 64;

let world2layer2Dictionnary = {};
let world2BoardLayer2 = [
  [0,0,0,0,62,63,12,13,0,0,0,23,24,0,0,0,0,0,0,0],
  [0,0,10,11,64,65,14,15,0,0,0,25,26,0,0,0,0,0,0,0],
  [0,0,12,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,14,15,0,0,0,0,0,0,0,0,0,81,82,51,52,53,0,0],
  [0,0,21,22,0,21,22,0,0,0,0,0,0,83,84,54,55,56,0,0],
  [0,0,23,24,0,23,24,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,92,25,26,0,25,26,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [33,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [37,38,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

let world2layer3Dictionnary = {};
let world2BoardLayer3 = [
  [1,1,1,1,1,1,1,1,1,3,3,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,0,0,1,1,12,12,12,12,12,1,1],
  [1,1,1,1,1,1,1,1,1,0,0,1,12,12,12,12,12,12,1,1],
  [1,1,1,1,1,1,1,1,1,0,0,1,12,12,12,12,12,12,1,1],
  [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1],
  [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
  [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],

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
[51,32,33,0,0,0,0,0,0,27,25,0,1,0,1,0,1,0,0,0],
[52,37,38,0,0,0,0,0,0,27,25,0,0,0,0,1,0,0,1,1],
[35,1,1,1,0,1,1,0,0,27,25,1,0,0,0,0,1,0,1,0],
[35,1,1,0,0,1,0,0,0,27,25,0,0,0,0,0,0,0,1,0],
[35,0,0,1,0,0,0,0,0,27,25,0,0,0,0,0,0,0,0,0],
[35,0,1,1,0,0,0,1,0,27,25,1,0,0,0,0,1,0,1,0],
];
let world3TileSize = 64;

let world3layer2Dictionnary = {};
let world3BoardLayer2 = [
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[32,33,34,0,0,0,0,0,0,0,0,21,22,0,0,0,0,0,0,0],
[36,37,38,0,0,0,0,0,0,0,0,23,24,0,0,0,0,0,0,0],
[61,62,0,0,11,12,0,0,0,0,0,25,26,0,0,0,0,0,0,0],
[63,64,0,0,13,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,15,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,4,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,6,0,0,0,0]
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
[1,0,0,1,23,26,26,26,26,26,26,26,26,26,24,0,1,0,1,1],
[0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1],
[0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0],
[0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0]
];
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
[0,0,13,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,14],
[0,0,15,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,16]
];

let world4layer3Dictionnary = {};
let world4BoardLayer3 = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [11,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [11,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [11,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,0,0,1,1,1,1,1,1,0,10,10,1,1,1,1,1],
  [1,1,1,1,0,0,0,0,0,0,0,0,0,10,10,1,1,1,1,1],
  [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
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
  [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 27, 25, 0, 0, 1, 0, 0, 34, 30],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 27, 25, 0, 0, 0, 0, 0, 34, 30],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 25, 0, 0, 0, 0, 0, 34, 30],
  [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 27, 25, 0, 0, 1, 0, 0, 34, 30]
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
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 16, 0, 0, 0]
];

let world5layer3Dictionnary = {};
let world5BoardLayer3 = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,13],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,13],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1],
  [1,0,10,10,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
  [1,0,10,10,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,8,8,1,1,1,1,1,1,1]
];




let currentWorld = 1;

let worldsLayer1 = [] ;
let worldsLayer2 = [] ;
let worldsLayer3 = [] ;
let tileDictionnariesLayer1 = [];
let tileDictionnariesLayer2 = [];
let tileDictionnariesLayer3 = [];
let worldsTileSizes = [];
////////////////////////////////////////////////////////////////////
//////////////////////////Hero//////////////////////////////////////
////////////////////////////////////////////////////////////////////

let heroSpeed = 5;
let heroWidth = 47;
let heroHeight = 94;
let heroX = 17*world1TileSize;
let heroY = 7*world1TileSize;
let myHeroRight = [];
let myHeroLeft = [];
let myHeroTop = [];
let myHeroBack = [];
let myHeroDiagoBackRight = [];
let myHeroDiagoBackLeft = [];
let myHeroDiagoTopRight = [];
let myHeroDiagoTopLeft = [];
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
let dialogueMamieApres;
let dialogueMecanicien;
let dialogueMecanicienApres;
let dialogueAstronome;
let dialogueAstronomeApres;

let plusTard;
let plusTardMecanoFlag = true;
let plusTardAstroFlag = true;
let plusTardFusee;

let dialogueMamieFlag = false; 
let dialogueMamieFlagApres = false; 
let dialogueMecanoFlag = false; 
let dialogueAstroFlag = false; 
let currentDialogueMamieIndex = 0;
let currentDialogueMamieIndexApres = 0;
let currentDialogueMecanoIndex = 0;
let currentDialogueAstroIndex = 0;
let gameEndImgMamie;
let gameEndImgMamieFlag = false;
let gameEndImgGarage;
let gameEndImgAstro;

function loadImages() {
  myHeroRight = [loadImage('animations/'+ currentDirPerso +'/perso_cote_01.png'),
                loadImage('animations/'+ currentDirPerso +'/perso_cote_02.png'),
                loadImage('animations/'+ currentDirPerso +'/perso_cote_03.png'),
                loadImage('animations/'+ currentDirPerso +'/perso_cote_04.png')]
  myHeroLeft = [loadImage('animations/'+ currentDirPerso +'/perso_gauche_01.png'),
                loadImage('animations/'+ currentDirPerso +'/perso_gauche_02.png'),
                loadImage('animations/'+ currentDirPerso +'/perso_gauche_03.png'),
                loadImage('animations/'+ currentDirPerso +'/perso_gauche_04.png')]
  myHeroTop = [loadImage('animations/'+ currentDirPerso +'/perso_marche_dos_01.png'),
              loadImage('animations/'+ currentDirPerso +'/perso_marche_dos_02.png'),
              loadImage('animations/'+ currentDirPerso +'/perso_marche_dos_03.png'),
              loadImage('animations/'+ currentDirPerso +'/perso_marche_dos_04.png')]
  myHeroBack = [loadImage('animations/'+ currentDirPerso +'/perso_principal_01.png'),
              loadImage('animations/'+ currentDirPerso +'/perso_principal_02.png'), 
              loadImage('animations/'+ currentDirPerso +'/perso_principal_03.png'), 
              loadImage('animations/'+ currentDirPerso +'/perso_principal_04.png')]
  myHeroDiagoBackLeft = [loadImage('animations/'+ currentDirPerso +'/diagonale_gauche_01.png'),
                        loadImage('animations/'+ currentDirPerso +'/diagonale_gauche_02.png'),
                        loadImage('animations/'+ currentDirPerso +'/diagonale_gauche_03.png'),
                        loadImage('animations/'+ currentDirPerso +'/diagonale_gauche_04.png')]
  myHeroDiagoBackRight =[loadImage('animations/'+ currentDirPerso +'/diagonale_droite_01.png'),
                        loadImage('animations/'+ currentDirPerso +'/diagonale_droite_02.png'),
                        loadImage('animations/'+ currentDirPerso +'/diagonale_droite_03.png'),
                        loadImage('animations/'+ currentDirPerso +'/diagonale_droite_04.png')]
  myHeroDiagoTopRight = [loadImage('animations/'+ currentDirPerso +'/diagonale_avant_05.png'), 
                        loadImage('animations/'+ currentDirPerso +'/diagonale_avant_06.png'), 
                        loadImage('animations/'+ currentDirPerso +'/diagonale_avant_07.png'), 
                        loadImage('animations/'+ currentDirPerso +'/diagonale_avant_08.png'),]
  myHeroDiagoTopLeft = [loadImage('animations/'+ currentDirPerso +'/diagonale_avant_01.png'),
                      loadImage('animations/'+ currentDirPerso +'/diagonale_avant_02.png'),
                      loadImage('animations/'+ currentDirPerso +'/diagonale_avant_03.png'),
                      loadImage('animations/'+ currentDirPerso +'/diagonale_avant_04.png'),]

  lampadaireNuit = loadImage('designs-des-designers/lampadaire/lampadaireNuit.png')

  mamie = [loadImage('designs-des-designers/animMamie/mamie_01.png'),loadImage('designs-des-designers/animMamie/mamie_02.png'),loadImage('designs-des-designers/animMamie/mamie_03.png'), loadImage('designs-des-designers/animMamie/mamie_04.png'), loadImage('designs-des-designers/animMamie/mamie_05.png'), loadImage('designs-des-designers/animMamie/mamie_06.png'), loadImage('designs-des-designers/animMamie/mamie_07.png')]
  astronome = [loadImage('designs-des-designers/astronome/astronome_01.png'), loadImage('designs-des-designers/astronome/astronome_02.png'), loadImage('designs-des-designers/astronome/astronome_03.png'),loadImage('designs-des-designers/astronome/astronome_04.png'),loadImage('designs-des-designers/astronome/astronome_05.png')]
  mecanicien = [loadImage('designs-des-designers/mecanicien/mecanicien_01.png'), loadImage('designs-des-designers/mecanicien/mecanicien_02.png'),loadImage('designs-des-designers/mecanicien/mecanicien_03.png'),loadImage('designs-des-designers/mecanicien/mecanicien_04.png'),loadImage('designs-des-designers/mecanicien/mecanicien_05.png')]

  modeNuit = loadImage('designs-des-designers/nuit/mode_nuit2.png')
  modeCrepuscule = loadImage('designs-des-designers/crepuscule/filtreCrepuscule.png')  
  lampadaireCrepuscule = loadImage('designs-des-designers/crepuscule/lampadaireCrepuscule.png')

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
                    9: createImage(1,1),
                    10: createImage(1,1),
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
    51:loadImage('designs-des-designers/atelier/atelier_01.png'),
    52:loadImage('designs-des-designers/atelier/atelier_02.png'),
    53:loadImage('designs-des-designers/atelier/atelier_03.png'),
    54:loadImage('designs-des-designers/atelier/atelier_04.png'),
    55:loadImage('designs-des-designers/atelier/atelier_05.png'),
    56:loadImage('designs-des-designers/atelier/atelier_06.png'),
    81:loadImage('designs-des-designers/fusee-demontee/fusee-demontee-01.png'),
    82:loadImage('designs-des-designers/fusee-demontee/fusee-demontee-02.png'),
    83:loadImage('designs-des-designers/fusee-demontee/fusee-demontee-03.png'),
    84:loadImage('designs-des-designers/fusee-demontee/fusee-demontee-04.png'),
    91:loadImage('designs-des-designers/elements_fixes/panneaux/panneau-droite.png'),
    92:loadImage('designs-des-designers/elements_fixes/panneaux/panneau-gauche.png'),
    
    
  }

  world2layer3Dictionnary = { 
                    0: createImage(1,1),
                    1: createImage(1,1),
                    2: createImage(1,1),
                    3: createImage(1,1),
                    4: createImage(1,1),
                    10: createImage(1,1),
                    12: createImage(1,1),
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
    61:loadImage('designs-des-designers/elements_fixes/barque/barque-01.png'),
    62:loadImage('designs-des-designers/elements_fixes/barque/barque-02.png'),
    63:loadImage('designs-des-designers/elements_fixes/barque/barque-03.png'),
    64:loadImage('designs-des-designers/elements_fixes/barque/barque-04.png'),
    
  }

  world3layer3Dictionnary = { 
                    0: createImage(1,1),
                    1: createImage(1,1),
                    2: createImage(1,1),
                    5: createImage(1,1),
                    6: createImage(1,1),
                    7: createImage(1,1),
                    10: createImage(1,1),
                    12: createImage(1,1),

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
                    11: createImage(1,1),
                    10: createImage(1,1),
                    12: createImage(1,1),
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
                    5: createImage(1,1),
                    8: createImage(1,1),
                    10: createImage(1,1),
                    12: createImage(1,1),
                    13: createImage(1,1),
  }



}
function preload() {
  pas = loadSound('sons/bruitDePas.mp3')
  // fondObeservatoire = loadSound('sons/observatoire/son-fond-observatoire.mp3')
  bgmamie = loadImage('mini-jeux/maison-mamie/interieur_maison_mamie.png')
  chatCuisine = [loadImage('mini-jeux/maison-mamie/chatCuisine/chatCuisine1.png'),loadImage('mini-jeux/maison-mamie/chatCuisine/chatCuisine2.png'),loadImage('mini-jeux/maison-mamie/chatCuisine/chatCuisine3.png'),loadImage('mini-jeux/maison-mamie/chatCuisine/chatCuisine4.png'),loadImage('mini-jeux/maison-mamie/chatCuisine/chatCuisine3.png'),loadImage('mini-jeux/maison-mamie/chatCuisine/chatCuisine4.png'),loadImage('mini-jeux/maison-mamie/chatCuisine/chatCuisine3.png'),loadImage('mini-jeux/maison-mamie/chatCuisine/chatCuisine4.png'),loadImage('mini-jeux/maison-mamie/chatCuisine/chatCuisine3.png'),loadImage('mini-jeux/maison-mamie/chatCuisine/chatCuisine4.png'),loadImage('mini-jeux/maison-mamie/chatCuisine/chatCuisine5.png')]
  chatCanape = [loadImage('mini-jeux/maison-mamie/chatCanape/chatCanape1.png'),loadImage('mini-jeux/maison-mamie/chatCanape/chatCanape2.png'),loadImage('mini-jeux/maison-mamie/chatCanape/chatCanape3.png'),loadImage('mini-jeux/maison-mamie/chatCanape/chatCanape4.png'),loadImage('mini-jeux/maison-mamie/chatCanape/chatCanape3.png'),loadImage('mini-jeux/maison-mamie/chatCanape/chatCanape4.png'),loadImage('mini-jeux/maison-mamie/chatCanape/chatCanape3.png'),loadImage('mini-jeux/maison-mamie/chatCanape/chatCanape4.png'),loadImage('mini-jeux/maison-mamie/chatCanape/chatCanape3.png'),loadImage('mini-jeux/maison-mamie/chatCanape/chatCanape4.png'),loadImage('mini-jeux/maison-mamie/chatCanape/chatCanape5.png')]
  chatLunettes = [loadImage('mini-jeux/maison-mamie/chetLunettes/chetLunettes1.png'),loadImage('mini-jeux/maison-mamie/chetLunettes/chetLunettes2.png'),loadImage('mini-jeux/maison-mamie/chetLunettes/chetLunettes3.png'),loadImage('mini-jeux/maison-mamie/chetLunettes/chetLunettes4.png'),loadImage('mini-jeux/maison-mamie/chetLunettes/chetLunettes5.png'),loadImage('mini-jeux/maison-mamie/chetLunettes/chetLunettes4.png'),loadImage('mini-jeux/maison-mamie/chetLunettes/chetLunettes5.png'),loadImage('mini-jeux/maison-mamie/chetLunettes/chetLunettes4.png'),loadImage('mini-jeux/maison-mamie/chetLunettes/chetLunettes5.png'),loadImage('mini-jeux/maison-mamie/chetLunettes/chetLunettes4.png'),loadImage('mini-jeux/maison-mamie/chetLunettes/chetLunettes5.png'),loadImage('mini-jeux/maison-mamie/chetLunettes/chetLunettes5.png'),loadImage('mini-jeux/maison-mamie/chetLunettes/chetLunettes4.png'),loadImage('mini-jeux/maison-mamie/chetLunettes/chetLunettes5.png'),loadImage('mini-jeux/maison-mamie/chetLunettes/chetLunettes6.png'),loadImage('mini-jeux/maison-mamie/chetLunettes/chetLunettes7.png')]
  lunettes = loadImage('mini-jeux/maison-mamie/lunette.png')
  fixedCat1 = loadImage('mini-jeux/maison-mamie/chatfixes/chatFixe.png')
  fixedCat21 = loadImage('mini-jeux/maison-mamie/chatfixes/chatFixe2-1.png')
  fixedCat22 = loadImage('mini-jeux/maison-mamie/chatfixes/chatFixe2-2.png')
  meow1 = loadSound('mini-jeux/maison-mamie/meow1.mp3');
  meow2 = loadSound('mini-jeux/maison-mamie/meow2.mp3');


  bgGarage = loadImage('mini-jeux/garage/garage_sans_batterie.png');
  buttonActifGarage = loadImage('mini-jeux/garage/bouton_actif.png');
  buttonNormalGarage = loadImage('mini-jeux/garage/bouton_normal.png');
  battery = loadImage('mini-jeux/garage/batterie.png');
  gameEndImgMamie = loadImage('mini-jeux/maison-mamie/gagne.png')
  gameEndImgGarage = loadImage('mini-jeux/garage/gagne.png')
  gameEndImgAstro = loadImage('mini-jeux/garage/gagne.png')


  star1 = loadImage('mini-jeux/observatoire/etoiles/etoile_1.png');
  star2 = loadImage('mini-jeux/observatoire/etoiles/etoile_2.png')
  bgObervatoire = loadImage('mini-jeux/observatoire/observatoire_interieur.png');
  table = loadImage('mini-jeux/observatoire/table.png')
  animTable = [loadImage('mini-jeux/observatoire/anim-table/table_anim_1.png'),loadImage('mini-jeux/observatoire/anim-table/table_anim_2.png'),loadImage('mini-jeux/observatoire/anim-table/table_anim_3.png')]

  plusTard = loadImage('designs-des-designers/dialoguePlusTard/reviens-plus-tard-dialogue.png')
  plusTardFusee = loadImage('designs-des-designers/dialoguePlusTard/fusée-reviens-plus-tard.png')

  inventaire0 = loadImage('designs-des-designers/inventaire/inventair_01.png');
  inventaire1 = loadImage('designs-des-designers/inventaire/inventair_02.png');
  inventaire2 = loadImage('designs-des-designers/inventaire/inventair_03.png');
  inventaire3 = loadImage('designs-des-designers/inventaire/inventair_04.png');

  dialogueMamie = [loadImage('designs-des-designers/dialogueMamieEtAda/avant/mamie-ada_01.png'),loadImage('designs-des-designers/dialogueMamieEtAda/avant/mamie-ada_01.png'),loadImage('designs-des-designers/dialogueMamieEtAda/avant/mamie-ada_02.png'),loadImage('designs-des-designers/dialogueMamieEtAda/avant/mamie-ada_03.png'),loadImage('designs-des-designers/dialogueMamieEtAda/avant/mamie-ada_04.png'),loadImage('designs-des-designers/dialogueMamieEtAda/avant/mamie-ada_05.png'),loadImage('designs-des-designers/dialogueMamieEtAda/avant/mamie-ada_06.png'),loadImage('designs-des-designers/dialogueMamieEtAda/apres/mamie-ada_07.png'),loadImage('designs-des-designers/dialogueMamieEtAda/apres/mamie-ada_08.png'),loadImage('designs-des-designers/dialogueMamieEtAda/apres/mamie-ada_09.png')]
  dialogueMamieApres = [loadImage('designs-des-designers/dialogueMamieEtAda/apres/mamie-ada_07.png'),loadImage('designs-des-designers/dialogueMamieEtAda/apres/mamie-ada_07.png'),loadImage('designs-des-designers/dialogueMamieEtAda/apres/mamie-ada_08.png'),loadImage('designs-des-designers/dialogueMamieEtAda/apres/mamie-ada_09.png')]
  dialogueMecanicien = [loadImage('designs-des-designers/dialogueMecanoADA/avant/mécanicien-ada_01.png'),loadImage('designs-des-designers/dialogueMecanoADA/avant/mécanicien-ada_01.png'),loadImage('designs-des-designers/dialogueMecanoADA/avant/mécanicien-ada_02.png'),loadImage('designs-des-designers/dialogueMecanoADA/avant/mécanicien-ada_03.png'),loadImage('designs-des-designers/dialogueMecanoADA/avant/mécanicien-ada_04.png'),loadImage('designs-des-designers/dialogueMecanoADA/avant/mécanicien-ada_05.png'),loadImage('designs-des-designers/dialogueMecanoADA/avant/mécanicien-ada_06.png'),loadImage('designs-des-designers/dialogueMecanoADA/apres/mécanicien-ada_07.png'),loadImage('designs-des-designers/dialogueMecanoADA/apres/mécanicien-ada_08.png'),loadImage('designs-des-designers/dialogueMecanoADA/apres/mécanicien-ada_09.png')]
  dialogueAstronome = [loadImage('designs-des-designers/dialogueAstroADA/avant/astronaute-ada_01.png'),loadImage('designs-des-designers/dialogueAstroADA/avant/astronaute-ada_01.png'),loadImage('designs-des-designers/dialogueAstroADA/avant/astronaute-ada_02.png'),loadImage('designs-des-designers/dialogueAstroADA/avant/astronaute-ada_03.png'),loadImage('designs-des-designers/dialogueAstroADA/avant/astronaute-ada_04.png'),loadImage('designs-des-designers/dialogueAstroADA/avant/astronaute-ada_05.png'),loadImage('designs-des-designers/dialogueAstroADA/avant/astronaute-ada_06.png'),loadImage('designs-des-designers/dialogueAstroADA/apres/astronaute-ada_07.png'),loadImage('designs-des-designers/dialogueAstroADA/apres/astronaute-ada_08.png'),loadImage('designs-des-designers/dialogueAstroADA/apres/astronaute-ada_09.png')]
  //cinemDebut;
  //cinemFin = createVideo('');

  menu =  [loadImage('designs-des-designers/menu/menu1.png'), loadImage('designs-des-designers/menu/menu2.png')];
  menuComplet = loadImage('designs-des-designers/menu/menuComplet.png');
  loadImages();
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  inventaire =  [inventaire0,inventaire1,inventaire2,inventaire3]
  currentHeroImage = myHeroRight[0];
  worldsLayer1 = [world1BoardLayer1,world2BoardLayer1,world3BoardLayer1,world4BoardLayer1,world5BoardLayer1]
  worldsLayer2 = [world1BoardLayer2,world2BoardLayer2,world3BoardLayer2,world4BoardLayer2,world5BoardLayer2]
  worldsLayer3 = [world1BoardLayer3,world2BoardLayer3,world3BoardLayer3,world4BoardLayer3,world5BoardLayer3]
  tileDictionnariesLayer1 = [layer1Dictionnary,world2layer1Dictionnary,world3layer1Dictionnary,world4layer1Dictionnary, world5layer1Dictionnary]
  tileDictionnariesLayer2 = [layer2Dictionnary,world2layer2Dictionnary,world3layer2Dictionnary,world4layer2Dictionnary,world5layer2Dictionnary]
  tileDictionnariesLayer3 = [layer3Dictionnary,world2layer3Dictionnary,world3layer3Dictionnary,world4layer3Dictionnary,world5layer3Dictionnary]
  worldsTileSizes = [world1TileSize,world2TileSize, world3TileSize, world4TileSize, world5TileSize]

  //Mamie

  posXMamie = 0;
  posYMamie = 0;
  widthImgMamie = windowWidth;
  heightImgmamie = windowHeight;
  
 coodinatesOfCats = [
    [800,100,310,310],//Dans la boite 
    [50,430,413,412],//Sur la commode 
    [350,250,424,424],//Derrière les rideaux
  ];

// Garage

  rectXGarage = 540;
  rectYGarage = 250;
  boutonsGarage = [buttonNormalGarage,buttonActifGarage]

  //Observatoire 
  stars =[star1, star2]
  coordinatesOfStars = [
    [690, 10, 150, 150],   // 1
    [760, 60, 150, 150], // 2
    [860, 80, 150, 150],  // 3
    [970, 90, 150, 150],// 5
    [1170, 90, 150, 150],  // 4
    [1136, 200, 150, 150],  // 6
    [990, 200, 150, 150]  // 7
  ];
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
      if (currentTileValue === 8){
        if(rectIsInRect(heroX,heroY,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)){
          console.log("Changer monde")
          currentWorld = 0;
          heroX = 11*world1TileSize;
          heroY = 1*world1TileSize;
        }
      }
      if (currentTileValue === 9){
        if(rectIsInRect(heroX,heroY,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)){
          console.log("Changer monde")
          currentWorld = 4;
          heroX = 12*world1TileSize;
          heroY = 7*world1TileSize;
        }
      }
      if (currentTileValue === 11){
        if(rectIsInRect(heroX,heroY,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)){
          console.log("Changer monde")
          currentWorld = 2;
          heroX = 18*world1TileSize;
          heroY = 4*world1TileSize;
        }
      }
      if (currentTileValue === 13){
        if(rectIsInRect(heroX,heroY,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)){
          console.log("Changer monde")
          currentWorld = 2;
          heroX = 2*world1TileSize;
          heroY = 1.5*world1TileSize;
        }
      }
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
        return true         }
      }
    }
  }
}
let isPasPlaying = false;


function keyReleased(){
  console.log("HelloWorld");
  if (keyCode === RIGHT_ARROW){
    currentIndex = 0;
    if (isPasPlaying) {
      pas.stop();
      isPasPlaying = false;
    }
  }
  if (keyCode === LEFT_ARROW){
    currentIndex = 0;
    if (isPasPlaying) {
      pas.stop();
      isPasPlaying = false;
    }
  }
  if (keyCode === UP_ARROW){
    currentIndex = 0;
    if (isPasPlaying) {
      pas.stop();
      isPasPlaying = false;
    }  
  }
  if (keyCode === DOWN_ARROW){
    currentIndex = 0;
    if (isPasPlaying) {
      pas.stop();
      isPasPlaying = false;
    }  
  }
  if (keyCode === 32){
    if (dialogueMamieFlag) {
      currentDialogueMamieIndex++;
      if (currentDialogueMamieIndex === dialogueMamie.length) {
        dialogueMamieFlag = false;
      }
    }
    if (dialogueMecanoFlag) {
      currentDialogueMecanoIndex++;
      if (currentDialogueMecanoIndex === dialogueMecanicien.length) {
        dialogueMecanoFlag = false;
      }
    }
    if (dialogueAstroFlag) {
      currentDialogueAstroIndex++;
      if (currentDialogueAstroIndex === dialogueAstronome.length) {
        dialogueAstroFlag = false;
      }
    }
  }

  return false;
}




const checkKeys = (currentMap) => {
  let path = 5;
 // if (currentMap ===0){
    if (keyIsDown(LEFT_ARROW)){
      if (!isPasPlaying) {
        pas.loop();
        isPasPlaying = true;
      }      
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
      if (!isPasPlaying) {
        pas.loop();
        isPasPlaying = true;
      }      
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
      if (!isPasPlaying) {
        pas.loop();
        isPasPlaying = true;
      }      
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
        if (!isPasPlaying) {
          pas.loop();
          isPasPlaying = true;
        }
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
      if (!isPasPlaying) {
        pas.loop();
        isPasPlaying = true;
      }
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
      if (!isPasPlaying) {
        pas.loop();
        isPasPlaying = true;
      }      
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
    if (keyIsDown(DOWN_ARROW) && keyIsDown(RIGHT_ARROW)){
      if (!isPasPlaying) {
        pas.loop();
        isPasPlaying = true;
      }      
      movementCounter += 1;
      heroY += path;
      if(checkCollision(worldsLayer3[currentWorld],worldsTileSizes[currentWorld])){
        heroY -= path
      }
      if (movementCounter >= 15 / heroSpeed){
        currentIndex += 1;
        if (currentIndex === myHeroDiagoTopRight.length){
          currentIndex = 0;
        }
        currentHeroImage = myHeroDiagoTopRight[currentIndex];
        movementCounter = 0;
      } 
    }
    if (keyIsDown(DOWN_ARROW) && keyIsDown(LEFT_ARROW)){
      if (!isPasPlaying) {
        pas.loop();
        isPasPlaying = true;
      }      
      movementCounter += 1;
      heroY += path;
      if(checkCollision(worldsLayer3[currentWorld],worldsTileSizes[currentWorld])){
        heroY -= path
      }
      if (movementCounter >= 15 / heroSpeed){
        currentIndex += 1;
        if (currentIndex === myHeroDiagoTopLeft.length){
          currentIndex = 0;
        }
        currentHeroImage = myHeroDiagoTopLeft[currentIndex];
        movementCounter = 0;
      } 
    }
    if (keyIsDown(32)){
      if (currentWorld === 0 && dialogue(worldsLayer3[currentWorld],worldsTileSizes[currentWorld], 10)) {
        dialogueMamieFlag = true;
      }
      if (currentWorld === 4 && dialogue(worldsLayer3[currentWorld],worldsTileSizes[currentWorld], 10)) {
        if (hasWonMamie) {
          dialogueMecanoFlag = true;
          plusTardMecanoFlag = false;
        } else {
          plusTardMecanoFlag = true;
        }
      }
      if (currentWorld === 3 && dialogue(worldsLayer3[currentWorld],worldsTileSizes[currentWorld], 10)) {
        if (hasWonMamie && hasWonGarage) {
          dialogueAstroFlag = true;
          plusTardAstroFlag = false;
        } else {
          plusTardAstroFlag = true;
        }
      }
    }
    
  
}


function drawNPC(cW) {
  if (cW === 0) {
    let currentAnimMamie = mamie[Math.floor(currentFramePNJ / frameRatePNJ) % mamie.length];
    image(currentAnimMamie, 4*world1TileSize,5*world1TileSize, 36*1.5,78*1.5);
  }
  if (cW === 3) {
    let currentAnimAstro = astronome[Math.floor(currentFramePNJ / frameRatePNJ) % astronome.length];
    image(currentAnimAstro, 13*world1TileSize,5*world1TileSize,36*1.5,78*1.5);
  }
  if (cW === 4) {
    let currentAnimMecano = mecanicien[Math.floor(currentFramePNJ / frameRatePNJ) % mecanicien.length];
    image(currentAnimMecano, 2*world1TileSize,5*world1TileSize-32,36*1.5,78*1.5);
  }
}

////////////////////////////////////////////////////////////////////
//////////////////////Maison de la Mamie////////////////////////////
////////////////////////////////////////////////////////////////////

let bgmamie;
let posXMamie;
let posYMamie;
let widthImgMamie;
let heightImgmamie;

let btClicked = false;
let cmdClicked = false;
let rdxClicked = false;

let coodinatesOfCats;

let lunettes;

let chatCuisine;
let chatCanape;
let chatLunettes;
let fixedCat1; 
let fixedCat21; 
let fixedCat22; 

let cuisineIndex = 0;
let canapeIndex = 0;
let lunettesIndex = 0;

let cuisineTarget = 0;
let canapeTarget = 0;
let lunettesTarget = 0;

let delayMamie = 10; 
let lastUpdateMamie = 0;
let fixedCatFrame = 0;
let fixedCatframeRate = 5000000;

let hasWonMamie = false;

let gameEndDelayMamie = 4000;
let gameEndTimemamie;

let meow1;
let meow2;


let showMamie = false; 

function clickOnCats() {
  for (let i = 0; i < coodinatesOfCats.length; i++) {
    let currentCoords = coodinatesOfCats[i];
    if (pointIsInRect(mouseX, mouseY, currentCoords[0], currentCoords[1], currentCoords[2], currentCoords[3])) {
      if (i === 0) {
        btClicked = true;
        cuisineIndex = 0;
        cuisineTarget = coodinatesOfCats[0][0] + 100;
        meow2.play();

      }
      if (i === 1) {
        cmdClicked = true;
        canapeIndex = 0;
        canapeTarget = coodinatesOfCats[1][0] + 100;
        meow2.play();

      }
      if (i === 2) {
        rdxClicked = true;
        lunettesIndex = 0;
        lunettesTarget = coodinatesOfCats[2][0] + 150;  
        meow2.play();
      
      }
    } else {
    }
  }
}

function animateCat() {
  if (frameCount - lastUpdateMamie >= delayMamie) { 
    lastUpdateMamie = frameCount; 
    if (btClicked) {
      if (coodinatesOfCats[0][0] < cuisineTarget) {
        cuisineIndex = (cuisineIndex + 1) % chatCuisine.length;
        coodinatesOfCats[0][0] += 10;
      }
    }
    if (cmdClicked) {
      if (coodinatesOfCats[1][0] < canapeTarget) {
        canapeIndex = (canapeIndex + 1) % chatCanape.length;
        coodinatesOfCats[1][0] += 10;
      }
    }
    if (rdxClicked) {
      if (coodinatesOfCats[2][0] < lunettesTarget) {
        lunettesIndex = (lunettesIndex + 1) % chatLunettes.length;
        coodinatesOfCats[2][0] += 10;
        hasWonMamie = true
      }
    }
  }
  if (btClicked) {
    image(chatCuisine[cuisineIndex], coodinatesOfCats[0][0], coodinatesOfCats[0][1], coodinatesOfCats[0][2], coodinatesOfCats[0][3]);
    
  }
  if (cmdClicked) {
    image(chatCanape[canapeIndex], coodinatesOfCats[1][0], coodinatesOfCats[1][1], coodinatesOfCats[1][2], coodinatesOfCats[1][3]);
  }
  if (rdxClicked) {
    image(chatLunettes[lunettesIndex], coodinatesOfCats[2][0], coodinatesOfCats[2][1], coodinatesOfCats[2][2], coodinatesOfCats[2][2]);
  }
}



////////////////////////////////////////////////////////////////////
//////////////////////////////Garage////////////////////////////////
////////////////////////////////////////////////////////////////////
let rectXGarage;
let rectYGarage;
let rectWGarage = 95;
let rectHGarage = 300;
let battery;
let batteryState = -10;
let buttonActifGarage;
let buttonNormalGarage;
let boutonsGarage;
let currentBoutonGarage = 0;
let bgGarage;
let mouseEnabledGarage = true;

let hasWonGarage = false;

let gameEndDelayGarage = 500;
let gameEndTimeGarage;

let showMecanicien = false; 
let showMenu = false;

function mousePressed() {
  if(pointIsInRect(mouseX, mouseY, 22, 22, 67, 67)){
    currentMenu = 1;
    showMenu = true;
  }
  if(pointIsInRect(mouseX, mouseY, 590,385, 100,90)){
    meow2.stop();
  }
  if (showMenu) {
    if(pointIsInRect(mouseX, mouseY, 450,240, 400,120)){
      reset()
    }
  }

  
  if (currentWorld === 4) {
    if (mouseEnabledGarage && pointIsInRect(mouseX, mouseY, 530, 100, 500, 500)){
      batteryState = batteryState - 5;
      currentBoutonGarage = 1;
    }
  }
  if (currentWorld === 3) {
    for (let i = 0; i < coordinatesOfStars.length; i++) {
      let currentCoords = coordinatesOfStars[i];
      if (pointIsInRect(mouseX, mouseY, currentCoords[0], currentCoords[1], currentCoords[2], currentCoords[3])) {
        console.log("Star clicked:", i+1);
        if( i+1 === 1){
          one = !one; 
        }
        if( i+1 === 2){
          two = !two; 
        }
        if( i+1 === 3){
          three = !three; 
        }
        if( i+1 === 4){
          four = !four; 
        }
        if( i+1 === 5){
          five = !five; 
        }
        if( i+1 === 6){
          six = !six; 
        }
        if( i+1 === 7){
          seven = !seven; 
        }
      }
    }
  }
};
function mouseReleased() {
  if (currentWorld === 4) {
    currentBoutonGarage = 0;
  }
  if (showMenu) {
    if(pointIsInRect(mouseX, mouseY, 22, 22, 67, 67)){
      currentMenu = 0;
      menuClickCounter++;
    }
  }
  
    
}

function limitGarage() {
  if (batteryState === -225) {
    console.log("limite");
    mouseEnabledGarage = false; 
    batteryState = -225;
    hasWonGarage = true;
  }
}

function colorChange(){
  switch (true) {
    case (batteryState <= 50):
      fill(255, 0, 0);
      break;
    case (batteryState > 50 && batteryState <= 100):
      fill(255, 171, 0);
      break;
    case (batteryState > 100 && batteryState <= 150):
      fill(247, 255, 0);
      break;
    default:
      fill(0, 255, 0);
  }
}

////////////////////////////////////////////////////////////////////
////////////////////////////Observatoire////////////////////////////
////////////////////////////////////////////////////////////////////

let coordinatesOfStars;
let one = false;
let two = false;
let three = false;
let four = false;
let five = false;
let six = false;
let seven = false;
let bgObervatoire;
let stars = [];
let star1;
let star2;
let currentFrameObervatoire = 0;
let frameRateObervatoire = 5;
let currentFramePNJ = 0;
let frameRatePNJ = 10;

let table; 
let hasWonObervatoire = false;

let gameEndDelayObervatoire = 1000;
let gameEndTimeObervatoire;

let animTable;
let showAstronome = false; 


function linkedStars (){
  // stroke(3)
  
  if(one && two){
    console.log("One and two linked")
    stroke(255, 251, 208);
    line(coordinatesOfStars[0][0] +75, coordinatesOfStars[0][1]+75, coordinatesOfStars[1][0]+75, coordinatesOfStars[1][1]+75);
  }
  if(two && three){
    console.log("two and three linked")
    stroke(255, 251, 208);
    line(coordinatesOfStars[1][0]+75, coordinatesOfStars[1][1]+75, coordinatesOfStars[2][0]+75, coordinatesOfStars[2][1]+75);
  }
  if(three && four){
    console.log("three and four linked")
    stroke(255, 251, 208);
    line(coordinatesOfStars[2][0]+75, coordinatesOfStars[2][1]+75, coordinatesOfStars[3][0]+75, coordinatesOfStars[3][1]+75);
  }
  if(four && five){
    console.log("four and five linked")
    stroke(255, 251, 208);
    line(coordinatesOfStars[3][0]+75, coordinatesOfStars[3][1]+75, coordinatesOfStars[4][0]+75, coordinatesOfStars[4][1]+75);
  }
  if(five && six){
    console.log("five and six linked")
    stroke(255, 251, 208);
    line(coordinatesOfStars[4][0]+75, coordinatesOfStars[4][1]+75, coordinatesOfStars[5][0]+75, coordinatesOfStars[5][1]+75);
  }
  if(six && seven){
    console.log("six and seven linked")
    stroke(255, 251, 208);
    line(coordinatesOfStars[5][0]+75, coordinatesOfStars[5][1]+75, coordinatesOfStars[6][0]+75, coordinatesOfStars[6][1]+75);
  }
  if(seven && four){
    console.log("seven and four linked")
    stroke(255, 251, 208);
    line(coordinatesOfStars[6][0]+75, coordinatesOfStars[6][1]+75, coordinatesOfStars[3][0]+75, coordinatesOfStars[3][1]+75);
  }
}

function endGame(){
  const imageDisplayDelay = 1000; // 1 seconde

  if (hasWonMamie) {
    // currentDirPerso = "nuit"
    // loadImages();
    if (!gameEndTimemamie) {
      gameEndTimemamie = millis() + gameEndDelayMamie;
    }
    if (millis() >= gameEndTimemamie) {
      console.log("You won !")
      gameEndImgMamieFlag = true;
      //image(gameEndImgMamie,80,50)
      showMamie = false;

      if (millis() >= gameEndTimemamie + redirectionDelay + imageDisplayDelay) {
        gameEndImgMamieFlag = false;
        showWorld = true;
        showMamie = false;
        console.log('Mamie',hasWonMamie)
      }
    }
  }
  if (hasWonGarage) {
    if (!gameEndTimeGarage) {
      gameEndTimeGarage = millis() + gameEndDelayGarage;
    }
    if (millis() >= gameEndTimeGarage) {
      console.log("You won !")
      gameEndImgMamieFlag = true;
      // image(gameEndImgGarage,80,50)

      if (millis() >= gameEndTimeGarage + redirectionDelay + imageDisplayDelay) {
        gameEndImgMamieFlag = false;
        showWorld = true;
        showMecanicien = false;
        console.log('Garage',hasWonGarage)
      }
    }
  }
  if (one && two && three && four && five && six && seven) {
    hasWonObervatoire = true;
    if (!gameEndTimeObervatoire) {
      gameEndTimeObervatoire = millis() + gameEndDelayObervatoire;
    }
    if (millis() >= gameEndTimeObervatoire) {
      console.log("You won !")
      gameEndImgMamieFlag = true;
      // image(gameEndImgAstro,80,50)

      if (millis() >= gameEndTimeObervatoire + redirectionDelay + imageDisplayDelay) {
        gameEndImgMamieFlag = false;
        showWorld = true;
        showAstronome = false;
        console.log(hasWonObervatoire)
      }
    }
  }
}

function playGames() {
  if (currentDialogueMamieIndex === 7) {
    showMamie = true;
    showWorld = false;
  }
  if (currentDialogueMecanoIndex === 7) {
    showMecanicien = true;
    showWorld = false;
  }
  if (currentDialogueAstroIndex === 7) {
    showAstronome = true;
    showWorld = false;
  }
}


function reset() {
  console.log("Reset function called");
  heroX = 17 * world1TileSize;
  heroY = 7 * world1TileSize;
  currentHeroImage = myHeroRight[0];
  movementCounter = 0;
  currentIndex = 0;
  showNuit = false;
  showMenu = false;
  menuClickCounter = 0;
  hasWonMamie = false;
  gameEndDelayMamie = 4000;
  gameEndTimemamie = 0;
  gameEndDelayGarage = 500;
  gameEndTimeGarage = 0;
  gameEndDelayObervatoire = 1000;
  gameEndTimeObervatoire = 0;
  
  currentWorld = 1;
  currentDialogueMamieIndex = 0;
  currentDialogueMamieIndexApres = 0;
  currentDialogueMecanoIndex = 0;
  currentDialogueAstroIndex = 0;
  dialogueMamieFlag = false;
  dialogueMamieFlagApres = false;
  dialogueMecanoFlag = false;
  dialogueAstroFlag = false;
  plusTardMecanoFlag = true;
  plusTardAstroFlag = true;
  currentInventaire = 0;

  path = 5;
  showWorld = true;
  showMamie = false;
  showMecanicien = false;
  showAstronome = false;
  btClicked = false;
  cmdClicked = false;
  rdxClicked = false;
  coodinatesOfCats = [
    [800,100,310,310],
    [50,430,413,412],
    [350,250,424,424],
  ];
  rectXGarage = 540;
  rectYGarage = 250;
  currentBoutonGarage = 0;
  batteryState = 0;
  mouseEnabledGarage = true;
  hasWonGarage = false;
  one = false;
  two = false;
  three = false;
  four = false;
  five = false;
  six = false;
  seven = false;
  hasWonObervatoire = false;
  currentFrameObervatoire = 0;

  redirectionDelay = 1000;
  currentMenu = 0;
}
let fondObservatoireIsPlaying = false;

function playSound(){
  if (showAstronome) {
    fondObeservatoire.play();

  }
}

function draw() {
  playGames();
  endGame();
  if (showWorld) {
    background(255);
    drawWorld(worldsLayer1[currentWorld], tileDictionnariesLayer1[currentWorld], worldsTileSizes[currentWorld]);
    drawElements(worldsLayer2[currentWorld], tileDictionnariesLayer2[currentWorld], worldsTileSizes[currentWorld]);
    drawColisions(worldsLayer3[currentWorld], tileDictionnariesLayer3[currentWorld], worldsTileSizes[currentWorld]);
    currentFramePNJ = frameCount;
    drawNPC(currentWorld)
    image(currentHeroImage, heroX,heroY,heroWidth,heroHeight);
    checkKeys(currentWorld);
    let currentImageIndex = 0; 
    if (showCrepuscule) {
      image(modeCrepuscule, 0,0);
      if (currentWorld === 1) {
        image(lampadaireCrepuscule, 125-10, 250+40)
        image(lampadaireCrepuscule, 315-8, 250+40)
        image(lampadaireCrepuscule, 700-7, -70+40)
      }
      if (currentWorld === 0) {
        image(lampadaireCrepuscule, -5-8, 376+45)
        image(lampadaireCrepuscule, 380-8, 250+45)
        image(lampadaireCrepuscule, 828-8, 250+45)
      }
      if (currentWorld === 2) {
        image(lampadaireCrepuscule, 700-8, 56+45)
      }
      if (currentWorld === 4) {
        image(lampadaireCrepuscule, 700-8, 186+45)
      }
    }
    if (showNuit) {
      showCrepuscule = false;
      image(modeNuit, 0,0);
      if (currentWorld === 1) {
        image(lampadaireNuit, 125-10, 250+40)
        image(lampadaireNuit, 315-8, 250+40)
        image(lampadaireNuit, 700-7, -70+40)
      }
      if (currentWorld === 0) {
        image(lampadaireNuit, -5-8, 376+45)
        image(lampadaireNuit, 380-8, 250+45)
        image(lampadaireNuit, 828-8, 250+45)
      }
      if (currentWorld === 2) {
        image(lampadaireNuit, 700-8, 56+45)
      }
      if (currentWorld === 4) {
        image(lampadaireNuit, 700-8, 186+45)
      }
    }
    if (hasWonMamie) {
      currentImageIndex = 1;
    }
    if (hasWonGarage) {
      currentImageIndex = 2;
      showCrepuscule = true;
    }
    if (hasWonObervatoire) {
      showNuit = true; 
      currentImageIndex = 3;
    }
    
    image(inventaire[currentImageIndex], 400, 560, 300 * 1.5, 100 * 1.5);
    if (dialogueMamieFlag && currentDialogueMamieIndex < dialogueMamie.length) {
      image(dialogueMamie[currentDialogueMamieIndex], 300, 200);
    }
    if (plusTardMecanoFlag === true && currentWorld === 4 && dialogue(worldsLayer3[currentWorld],worldsTileSizes[currentWorld], 10) && !hasWonMamie) {
      image(plusTard, 200,150)
    } else if (dialogueMecanoFlag && currentDialogueMecanoIndex < dialogueMecanicien.length) {
      image(dialogueMecanicien[currentDialogueMecanoIndex], 200, 150);
    }
    if (plusTardAstroFlag === true && currentWorld === 3 &&dialogue(worldsLayer3[currentWorld],worldsTileSizes[currentWorld], 10) && !(hasWonMamie && hasWonGarage)) {
      image(plusTard, 800, 200)
    } else if (dialogueAstroFlag && currentDialogueAstroIndex < dialogueAstronome.length) {
      image(dialogueAstronome[currentDialogueAstroIndex], 800, 200);
    }
  }
////////////////////////////////////////////////////////////////////
//////////////////////Maison de la Mamie////////////////////////////
////////////////////////////////////////////////////////////////////
  if (showMamie) {
    // background(bgmamie);
    image(bgmamie, posXMamie,posYMamie,widthImgMamie,height)
    noFill();
    noStroke();
    image(lunettes, 430, 400,202,202)
    image(fixedCat1, 900, 350,364,363)
    image(fixedCat21,600,530,532,393);
    // let currentFixedCat = fixedCatFrame % 2 === 0 ? fixedCat21 : fixedCat22;
    // image(currentFixedCat,600,530,532,393);
    // fixedCatFrame = (fixedCatFrame + 1) % (fixedCatframeRate * 2);
    if (!btClicked) {
      image(chatCuisine[0], coodinatesOfCats[0][0], coodinatesOfCats[0][1], coodinatesOfCats[0][2], coodinatesOfCats[0][3]);
    }
    if (!cmdClicked) {
      image(chatCanape[0], coodinatesOfCats[1][0], coodinatesOfCats[1][1], coodinatesOfCats[1][2], coodinatesOfCats[1][3]);
    }
    if (!rdxClicked) {
      image(chatLunettes[0], coodinatesOfCats[2][0], coodinatesOfCats[2][1], coodinatesOfCats[2][2], coodinatesOfCats[2][2]);
    }
    if (mouseIsPressed) {
      clickOnCats();
      // if (pointIsInRect(mouseX, mouseY, currentCoords[0], currentCoords[1], currentCoords[2], currentCoords[3])) {
      //   meow2.play();
      // }
    }
    animateCat();
    // endGame();
  }
  if (showMecanicien) {
    // background(bgGarage);
    image(bgGarage, posXMamie,posYMamie,widthImgMamie,height)
    console.log("Battery State:", batteryState);
    // colorChange();
    fill(139, 255, 50);
    noStroke();
    rect(rectXGarage, rectYGarage + rectHGarage, rectWGarage, batteryState);
    image(battery, 400, 230, 550, 568)
    image(boutonsGarage[currentBoutonGarage], 530, 100, 500, 500);
    limitGarage();
    endGame();
  }

  if (showAstronome) {  
    // if (!fondObservatoireIsPlayed) {
    //   fondObeservatoire.loop();
    //   fondObservatoireIsPlayed = true;
    // }
    image(bgObervatoire, posXMamie,posYMamie,widthImgMamie,height)

    strokeWeight(3);
    linkedStars();

    for (let i = 0; i < coordinatesOfStars.length; i++) {
      let currentCoords = coordinatesOfStars[i];
      let currentStar = currentFrameObervatoire % 2 === 0 ? star1 : star2;
      image(currentStar, currentCoords[0], currentCoords[1], currentCoords[2], currentCoords[3]);
    }

    let currentTable = animTable[Math.floor(currentFrameObervatoire / frameRateObervatoire) % animTable.length];
    image(currentTable, 500, 200, 5616/6, 3733/6);
    // image(table, 500, 200, 5616/6, 3733/6);

    endGame();
    currentFrameObervatoire = (currentFrameObervatoire + 1) % (frameRateObervatoire * 2 * animTable.length);
  }

  if (gameEndImgMamieFlag) {
    image(gameEndImgMamie,80,50)

  }
  
  if (hasWonMamie && hasWonGarage && hasWonObervatoire && dialogue(worldsLayer3[currentWorld],worldsTileSizes[currentWorld], 12)) {
    console.log("La Fin du jeu !!!")
  }else if (hasWonMamie === false && hasWonGarage === false && hasWonObervatoire === false && dialogue(worldsLayer3[currentWorld],worldsTileSizes[currentWorld], 12)) {
    image(plusTardFusee, 800, 50)
  }

  image(menu[currentMenu], 22, 22);
  if (showMenu) {
    image(menuComplet,0,0, widthImgMamie, heightImgmamie, )
    // image(menuComplet,0,0, widthImgMamie, heightImgmamie, )
    if (menuClickCounter === 2){
      showMenu = false;
      menuClickCounter = 0;
    }
    // rect(590,385, 100,90)
    // fill(255,0,0)
    // rect(450,240, 400,120)
  }
}

