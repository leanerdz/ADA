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
let gameEndImg;

let gameEndDelayMamie = 4000;
let gameEndTimemamie;

let meow1;
let meow2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  posXMamie = (windowWidth/2)-150;
  posYMamie = 100;
  widthImgMamie = 50;
  heightImgmamie = 50;
  bgmamie = loadImage('mini-jeux/maison-mamie/interieur_maison_mamie.png')
  chatCuisine = [loadImage('mini-jeux/maison-mamie/chatCuisine/chatCuisine1.png'),loadImage('mini-jeux/maison-mamie/chatCuisine/chatCuisine2.png'),loadImage('mini-jeux/maison-mamie/chatCuisine/chatCuisine3.png'),loadImage('mini-jeux/maison-mamie/chatCuisine/chatCuisine4.png'),loadImage('mini-jeux/maison-mamie/chatCuisine/chatCuisine3.png'),loadImage('mini-jeux/maison-mamie/chatCuisine/chatCuisine4.png'),loadImage('mini-jeux/maison-mamie/chatCuisine/chatCuisine3.png'),loadImage('mini-jeux/maison-mamie/chatCuisine/chatCuisine4.png'),loadImage('mini-jeux/maison-mamie/chatCuisine/chatCuisine3.png'),loadImage('mini-jeux/maison-mamie/chatCuisine/chatCuisine4.png'),loadImage('mini-jeux/maison-mamie/chatCuisine/chatCuisine5.png')]
  chatCanape = [loadImage('mini-jeux/maison-mamie/chatCanape/chatCanape1.png'),loadImage('mini-jeux/maison-mamie/chatCanape/chatCanape2.png'),loadImage('mini-jeux/maison-mamie/chatCanape/chatCanape3.png'),loadImage('mini-jeux/maison-mamie/chatCanape/chatCanape4.png'),loadImage('mini-jeux/maison-mamie/chatCanape/chatCanape3.png'),loadImage('mini-jeux/maison-mamie/chatCanape/chatCanape4.png'),loadImage('mini-jeux/maison-mamie/chatCanape/chatCanape3.png'),loadImage('mini-jeux/maison-mamie/chatCanape/chatCanape4.png'),loadImage('mini-jeux/maison-mamie/chatCanape/chatCanape3.png'),loadImage('mini-jeux/maison-mamie/chatCanape/chatCanape4.png'),loadImage('mini-jeux/maison-mamie/chatCanape/chatCanape5.png')]
  chatLunettes = [loadImage('mini-jeux/maison-mamie/chetLunettes/chetLunettes1.png'),loadImage('mini-jeux/maison-mamie/chetLunettes/chetLunettes2.png'),loadImage('mini-jeux/maison-mamie/chetLunettes/chetLunettes3.png'),loadImage('mini-jeux/maison-mamie/chetLunettes/chetLunettes4.png'),loadImage('mini-jeux/maison-mamie/chetLunettes/chetLunettes5.png'),loadImage('mini-jeux/maison-mamie/chetLunettes/chetLunettes4.png'),loadImage('mini-jeux/maison-mamie/chetLunettes/chetLunettes5.png'),loadImage('mini-jeux/maison-mamie/chetLunettes/chetLunettes4.png'),loadImage('mini-jeux/maison-mamie/chetLunettes/chetLunettes5.png'),loadImage('mini-jeux/maison-mamie/chetLunettes/chetLunettes4.png'),loadImage('mini-jeux/maison-mamie/chetLunettes/chetLunettes5.png'),loadImage('mini-jeux/maison-mamie/chetLunettes/chetLunettes5.png'),loadImage('mini-jeux/maison-mamie/chetLunettes/chetLunettes4.png'),loadImage('mini-jeux/maison-mamie/chetLunettes/chetLunettes5.png'),loadImage('mini-jeux/maison-mamie/chetLunettes/chetLunettes6.png'),loadImage('mini-jeux/maison-mamie/chetLunettes/chetLunettes7.png')]
  lunettes = loadImage('mini-jeux/maison-mamie/lunette.png')
  fixedCat1 = loadImage('mini-jeux/maison-mamie/chatfixes/chatFixe.png')
  fixedCat21 = loadImage('mini-jeux/maison-mamie/chatfixes/chatFixe2-1.png')
  fixedCat22 = loadImage('mini-jeux/maison-mamie/chatfixes/chatFixe2-2.png')
  gameEndImg = loadImage('mini-jeux/maison-mamie/gagne.png')
  meow1 = loadSound('mini-jeux/maison-mamie/meow1.wav');
  meow2 = loadSound('mini-jeux/maison-mamie/meow2.wav');
 coodinatesOfCats = [
    [800,100,310,310],//Dans la boite 
    [50,430,413,412],//Sur la commode 
    [350,250,424,424],//Derrière les rideaux
  ];
}
function pointIsInRect(xP,yP,xR,yR,wR,hR){
  if( (xP > xR && xP < xR + wR) && ( yP > yR && yP < yR + hR) )
  {
    return true;
  }else{
    return false;
  }
}


function clickOnCats() {
  for (let i = 0; i < coodinatesOfCats.length; i++) {
    let currentCoords = coodinatesOfCats[i];
    if (pointIsInRect(mouseX, mouseY, currentCoords[0], currentCoords[1], currentCoords[2], currentCoords[3])) {
      if (i === 0) {
        btClicked = true;
        cuisineIndex = 0;
        cuisineTarget = coodinatesOfCats[0][0] + 100;
      }
      if (i === 1) {
        cmdClicked = true;
        canapeIndex = 0;
        canapeTarget = coodinatesOfCats[1][0] + 100;
      }
      if (i === 2) {
        rdxClicked = true;
        lunettesIndex = 0;
        lunettesTarget = coodinatesOfCats[2][0] + 150;        
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

function endGame(){
  if (hasWonMamie) {
    if (!gameEndTimemamie) {
      gameEndTimemamie = millis() + gameEndDelayMamie;
    }
    if (millis() >= gameEndTimemamie) {
      console.log("You won !")
      // fill(255);
      // filter(BLUR, 3);
      // rect(posXMamie,posYMamie, 400,200)
      image(gameEndImg,80,50)
    }
  }
}


function draw() {
  background(bgmamie);
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
    meow2.play();
  }
  animateCat();
  endGame();
}
export default {
  setup,
  draw,
  pointIsInRect,
  clickOnCats,
  animateCat,
  endGame,
  bgmamie,
  posXMamie,
  posYMamie,
  widthImgMamie,
  heightImgmamie,
  btClicked,
  cmdClicked,
  rdxClicked,
  coodinatesOfCats,
  lunettes,
  chatCuisine,
  chatCanape,
  chatLunettes,
  fixedCat1,
  fixedCat21,
  fixedCat22,
  cuisineIndex,
  canapeIndex,
  lunettesIndex,
  cuisineTarget,
  canapeTarget,
  lunettesTarget,
  delayMamie,
  lastUpdateMamie,
  fixedCatFrame,
  fixedCatframeRate,
  hasWonMamie,
  gameEndImg,
  gameEndDelayMamie,
  gameEndTimemamie,
  meow1,
  meow2,
  meow2
};
// export * as mamie from './module.js';