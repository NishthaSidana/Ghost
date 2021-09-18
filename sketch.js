var Score=0
var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;

var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
  coinImg=loadImage("th-removebg-preview.png")
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  tower = createSprite(750,300,windowWidth,windowHeight);
  tower.addImage(towerImg);
  tower.velocityY = 10;
  tower.scale=2.6
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  coinGroup=new Group()
  ghost = createSprite(700,200,50,50);
  ghost.scale = 0.5;
  ghost.addImage(ghostImg);
  boundary1=createSprite(120,350,50,windowHeight)
  boundary1.visible=false
  boundary2=createSprite(1350,380,50,windowHeight)
  boundary2.visible=false
}

function draw(){
  background(0);
  if (tower.y>500){
    tower.y=200
  }
  if (keyDown("space")){
    ghost.velocityY=-15
  }
    ghost.velocityY=ghost.velocityY+2
    if (keyDown("right_arrow")){
      ghost.x=ghost.x+35
    }
    if (keyDown("left_arrow")){
      ghost.x=ghost.x-35
    }
    if (ghost.isTouching(boundary1)){
      ghost.destroy()
      tower.destroy()
      doorsGroup.destroyEach()
      doorsGroup.setVelocityYEach(0)
      climbersGroup.destroyEach()
      climbersGroup.setVelocityYEach(0)
      coinGroup.destroyEach()
      coinGroup.setVelocityYEach(0)
    }
    fill("yellow")
    textSize(20)
    text("Game Over",windowWidth/2,windowHeight/2)
    if (ghost.isTouching(boundary2)){
      ghost.destroy()
      tower.destroy()
      doorsGroup.destroyEach()
      doorsGroup.setVelocityYEach(0)
      climbersGroup.destroyEach()
      climbersGroup.setVelocityYEach(0)
      coinGroup.destroyEach()
      coinGroup.setVelocityYEach(0)
    }
    if (ghost.y<0){
      ghost.destroy()
      tower.destroy()
      doorsGroup.destroyEach()
      doorsGroup.setVelocityYEach(0)
      climbersGroup.destroyEach()
      climbersGroup.setVelocityYEach(0)
      coinGroup.destroyEach()
      coinGroup.setVelocityYEach(0)
    }
    if (ghost.y>windowHeight){
      ghost.destroy()
      tower.destroy()
      doorsGroup.destroyEach()
      doorsGroup.setVelocityYEach(0)
      climbersGroup.destroyEach()
      climbersGroup.setVelocityYEach(0)
      coinGroup.destroyEach()
      coinGroup.setVelocityYEach(0)
    }
    if(ghost.isTouching(coinGroup)){
      Score=Score+50
      coinGroup.destroyEach()
    }
    if(ghost.isTouching(doorsGroup)){
      ghost.velocityY=-100
    }
    createCoin()
    createDoors()
    drawSprites();
    text("score:"+Score,20,40)
}
function createDoors(){
  if (frameCount%40==0){
    door=createSprite(270,-150,20,30)
    climber=createSprite(270,-80,20,30)
    climber.addImage(climberImg)
    climber.velocityY=10
    door.x=Math.round(random(270,1300))
    climber.x=door.x
    door.addImage(doorImg)
    door.velocityY=10
    door.scale=1.3
    doorsGroup.add(door)
    climbersGroup.add(climber)
  }
}
function createCoin(){
  if (frameCount%100==0){
    coin=createSprite(270,-150,30,30)
    coin.addImage(coinImg)
    coin.x=Math.round(random(270,1300))
    coin.velocityY=10
    coin.scale=0.15
    coinGroup.add(coin)
  }
}