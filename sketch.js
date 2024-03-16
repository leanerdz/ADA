////////////////////////////////////////////////////////////////////
//////////////////////////Monde 1//////////////////////////////////
////////////////////////////////////////////////////////////////////


let world1TileDictionnary = {};
let world1Board = [
  [0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,32,30],
  [0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,37,39,30],
  [0,1,1,21,21,21,25,0,0,1,0,1,0,1,0,0,37,39,30,30],
  [0,0,1,0,0,1,20,0,1,0,1,0,0,1,0,1,32,30,30,30],
  [0,1,1,1,0,0,20,0,1,0,1,0,1,0,1,1,32,30,30,30],
  [0,0,1,0,1,0,20,0,0,0,0,1,0,0,0,0,35,38,30,30],
  [0,1,0,1,0,0,23,21,21,21,21,25,0,0,0,0,0,35,38,30],
  [0,1,0,0,1,0,0,0,0,0,0,23,21,21,21,21,21,25,32,30],
  [0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,23,32,30],
];
let world1TileSize = 64;

let world2TileDictionnary = {};
let world2Board = [
  [11,11,11,11,10,10,10,10,10,10,10,10,11,11,11,11,10,11,0,0],
  [10,10,1,2,11,11,11,11,11,11,11,11,10,10,10,10,11,0,0,0],
  [11,11,3,4,5,0,0,10,10,10,10,10,11,11,11,11,0,0,0,0],
  [10,10,10,10,10,10,0,11,11,11,11,11,10,10,10,10,0,0,0,0],
  [11,11,11,11,11,11,0,10,10,10,10,10,11,11,11,11,0,0,0,0],
  [10,10,10,10,10,10,0,11,11,11,11,11,10,10,10,10,0,0,0,0],
  [11,11,11,11,11,11,0,0,0,0,0,0,11,11,11,11,0,0,0,0],
  [10,10,10,10,10,10,10,10,10,10,10,0,0,0,0,0,0,0,6,7],
  [11,11,11,11,11,11,11,11,11,11,11,0,0,0,0,0,0,0,8,9],
];
let world2TileSize = 64;

let world3TileDictionnary = {};
let world3Board = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
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

let world4TileDictionnary = {};
let world4Board = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,10,10,10,10,10,10,0,0,0],

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


// Appelée une fois
function setup() {
  createCanvas(world1Board[0].length*world1TileSize,world1Board.length*world1TileSize);
  world1TileDictionnary = { 
    0:loadImage('designs-des-designers/herbe.png'),
    1:loadImage('designs-des-designers/herbeMotif.png'),
    20:loadImage('designs-des-designers/chemin1.png'),
    21:loadImage('designs-des-designers/chemin2.png'),
    23:loadImage('designs-des-designers/chemin3.png'),
    24:loadImage('designs-des-designers/chemin4.png'),
    25:loadImage('designs-des-designers/chemin5.png'),
    30:loadImage('designs-des-designers/eau/eau.png'),
    31:loadImage('designs-des-designers/eau/cote_riviere2.png'),
    32:loadImage('designs-des-designers/eau/cote_riviere3.png'),
    33:loadImage('designs-des-designers/eau/cote_riviere4.png'),
    34:loadImage('designs-des-designers/eau/exterieur_virage.png'),
    35:loadImage('designs-des-designers/eau/exterieur_virage6.png'),
    36:loadImage('designs-des-designers/eau/exterieur_virage8.png'),
    37:loadImage('designs-des-designers/eau/exterieur_virage4.png'),
    38:loadImage('designs-des-designers/eau/interieur_virage.png'),
    39:loadImage('designs-des-designers/eau/interieur_virage2.png'),
    40:loadImage('designs-des-designers/eau/interieur_virage4.png'),
    41:loadImage('designs-des-designers/eau/exterieur_virage5.png'),
  }

  world2TileDictionnary = { 
    0: createImage(1,1),
    1:loadImage('designs-des-designers/maison1.png'),
    2:loadImage('designs-des-designers/maison2.png'),
    3:loadImage('designs-des-designers/maison3.png'),
    4:loadImage('designs-des-designers/maison4.png'),
    5:loadImage('designs-des-designers/maison5.png'),
    6:loadImage('designs-des-designers/wesh.png'),
    7:loadImage('designs-des-designers/2eme_plan_pont.png'),
    8:loadImage('designs-des-designers/3eme_plan_pont.png'),
    9:loadImage('designs-des-designers/4eme_plan_pont.png'),
    10:loadImage('designs-des-designers/arbre_1.png'),
    11:loadImage('designs-des-designers/arbre_2.png'),
    
  }

  world3TileDictionnary = { 
                    0: createImage(1,1),
                    1: createImage(1,1),
                    2: createImage(1,1),
  }

  world4TileDictionnary = { 
                    0: createImage(1,1),
                    10:loadImage('designs-des-designers/arbre_1.png'),
                    11:loadImage('designs-des-designers/arbre_2.png'),
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

  myHeroLeft.push(loadImage('animations/dogLeft1.png'));
  myHeroLeft.push(loadImage('animations/dogLeft2.png')); 
  myHeroLeft.push(loadImage('animations/dogLeft3.png')); 
  myHeroLeft.push(loadImage('animations/dogLeft4.png'));

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
    if (keyIsDown(UP_ARROW) && keyIsDown(LEFT_ARROW)){
      movementCounter += 1;
      heroY += path;
      if(checkCollision(world3Board,worldsTileSizes[currentWorld])){
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
      if(checkCollision(world3Board,worldsTileSizes[currentWorld])){
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
  drawFront(world4Board, world4TileDictionnary, world4TileSize);
  
}