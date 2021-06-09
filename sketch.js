
function preload(){
  lol=loadImage("images/img.png");  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  lol1=createSprite(windowWidth-700, windowHeight-310, 50, 50);
  lol1.addImage(lol);
  lol1.scale=1.35;
}


function draw() {
  background(0);  
  drawSprites();
}