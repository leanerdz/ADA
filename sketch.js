let world1TileDictionnary = {};
let world1Board = [
  [0,0,0,0,0,0,0,10,14,14,14,14,14,14,12,0,0,0,0,0],
  [0,0,0,0,0,0,0,11,15,16,14,14,17,15,13,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,10,17,15,13,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,10,12,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,20,18,12,0,0,0,0,0,0,0,0,0],
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
  [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,20,21,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,22,23,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
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
  [0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
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
let hero;
let heroWidth = 55;
let heroHeight = 55;
let heroX = 4*world1TileSize;
let heroY = 6*world1TileSize;

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


                    }

  world2TileDictionnary = { 
                    0: createImage(1,1),
                    10:loadImage('designs-des-designers/arbre_entier.png'),
                    20:loadImage('designs-des-designers/wesh.png'),
                    21:loadImage('designs-des-designers/2eme_plan_pont.png'),
                    22:loadImage('designs-des-designers/3eme_plan_pont.png'),
                    23:loadImage('designs-des-designers/4eme_plan_pont.png'),
                    }

  world3TileDictionnary = { 
                    0: createImage(1,1),
                    1: createImage(1,1),
                    }
  world4TileDictionnary = { 
                    0: createImage(1,1),
                    }

  hero = loadImage('assets/hero2.png');
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



const checkKeys = (currentMap) => {
  let path = 5;
  if(currentMap === 1){
    if (keyIsDown(LEFT_ARROW)){
      heroX -= path; 
      if(checkCollision(world3Board,worldsTileSizes[currentWorld])){
        heroX += path
      }
    } 
    if (keyIsDown(RIGHT_ARROW)){
      heroX += path;
      if(checkCollision(world3Board,worldsTileSizes[currentWorld])){
        heroX -= path
      }
    } 
  }
  if (currentMap ===0){
    if (keyIsDown(LEFT_ARROW)){
      heroX -= path; 
      if(checkCollision(world3Board,worldsTileSizes[currentWorld])){
        heroX += path
      }
    } 
    if (keyIsDown(RIGHT_ARROW)){
      heroX += path;
      if(checkCollision(world3Board,worldsTileSizes[currentWorld])){
        heroX -= path
      }
    } 
    if (keyIsDown(UP_ARROW)){
      heroY -= path; 
      if(checkCollision(world3Board,worldsTileSizes[currentWorld])){
        heroY+= path
      }
    } 
    if (keyIsDown(DOWN_ARROW)){
      heroY += path;
      if(checkCollision(world3Board,worldsTileSizes[currentWorld])){
        heroY -= path
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
  image(hero, heroX, heroY, heroWidth, heroHeight);
  drawFront(world3Board, world3TileDictionnary, world3TileSize);
  
}


