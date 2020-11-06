var fixed,moving;





function setup() {
 createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 50);
  fixed.shapeColor=("green")
  moving=createSprite(300, 100, 20, 20);
  moving.shapeColor=("green")
}

function draw() {
  background("black");  
  moving.x= World.mouseX;
  moving.y= World.mouseY;

  console.log(moving.x - fixed.x);
  console.log((moving.width + fixed.width)/2);

  if(moving.x - fixed.x <= (moving.width + fixed.width)/2 &&
  fixed.x - moving.x <= (moving.width + fixed.width)/2 &&
  moving.y - fixed.y <= (moving.height + fixed.height)/2 &&
  fixed.y - moving.y <= (moving.height + fixed.height/2)){
    fixed.shapeColor=("red")
    moving.shapeColor=("red")
  } else{
    moving.shapeColor=("green")
    fixed.shapeColor=("green")
  }
  drawSprites();
}