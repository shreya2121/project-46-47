var bird;
var birdImage;
var bgImage
var ob1, ob2, ob3, ob4, ob5;
var gameState = 1
var obsgroup;
var birdflipImage, resetbutton, resetbuttonImage;
function preload() {

  birdImage= loadAnimation("birdy1.png","birdy2.png", "birdy3.png", "birdy4.png", "birdy 5.png");
  birdflipImage = loadAnimation("birdyflip.png");

//b1 = loadImage("birdy1.png");

bgImage= loadImage("bg2.gif")
  
resetbuttonImage = loadImage("resetbutton.png");
ob2Image = loadImage("ob2 new.png");
ob3Image = loadImage("ob2 new(1).png");

}
function setup() {

 
  
  createCanvas(1000,600);


 
 bg = createSprite(400,200,800,400);
 bg.addImage(bgImage);
bg.velocityX = -2;

obsgroup= new Group();

resetbutton = createSprite(500,300,200,200);
resetbutton.scale= 0.5;
resetbutton.visible= false;



bird = createSprite(350,200);
// bird.addImage("b1", b1);
bird.addAnimation("bird", birdImage);
bird.addAnimation ("birdflip", birdflipImage);
resetbutton.addImage("resetbutton", resetbuttonImage);
bird.debug = true;
 bird.setCollider ("circle",0,0,50);
}

function draw() {
background(bgImage);  
if (gameState==1){
  if(bg.x<250){
    bg.x=bg.width/2
  }
  if(keyDown("space"))
  {
    bird.velocityY= -10
  
  }
  bird.velocityY= bird.velocityY + 0.8
  if (obsgroup.isTouching(bird)|| bird.y>600) {
    gameState = 2;
  }
  spawnPillar1();
  spawnPillar2();
}
else if (gameState==2){
  resetbutton.visible= true;
bg.velocityX=0;
obsgroup.setVelocityXEach(0);
bird.velocityY=0;
bird.changeAnimation("birdflip");

}

  drawSprites();
}

function spawnPillar1(){
  if (frameCount% 200==0) {
    var p1 =createSprite(1000,580,10,100)
    p1.y =random(530,600);
    p1.velocityX = -2
    p1.addImage (ob3Image);
    p1.debug = true;
    p1.setCollider("rectangle",0,0,100,500);
    p1.depth = resetbutton.depth
    resetbutton.depth +=1
    obsgroup.add(p1);
  }
}

function spawnPillar2(){
  if (frameCount% 200==0){
    var p2 = createSprite(1000,-100,10,100)
    p2.y = random(-50,-200);
    p2.velocityX = -2          
    p2.addImage (ob2Image);
    p2.debug = true;
    p2.setCollider("rectangle",0,0,100,500);
    p2.depth = resetbutton.depth
    resetbutton.depth +=1
    obsgroup.add(p2);
  }
}
