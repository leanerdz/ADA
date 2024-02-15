let world1TileDictionnary = {}
let world1Board = [
  [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
  [6,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [6,12,2,2,2,2,2,2,2,2,2,2,12,2,12,12,12,12,12,0],
  [6,12,2,12,12,12,2,12,12,12,12,12,12,2,12,12,12,12,12,0],
  [6,12,12,12,12,12,12,12,12,12,12,12,12,2,12,12,12,12,12,0],
  [6,12,2,12,12,12,12,12,12,12,2,12,12,2,12,12,12,12,12,0],
  [6,12,2,12,12,2,2,2,2,12,2,2,2,2,12,12,12,12,12,0],
  [6,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
]
let world1TileSize = 64

let world2TileDictionnary = {}
let world2Board = [
  [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
  [6,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [6,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [6,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [6,2,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [6,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [6,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [6,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
]
let world2TileSize = 64
let currentWorld = 0

let worlds = [] 
let tileDictionnaries = []
let worldsTileSizes = []
let hero
let heroWidth = world1TileSize
let heroHeight = world1TileSize
let heroX = 3*world1TileSize
let heroY = 6*world1TileSize

// Appelée une fois
function setup() {
  createCanvas(world1Board[0].length*world1TileSize,world1Board.length*world1TileSize);
  world1TileDictionnary = { 
                    0:loadImage('assets/arbres.png'),
                    4:loadImage('assets/arbres_haut.png'),
                    5:loadImage('assets/arbres_bas.png'),
                    6:loadImage('assets/arbres_cote.png'),
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
                    12:loadImage(''),
                    1:loadImage('assets/herbe.jpg'),
                    2:loadImage('assets/House.png'),
                    3:loadImage('assets/lune.jpg')
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


function checkCollision(gameBoard,tileSize) {
  for (let y = 0; y < gameBoard.length; y++) {
    const currentLine = gameBoard[y];
    for (let x = 0; x < currentLine.length; x++) {
      const currentTileValue = currentLine[x];    
      console.log(currentTileValue)  
      if (currentTileValue === 0 || currentTileValue === 1 || currentTileValue === 2 || currentTileValue === 4|| currentTileValue === 5|| currentTileValue === 6){
        if(rectIsInRect(x*tileSize-tileSize, y*tileSize-tileSize, heroX, heroY, heroWidth,heroHeight)){
          return true 
        }
      }
    }
  }

}

function rectIsInRect(xP, yP, x, y, widthP, heightP){
    if (x > xP && x < xP + widthP) {
        if (y > yP && y < yP + heightP) {
            return true;
        }
    }
    return false;
};


const checkKeys = () => {
  let keyIndex = -1;
  let path = 5;
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



// Appelé en continue après le setup
function draw() {
  checkKeys();
  drawWorld(worlds[currentWorld], tileDictionnaries[currentWorld], worldsTileSizes[currentWorld]);
  image(hero, heroX, heroY, heroWidth, heroHeight);
  drawFront(world2Board, world2TileDictionnary, world2TileSize);

}

// Choix graphiques finaux 
// Wireframes 
//logo chartre graphique 
// Passer perso derrière qqch, tete pas bloqué par la maison, point and click (menu, taverne), créer deux mondes, prototypes de menu, monde de dessus, monde point and click. Intégrer les sprites des disigners. 