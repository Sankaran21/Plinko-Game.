var ground;
var particles[];
var plinkos[];
var divisions[];
var divisionHeight=300;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);


for(var k=0; k <=Width; k = k + 80){
  divisions.push(new divisions(k,height-divisionHeight/2,10,divisonHeight));
}

for(var j =40;j <=width;j=j+50)
{
plinkos.push(new Plinko(j,75));
}
for(var j=15; j <=width-10; j=j+50)
{
plinkos.push(new Plinko(j,175));
}

if(frameCount%60===0){
particles.push(new Particle(random(width/2-10,width/2+10),10,10))
}

  ground=new Ground(240,790,480,20);
  
}

function draw() {
  background(255,255,255);  
  drawSprites();

  for(var j=0; j<particles.length; j++){
    particles[j].display();
  }
  for(var k=0;k<divisions.length;k++){
divisions[k].display();
  }
}