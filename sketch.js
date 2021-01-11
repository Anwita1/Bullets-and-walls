var wall, defomation, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(1,2);
  weight=random(30, 52);
  bullet= createSprite(1500, 200, 60, height/2);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor= "blue";
  console.log(speed);
  bullet.velocityX= speed;
  thickness= random(22,83);
}

function draw() {
  background("yellow");  
  drawSprites();
 if(hasCollided(bullet, wall)){
   bullet.velocityX=0;
   var damage= 0.5 * weight * speed * speed/ (thickness * thickness * thickness)
   if(damage > 10){
     wall.shapeColor= "red";
   }
   if(damage < 10){
     wall.shapeColor = "green";
   }
 }
}

function hasCollided(bullet, wall)
{bulletRightEdge= bullet.x + bullet.width;
 wallLeftEdge = wall.x;
 if(bulletRightEdge>= wallLeftEdge){
   return true;
 }
 return false;
}