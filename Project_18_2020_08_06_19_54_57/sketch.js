var monkey,monkey_image,ground,bananagrp,bananaimage,obs,obstacleimage,obstaclegroup,backprop,backpropimg,score;

function preload(){
  monkey_image = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaimage = loadImage("banana.png");
  obstacleimage = loadImage("stone");
  backpropimg = loadImage("jungle");
  
}

function setup() {
  createCanvas(400, 400);
  monkey = createSprite(100,350,20,20);
  monkey.addAnimation("monkey",monkeyimage);
  ground = createSprite(200,360,400,10);
  ground.x = ground.width/2;
  ground.velocityX = -3;
  ground.visisble = false;
  backprop.addImage(backpropimg);
  backprop.velocityX = -2;
  backprop.x = backprop.width/2;
}

function draw() {
  background(220);
  
  if(ground.x < 20){
    ground.x = ground.width/2;
  }
  
  if(backprop.x < 20){
    backprop.x = backprop.width/2;
  }
  
  if(bananagrp.isTouching(monkey)){
     score++;
     bananagrp.destroyEach();
  }

 switch(score){
   case 10: monkey.scale = 0.12;
     break;
     case 20: monkey.scale = 0.14;
     break;
     case 30: monkey.scale = 0.16;
     break;
     case 40: monkey.scale = 0.18;
     break;
     default: break;
 }

  if(obstaclegroup.isTouching(monkey)){
     monkey.scale = 0.2;
     }

stroke("white");
textSize(20);
fill("whhite");
text("Bananas Eaten: "+ score,200,50);

  food();
  obsf();
  drawSprites();
}

function food(){
  if(frameCount%80 === 0){
   var banana = createSprite(200,Math.round(random(120,200)),20,20);
    banana.addImage(bananaimage);
  banana.velocityX = -(5 + 3*score/100);
   banana.lifetime = 100;
  bananagrp.add(banana); 
  }
} 

function obsf(){
  if(frameCount%100 === 0){
    var stone = createSprite(400,340,30,30);
    stone.addImage(obstacleimage);
    stone.velocityX = -(7 + 3*score/100);
    stone.lifetime = 100;
  obstaclegroup.add(banana); 
  }
} 