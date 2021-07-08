var shipImg,ship,seaImage,sea;
function preload() {
  
 shipImg=loadAnimation("ship-1.png", "ship-2.png", "ship-1.png", "ship-2.png")
 seaImage=loadImage("sea.png")

}
function setup() {
  
  createCanvas(600,300);
  background(0);
  
  ship=createSprite(70,180,20,20)
  ship.addAnimation("ship",shipImg)
ship.scale=0.2;

sea=createSprite(10,200,600,10);
sea.addImage(seaImage);
sea.velocityX=-5;
sea.scale=0.3;
}
function draw() {
  
  background(0);
  sea.velocityX=-3;
  if(sea.x<0){
    sea.x = sea.width/8;
    
    }




sea.depth=ship.depth
ship.depth=ship.depth+1;
drawSprites();

  }
  
  

  
  
  




 
