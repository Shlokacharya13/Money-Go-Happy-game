
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 //createCanvas(600,600);
  
  var survivalTime=0;
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)

  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  score = 0;
}


function draw() {
background("white");
   
 
  

 if (ground.x<0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
   
  }
  
   monkey.velocityY = monkey.velocityY + 0.8; 
   monkey.collide(ground);
 
if(obstacleGroup.isTouching(monkey)){
   ground.velocityX = 0;
   monkey.velocityX = 0;
   obstacleGroup.setVelocityXEach(0);
   FoodGroup.setVelocityXEach(0);
   obstacleGroup.setLifetimeEach(-1);
   FoodGroup.setLifetimeEach(-1);
   obstacleGroup.destroyEach();
   FoodGroup.destroyEach();
 } 
spawnFood();
spawnObstacles();  
  
drawSprites();  

stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50); 
  
  
  
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
  
}

function spawnFood(){
  
if(frameCount % 80 == 0){
  banana = createSprite(300,300,10,10);
  banana.y = Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -2;
  banana.lifetime = 300;
  FoodGroup.add(banana);
}  
}

function spawnObstacles(){
  if(frameCount % 300 == 0){
 obstacle = createSprite(400,320,10,10)  
 obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = -3;
  obstacle.lifetime = 300;
  obstacleGroup.add(obstacle); 
  }  
  
}