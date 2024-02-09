let world1TileDictionnary = {}
let world1Board = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,12,3,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [0,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [0,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [0,12,12,12,12,12,12,12,12,12,12,12,12,1,12,12,12,0],
  [0,12,12,12,12,12,12,12,12,12,12,12,1,1,12,12,12,0],
  [0,12,12,12,12,2,12,12,12,1,1,1,1,1,1,1,1,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]
let world1TileSize = 64

let world2TileDictionnary = {}
let world2Board = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,12,0,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [0,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [0,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [0,12,12,12,12,12,12,12,12,12,12,12,12,1,12,12,12,0],
  [0,12,12,1,1,12,12,12,12,12,12,12,1,1,12,12,12,0],
  [0,12,1,1,1,1,12,12,12,1,1,1,1,1,1,1,1,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
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
                    0: loadImage('assets/bord.jpg'),
                     12:loadImage('assets/ciel.jpg'),
                     1:loadImage('assets/herbe.jpg'),
                     2:loadImage('assets/pierre.jpg'),
                     3:loadImage('assets/lune.jpg')
                    }

  world2TileDictionnary = { 
                      0: loadImage('assets/bord.jpg'),
                       12:loadImage('assets/ciel.jpg'),
                       1:loadImage('assets/herbe.jpg'),
                       2:loadImage('assets/pierre.jpg'),
                       3:loadImage('assets/lune.jpg')
                      }

  hero = loadImage('assets/hero.jpg');
  worlds = [world1Board,world2Board]
  tileDictionnaries = [world1TileDictionnary,world2TileDictionnary]
  worldsTileSizes = [world1TileSize,world2TileSize]
}

function drawWorld(gameBoard,tileDictionnary,tileSize) {
  for (let y = 0; y < gameBoard.length; y++) {
    const currentLine = gameBoard[y];
    for (let x = 0; x < currentLine.length; x++) {
      const currentTileValue = currentLine[x];
      let currentImageName = tileDictionnary[currentTileValue];
      // Dessiner l'image
      image(currentImageName, x*tileSize, y*tileSize, tileSize, tileSize);
    }
  }
}


function checkCollision(gameBoard,tileSize) {
  let currentLine;
  let currentTileValue;
  let index;
  for (let y = 0; y < gameBoard.length; y++) {
    currentLine = gameBoard[y];
    for (let x = 0; x < currentLine.length; x++) {
      currentTileValue = currentLine[x];      
      // Position de la tuile
      // x*tileSize, y*tileSize, tileSize, tileSize
      // heroX, heroY
      rectIsInRect()
    }
  }
  //récupère la case dans laquelle est mon perso
  console.log(heroX/world1TileSize);
  console.log(heroY/world1TileSize);
}

function pointIsInRect(hX, hY){} // Mettre les bons parametres
function rectIsInRect(){} // Mettre les bons parametres

function keyPressed() {
  let keyIndex = -1;
  if (key === 'q'){
    heroX -= world1TileSize; 
  }
  if (key === 'd'){
    heroX += world1TileSize;
  }

  if (key === 'z'){
    heroY -= world1TileSize; 
  }
  if (key === 's'){
    heroY += world1TileSize;
  }
   
}

// Appelé en continue après le setup
function draw() {

  checkCollision(worlds[currentWorld], 
                worldsTileSizes[currentWorld]);

  drawWorld(worlds[currentWorld],
            tileDictionnaries[currentWorld],
            worldsTileSizes[currentWorld]);
  
  image(hero, heroX, heroY, heroWidth, heroHeight);
  //background(20);
}
