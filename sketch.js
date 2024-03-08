////////////////////////////////////////////////////////////////////
//////////////////////////Monde 1//////////////////////////////////
////////////////////////////////////////////////////////////////////


let world1TileDictionnary = {};
let world1Board = [
  [0,0,0,0,0,0,0,10,14,14,14,14,14,14,12,0,0,0,0,0],
  [0,0,0,0,0,0,0,11,15,16,14,14,17,15,13,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,10,17,15,13,25,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,10,12,21,23,26,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,20,18,12,0,28,27,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,10,17,19,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,10,12,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,10,12,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,10,12,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,10,12,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,10,12,0,0,0,0,0,0,0,0,0,0],

];
let world1TileSize = 64;

let world2TileDictionnary = {};
let world2Board = [
  [10,10,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [10,0,0,0,0,0,0,0,0,20,21,24,24,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,22,23,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,20,21,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,22,23,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];
let world2TileSize = 64;

let world3TileDictionnary = {};
let world3Board = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];
let world3TileSize = 64;

let world4TileDictionnary = {};
let world4Board = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
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
let heroWidth = 55;
let heroHeight = 55;
let heroX = 4*world1TileSize;
let heroY = 6*world1TileSize;
let myHeroRight = [];
let myHeroLeft = [];
let myHeroTop = [];
let myHeroBack = [];
let currentIndex = 0;
let movementCounter = 0;
let currentHeroImage = 0;


// Appelée une fois
function setup() {
  createCanvas(world1Board[0].length*world1TileSize,world1Board.length*world1TileSize);
  world1TileDictionnary = { 
                    0:loadImage('designs-des-designers/Herbe.png'),
                    10:loadImage('designs-des-designers/eau/cote_riviere3.png'),
                    11:loadImage('designs-des-designers/eau/exterieur_virage6.png'),
                    12:loadImage('designs-des-designers/eau/cote_riviere4.png'),
                    13:loadImage('designs-des-designers/eau/exterieur_virage8.png'),
                    14:loadImage('designs-des-designers/eau/eau.png'),
                    15:loadImage('designs-des-designers/eau/cote_riviere2.png'),
                    16:loadImage('designs-des-designers/eau/interieur_virage.png'),
                    17:loadImage('designs-des-designers/eau/interieur_virage4.png'),
                    18:loadImage('designs-des-designers/eau/interieur_virage2.png'),
                    19:loadImage('designs-des-designers/eau/exterieur_virage5.png'),
                    20:loadImage('designs-des-designers/eau/exterieur_virage.png'),
                    21:loadImage('designs-des-designers/côté chemin 4.png'),
                    22:loadImage('designs-des-designers/etrerieur virage 2.png'),
                    23:loadImage('designs-des-designers/intérieur virage 4.png'),
                    24:loadImage('designs-des-designers/côté chemin 2.png'),
                    25:loadImage('designs-des-designers/côté chemin 3.png'),
                    26:loadImage('designs-des-designers/intérieur virage 3.png'),
                    27:loadImage('designs-des-designers/intérieur virage 2.png'),
                    28:loadImage('designs-des-designers/côté chemin 1.png'),
                    30:loadImage('designs-des-designers/observatoire 1.png'),
                    31:loadImage('designs-des-designers/observatoire 2.png'),
                    32:loadImage('designs-des-designers/observatoire 3.png'),
                    33:loadImage('designs-des-designers/observatoire 4.png'),
                    34:loadImage('designs-des-designers/observatoire 5.png'),
                    35:loadImage('designs-des-designers/observatoire 6.png'),
                    36:loadImage('designs-des-designers/observatoire 7.png'),
                    37:loadImage('designs-des-designers/observatoire 8.png'),
                    38:loadImage('designs-des-designers/observatoire 9.png'),
                    

                    }

  world2TileDictionnary = { 
                    0: createImage(1,1),
                    10:loadImage('designs-des-designers/arbre_entier.png'),
                    20:loadImage('designs-des-designers/wesh.png'),
                    21:loadImage('designs-des-designers/2eme_plan_pont.png'),
                    22:loadImage('designs-des-designers/3eme_plan_pont.png'),
                    23:loadImage('designs-des-designers/4eme_plan_pont.png'),
                    24:loadImage('designs-des-designers/côté chemin mer.png'),
                    25:loadImage('designs-des-designers/interieur_virage_mer2.png'),

                    }

  world3TileDictionnary = { 
                    0: createImage(1,1),
                    1: createImage(1,1),
                    }
  world4TileDictionnary = { 
                    0: createImage(1,1),
                    }
  hero0 = loadImage('assets/dogRight1.png'); 
  myHeroRight.push(hero0);
  hero1 = loadImage('assets/dogRight2.png'); 
  myHeroRight.push(hero1);
  hero2 = loadImage('assets/dogRight3.png'); 
  myHeroRight.push(hero2);
  hero3 = loadImage('assets/dogRight4.png'); 
  myHeroRight.push(hero3);

  currentHeroImage = hero0;

  myHeroLeft.push(loadImage('assets/dogLeft1.png'));
  myHeroLeft.push(loadImage('assets/dogLeft2.png')); 
  myHeroLeft.push(loadImage('assets/dogLeft3.png')); 
  myHeroLeft.push(loadImage('assets/dogLeft4.png'));

  myHeroTop.push(loadImage('assets/dogTop1.png'));
  myHeroTop.push(loadImage('assets/dogTop2.png')); 
  myHeroTop.push(loadImage('assets/dogTop3.png')); 
  myHeroTop.push(loadImage('assets/dogTop4.png'));

  myHeroBack.push(loadImage('assets/dogBack1.png'));
  myHeroBack.push(loadImage('assets/dogBack2.png')); 
  myHeroBack.push(loadImage('assets/dogBack3.png')); 
  myHeroBack.push(loadImage('assets/dogBack4.png'));
  worlds = [world1Board]
  tileDictionnaries = [world1TileDictionnary]
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
  if(currentMap === 1){
    if (keyIsDown(LEFT_ARROW)){
      movementCounter += 1;
      heroX -= path; 
      if(checkCollision(world3Board,worldsTileSizes[currentWorld])){
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
      if(checkCollision(world3Board,worldsTileSizes[currentWorld])){
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
  }
  if (currentMap ===0){
    if (keyIsDown(LEFT_ARROW)){
      movementCounter += 1;
      heroX -= path; 
      if(checkCollision(world3Board,worldsTileSizes[currentWorld])){
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
      if(checkCollision(world3Board,worldsTileSizes[currentWorld])){
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
      if(checkCollision(world3Board,worldsTileSizes[currentWorld])){
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
      if(checkCollision(world3Board,worldsTileSizes[currentWorld])){
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
    } 
  }
  
}


// Appelé en continue après le setup
function draw() {
  checkKeys(currentWorld);
  drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
  drawElements(world2Board, world2TileDictionnary, world2TileSize);
  drawColisions(world3Board, world3TileDictionnary, world3TileSize);
  image(currentHeroImage, heroX,heroY,heroWidth,heroHeight);
  drawFront(world3Board, world3TileDictionnary, world3TileSize);
  
}


