var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400,100,50,100);
  movingrect=createSprite(200,100,80,30);
  fixedrect.shapeColor="red";
  movingrect.shapeColor="blue";
 }

function draw() {
  background("green"); 
  movingrect.x=mouseX;
  movingrect.y=mouseY;

  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 && 
    fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 &&
    movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2 && 
    fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2  ){
     movingrect.shapeColor="black";
     fixedrect.shapeColor="black";
  }

  else{
  fixedrect.shapeColor="red";
  movingrect.shapeColor="blue";
   }
  drawSprites();
}