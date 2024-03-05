let world1TileDictionnary = {};
let world1Board = [
  [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
  [6,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [6,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [6,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [6,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [6,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [6,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [6,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
];
let world1TileSize = 64;

let world2TileDictionnary = {};
let world2Board = [
  [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
  [12,21,22,23,12,12,12,31,32,33,34,12,12,12,12,12,12,12,12,12],
  [12,24,25,26,12,12,12,35,36,37,38,12,12,12,12,12,12,12,12,12],
  [12,27,28,29,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
  [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
  [12,12,12,12,12,12,12,41,42,12,12,12,12,12,12,12,12,12,12,12],
  [12,12,12,12,12,12,12,43,44,45,12,12,12,12,12,12,12,12,12,12],
  [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
  [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
];
let world2TileSize = 64;

let world3TileDictionnary = {};
let world3Board = [
  [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
  [6,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [6,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [6,12,12,12,12,12,12,12,12,12,12,12,2,12,12,12,12,12,12,0],
  [6,12,12,12,12,12,12,12,12,12,2,2,2,2,2,2,12,12,12,0],
  [6,12,12,12,12,12,12,12,12,2,2,2,2,2,2,2,2,2,2,0],
  [6,12,12,12,12,12,12,2,2,2,2,2,2,2,2,2,2,2,2,0],
  [6,12,12,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
  [6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
];
let world3TileSize = 64;
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
                    0:loadImage('assets/arbres.png'),
                    4:loadImage('assets/arbres_haut.png'),
                    5:loadImage('assets/arbres_bas.png'),
                    6:loadImage('assets/arbres_cote.png'),
                    7:loadImage('assets/socle.png'),
                    12:loadImage('assets/sol.png'),
                    1:loadImage('assets/herbe.jpg'),
                    2:loadImage('assets/House.png'),
                    3:loadImage('assets/lune.jpg')
                    }

  world2TileDictionnary = { 
                    0: loadImage('assets/arbres.png'),
                    4: loadImage('assets/arbres_haut.png'),
                    5: loadImage('assets/arbres_bas.png'),
                    6: loadImage('assets/arbres_cote.png'),
                    21: loadImage('designs-des-designers/observatoire 1.png'),
                    22: loadImage('designs-des-designers/observatoire 2.png'),
                    23: loadImage('designs-des-designers/observatoire 3.png'),
                    24: loadImage('designs-des-designers/observatoire 4.png'),
                    25: loadImage('designs-des-designers/observatoire 5.png'),
                    26: loadImage('designs-des-designers/observatoire 6.png'),
                    27: loadImage('designs-des-designers/observatoire 7.png'),
                    28: loadImage('designs-des-designers/observatoire 8.png'),
                    29: loadImage('designs-des-designers/observatoire 9.png'),
                    31: loadImage('designs-des-designers/garage1.png'),
                    32: loadImage('designs-des-designers/garage2.png'),
                    33: loadImage('designs-des-designers/garage3.png'),
                    34: loadImage('designs-des-designers/garage4.png'),
                    35: loadImage('designs-des-designers/garage5.png'),
                    36: loadImage('designs-des-designers/garage6.png'),
                    37: loadImage('designs-des-designers/garage7.png'),
                    38: loadImage('designs-des-designers/garage8.png'),
                    41: loadImage('designs-des-designers/maison1.png'),
                    42: loadImage('designs-des-designers/maison2.png'),
                    43: loadImage('designs-des-designers/maison3.png'),
                    44: loadImage('designs-des-designers/maison4.png'),
                    45: loadImage('designs-des-designers/maison5.png'),
                    12:createImage(1, 1),
                    1:loadImage('assets/herbe.jpg'),
                    2:loadImage('assets/House.png'),
                    3:loadImage('assets/lune.jpg')
                    }

  world3TileDictionnary = { 
                    0: loadImage('assets/arbres.png'),
                    4: loadImage('assets/arbres_haut.png'),
                    5: loadImage('assets/arbres_bas.png'),
                    6: loadImage('assets/arbres_cote.png'),
                    12:loadImage('assets/sol.png'),
                    1:loadImage('assets/herbe.jpg'),
                    2:loadImage('assets/House.png'),
                    3:loadImage('assets/lune.jpg')
                    }

  hero = loadImage('assets/hero2.png');
  worlds = [world1Board, world3Board]
  tileDictionnaries = [world1TileDictionnary, world3TileDictionnary]
  worldsTileSizes = [world1TileSize,world3TileSize]
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
      if (currentTileValue === 0 || currentTileValue === 1 || currentTileValue === 2 || currentTileValue === 4|| currentTileValue === 5|| currentTileValue === 6 || currentTileValue === 7){
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
      if(checkCollision(worlds[currentWorld],worldsTileSizes[currentWorld])){
        heroX += path
      }
    } 
    if (keyIsDown(RIGHT_ARROW)){
      heroX += path;
      if(checkCollision(worlds[currentWorld],worldsTileSizes[currentWorld])){
        heroX -= path
      }
    } 
  }
  if (currentMap ===0){
    if (keyIsDown(LEFT_ARROW)){
      heroX -= path; 
      if(checkCollision(worlds[currentWorld],worldsTileSizes[currentWorld])){
        heroX += path
      }
    } 
    if (keyIsDown(RIGHT_ARROW)){
      heroX += path;
      if(checkCollision(worlds[currentWorld],worldsTileSizes[currentWorld])){
        heroX -= path
      }
    } 
    if (keyIsDown(UP_ARROW)){
      heroY -= path; 
      if(checkCollision(worlds[currentWorld],worldsTileSizes[currentWorld])){
        heroY+= path
      }
    } 
    if (keyIsDown(DOWN_ARROW)){
      heroY += path;
      if(checkCollision(worlds[currentWorld],worldsTileSizes[currentWorld])){
        heroY -= path
      }
    } 
  }
  
}


// Appelé en continue après le setup
function draw() {
  checkKeys(currentWorld);
  drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
  image(hero, heroX, heroY, heroWidth, heroHeight);
  drawFront(world2Board, world2TileDictionnary, world2TileSize);
  
}


