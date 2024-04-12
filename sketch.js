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
  [0, 0, 19, 20, 21, 22, 23, 24, 0, 0, 0, 0, 31109, 31110, 0, 0, 31112, 31113, 0, 0],
  [60, 61, 25, 26, 27, 28, 29, 30, 31008, 31009, 0, 0, 31210, 31211, 31008, 31009, 31213, 31214, 0, 0],
  [62, 63, 31, 32, 33, 34, 35, 36, 31109, 31110, 0, 0, 0, 0, 31109, 31110, 0, 0, 0, 0],
  [65, 66, 37, 38, 39, 40, 41, 42, 31210, 31211, 0, 0, 0, 0, 31210, 31211, 0, 0, 0, 0],
  [0, 0, 43, 44, 45, 46, 47, 30605, 31011, 31012, 0, 0, 0, 30604, 30605, 31011, 31012, 0, 0, 0],
  [0, 0, 48, 49, 50, 51, 30705, 30706, 31112, 31113, 0, 0, 0, 30705, 30706, 31112, 31113, 0, 0, 0],
  [30604, 30605, 20912, 20912, 20912, 20912, 30806, 30807, 31213, 31214, 0, 0, 0, 30806, 30807, 31213, 31214, 0, 0, 0],
  [30705, 30706, 0, 20912, 20912, 0, 309, 309, 0, 0, 0, 0, 0, 410, 410, 0, 0, 0, 30808, 30809,]
  [30806, 30807, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30909, 30910],

];
let world2TileSize = 64;

let layer3Dictionnary = {};
let world1BoardLayer3 = [
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
let world3TileSize = 64;

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
let world4TileSize = 64;


let currentWorld = 0;

let worlds = [] ;
let tileDictionnaries = [];
let worldsTileSizes = [];

////////////////////////////////////////////////////////////////////
//////////////////////////Hero//////////////////////////////////
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
let currentIndex = 0;
let movementCounter = 0;
let currentHeroImage = 0;

let diapos;
let dp1;
let dp2;
let dp3;
let dp4;
let dp5;
let dp6;
let diapoVisible = true;
let currentDiapo = 0;
let diapoW;
let diapoH;

let inventaire = []; 
let inventaire0; 
let inventaire1; 
let inventaire2; 
let inventaire3; 
let currentInventaire = 0; 

// Appelée une fois
function setup() {
  // createCanvas(world1BoardLayer1[0].length*world1TileSize,world1BoardLayer1Layer1.length*world1TileSize);
  createCanvas(windowWidth, windowHeight);
  dp1 = loadImage('diapos/diapo1.png')
  dp2 = loadImage('diapos/diapo2.png')
  dp3 = loadImage('diapos/diapo3.png')
  // dp4 = loadImage('diapos/diapo4.jpg')
  // dp5 = loadImage('diapos/diapo5.jpg')
  // dp5 = loadImage('diapos/diapo6.jpg')
  diapos = [dp1,dp2,dp3]
  diapoW = windowWidth;
  diapoH = windowHeight;
  inventaire0 = loadImage('designs-des-designers/inventaire/inventair_01.png');
  inventaire1 = loadImage('designs-des-designers/inventaire/inventair_02.png');
  inventaire2 = loadImage('designs-des-designers/inventaire/inventair_03.png');
  inventaire3 = loadImage('designs-des-designers/inventaire/inventair_04.png');

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

  layer3Dictionnary = { 
                    0: createImage(1,1),
                    1: createImage(1,1),
                    2: createImage(1,1),
  }

  layer4Dictionnary = { 
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


  worlds = [world1BoardLayer1]
  tileDictionnaries = [layer1Dictionnary]
  worldsTileSizes = [world1TileSize]
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
      console.log(currentTileValue)  
      if (currentTileValue === 1){
        if(rectIsInRect(heroX,heroY,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)){
          return true 
        }
      }
    }
  }

}

function keyReleased(){
  if (keyCode === RIGHT_ARROW){
    currentIndex = 0;
  }
  if (keyCode === LEFT_ARROW){
    currentIndex = 0;
  }
  if (keyCode === UP_ARROW){
    currentIndex = 0;
  }
  if (keyCode === DOWN_ARROW){
    currentIndex = 0;
  }
  return false;
}

