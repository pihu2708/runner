
function preload(){
  //pre-load images
pathimg=loadImage('path.png')
runnerimgs=loadAnimation('Runner-1.png','Runner-2.png')



}

function setup(){
  createCanvas(400,400);
  //create sprites here
path=createSprite(200,200)
path.addImage(pathimg)
runner = createSprite(214, 370,6,4)
runner. addAnimation('running', runnerimgs)
invisisbleb=createSprite(369,324,30,700)
invisisbleb.visible=false
invisisbleb2=createSprite(32,180,30,700)
invisisbleb2.visible=false

}

function draw() {
  background(0);


path.velocityY= 4
path.scale = 1.2

if(path.y >500){
  path.y = height/2;
}
runner.scale= 0.1
runner.x=mouseX
runner.collide(invisisbleb)
runner.collide(invisisbleb2)


drawSprites()






}