const checkKeys = (currentMap) => {
  let path = 5;
  
  if (currentMap ===0){
    if (keyIsDown(LEFT_ARROW)){
      movementCounter += 1;
      heroX -= path; 
      if(checkCollision(world1BoardLayer3,worldsTileSizes[currentWorld])){
        heroX += path
      }
      if (movementCounter >= 15 / heroSpeed){
        currentIndex += 1;
        if (currentIndex === myHeroLeft.length){
            currentIndex = 0;
        }
        currentHeroImage = myHeroLeft[currentIndex];
        movementCounter = 0;
        print(currentIndex);
      }
    } 
    if (keyIsDown(RIGHT_ARROW)){
      movementCounter += 1;
      heroX += path;
      if(checkCollision(world1BoardLayer3,worldsTileSizes[currentWorld])){
        heroX -= path
      }
      if (movementCounter >= 15 / heroSpeed){
        currentIndex += 1;
        if (currentIndex === myHeroRight.length){
            currentIndex = 0;
        }
        currentHeroImage = myHeroRight[currentIndex];
        movementCounter = 0;
        print(currentIndex);
      }
    } 
    if (keyIsDown(UP_ARROW)){
      movementCounter += 1;
      heroY -= path; 
      if(checkCollision(world1BoardLayer3,worldsTileSizes[currentWorld])){
        heroY+= path
      }
      if (movementCounter >= 15 / heroSpeed){
          currentIndex += 1;
          if (currentIndex === myHeroTop.length){
              currentIndex = 0;
          }
          currentHeroImage = myHeroTop[currentIndex];
          movementCounter = 0;
          print(currentIndex);
      }
    } 
    if (keyIsDown(DOWN_ARROW)){
      movementCounter += 1;
      heroY += path;
      if(checkCollision(world1BoardLayer3,worldsTileSizes[currentWorld])){
        heroY -= path
      }
      if (movementCounter >= 15 / heroSpeed){
        currentIndex += 1;
        if (currentIndex === myHeroBack.length){
            currentIndex = 0;
        }
        currentHeroImage = myHeroBack[currentIndex];
        movementCounter = 0;
        print(currentIndex);
      }
    if (keyIsDown(UP_ARROW) && keyIsDown(LEFT_ARROW)){
      movementCounter += 1;
      heroY += path;
      if(checkCollision(world1BoardLayer3,worldsTileSizes[currentWorld])){
        heroY -= path
      }
      if (movementCounter >= 15 / heroSpeed){
        currentIndex += 1;
        if (currentIndex === myHeroDiagoBackLeft.length){
            currentIndex = 0;
        }
        currentHeroImage = myHeroDiagoBackLeft[currentIndex];
        movementCounter = 0;
        print(currentIndex);
      }
    } 
    if (keyIsDown(UP_ARROW) && keyIsDown(RIGHT_ARROW)){
      movementCounter += 1;
      heroY += path;
      if(checkCollision(world1BoardLayer3,worldsTileSizes[currentWorld])){
        heroY -= path
      }
      if (movementCounter >= 15 / heroSpeed){
        currentIndex += 1;
        if (currentIndex === myHeroDiagoBackRight.length){
            currentIndex = 0;
        }
        currentHeroImage = myHeroDiagoBackRight[currentIndex];
        movementCounter = 0;
        print(currentIndex);
      }
    // if (keyIsDown(32) ){
    //   currentDiapo++;
    // } 
  }
}
}
}

function keyPressed(){
  if (keyCode === 32){
    currentDiapo++;
  }
  // if (keyCode === LEFT_ARROW){
  //   currentDiapo--;
  //   //console.log(currentDiapo);
  // }
}

// Appelé en continue après le setup

function draw() {
  if (diapoVisible) {
    if (currentDiapo < diapos.length) { 
      if (diapos[currentDiapo]) { 
        image(diapos[currentDiapo], 0, 0, diapoW, diapoH);    

      }
      //diapoVisible = false; 
      
    }else {
      diapoVisible = false;
       currentDiapo = 0;
      background(255);
       console.log(currentDiapo);
      drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
      //drawElements(world1BoardLayer2, layer2Dictionnary, world2TileSize);
      drawColisions(world1BoardLayer3, layer3Dictionnary, world3TileSize);
      image(currentHeroImage, heroX,heroY,heroWidth,heroHeight);
      drawFront(world1BoardLayer4, layer4Dictionnary, world4TileSize);
     }
  } 

  checkKeys(currentWorld);
}


// function draw() {
//   // checkKeys(currentWorld);
//   if (diapoVisible) {
//     if (currentDiapo < diapos.length) {
//       if (diapos[currentDiapo]) { 
//         image(diapos[currentDiapo], 0, 0,diapoW,diapoH);
//         // checkKeys(currentWorld);

//       }
//     } 
//     if (currentDiapo >= diapos.length) {
//       // checkKeys(currentWorld);
//       diapoVisible = false;
//       currentDiapo = 0;
//       // background(255);
//       console.log(currentDiapo);
//     //   drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
//     //   drawElements(world1BoardLayer2, layer2Dictionnary, world2TileSize);
//     //   drawColisions(world1BoardLayer3, layer3Dictionnary, world3TileSize);
//     //   image(currentHeroImage, heroX,heroY,heroWidth,heroHeight);
//     //   drawFront(world1BoardLayer4, layer4Dictionnary, world4TileSize);
//     }
//   }
//     //image(inventaire[currentInventaire],100,0,426,123);

//   checkKeys(currentWorld);

// }


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